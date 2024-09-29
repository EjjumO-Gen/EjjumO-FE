import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePlaylistIdStore } from "../../store/playlist";

const AuthPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const playlistId = usePlaylistIdStore((state) => state.playlistId);
    
    useEffect(() => {
        const hash = location.hash;
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");
        
        if (accessToken) {
            sessionStorage.setItem("googleAccessToken", accessToken);
        }
        console.log(playlistId);
        navigate(`/playlist/${playlistId}`);
    }, [location])

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>
            구글 로그인 중...
        </div>
    );
};

export default AuthPage;