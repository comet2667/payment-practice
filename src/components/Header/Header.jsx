import { Outlet } from "react-router-dom";

function Header(){
    return (
        <div>
            헤더입니다.
            <div>
                <Outlet/>
            </div>
        </div>
    );
}
export default Header;