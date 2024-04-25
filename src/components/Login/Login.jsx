
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { NavLink } from 'react-router-dom';


function Login() {

    return (
        <div>
            
            <GoogleOAuthProvider clientId={ import.meta.env.VITE_CLIENT_ID }>
                <GoogleLogin onSuccess={ (credentialResponse) => {
                    console.log(jwtDecode(credentialResponse.credential));
                    console.log(credentialResponse.credential);
                    console.log(credentialResponse);
                } }
                onError={()=>{
                    console.log("실패");
                }}
                />
            </GoogleOAuthProvider>

            <NavLink to={'/pay'}>결제창</NavLink>

            
        </div>
    );
}
export default Login;