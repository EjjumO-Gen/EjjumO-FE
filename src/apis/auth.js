export const googleLogin = async () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/auth';  // 구글 로그인 후 돌아올 URL
    const scope = 'https://www.googleapis.com/auth/youtube';
    const includeGrantedScopes = 'true';
    const state = 'pass-through value';
    
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}&include_granted_scopes=${includeGrantedScopes}&state=${encodeURIComponent(state)}`;
    
    // 구글 로그인 페이지로 리디렉션
    window.location.href = authUrl;
}