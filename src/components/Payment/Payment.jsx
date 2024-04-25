import { Bootpay } from '@bootpay/client-js';
import { payReserve } from '../../api/pay';
function Payment() {
    const response = async () => await Bootpay.requestPayment({
        "application_id": import.meta.env.VITE_PAY_ID,
        "price": 1000,
        "order_name": "테스트결제",
        "order_id": "TEST_ORDER_ID",
        "pg": "nicepay",
        "tax_free": 0,
        "user": {
            "id": "phs2667",
            "username": "박혜성",
            "phone": "01000000000",
            "email": "test@test.com"
        },
        "items": [
            {
                "id": "item_id",
                "name": "테스트아이템",
                "qty": 1,
                "price": 1000
            }
        ],
        "extra": {
            "open_type": "iframe",
            "card_quota": "0,2,3",
            "escrow": false
        }
    });


    const getBillingKey = async() => {
        const billing = await Bootpay.requestSubscription({
            application_id: import.meta.env.VITE_PAY_ID,
            pg: 'nicepay',
            tax_free: 0,
            order_name: '펀딩 신청 결제',
            subscription_id: (new Date()).getTime(),
            user: {
                username: '홍길동',
                phone: '01000000000'
            },
            extra: {
                subscription_comment: '펀딩 성공 시 결제 예정일에 자동 결제됩니다.',
                subscribe_test_payment: true
            }
        });
        const result = await payReserve({
            userName : '박혜성',
            receipId : billing.data.receipt_id,
        });
        console.log(result);
    }

    const test = async()=>{
        const result = await payReserve({
            userName : '박혜성',
            receipId : 'asdasd',
        })
        console.log(result);
    }

    return (
        <div>
            결제창입니다.
            <button onClick={() => response()}>결제요청</button>
            <button onClick={() => getBillingKey()}>빌링키 발급</button>
            <button onClick={() => test()}>Axios 테스트</button>
        </div>
    );
}
export default Payment;