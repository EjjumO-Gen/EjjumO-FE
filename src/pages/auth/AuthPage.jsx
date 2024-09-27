import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const hash = location.hash;
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");
        
        if (accessToken) {
            sessionStorage.setItem("googleAccessToken", accessToken);
        }

        navigate("/playlist/22")
    }, [location])

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>
            구글 로그인 중...
        </div>
    );
};

export default AuthPage;