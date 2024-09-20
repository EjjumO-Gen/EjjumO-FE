// MainPage.jsx
import styled from "styled-components"; 
import { useNavigate } from "react-router-dom";
import DeleteBannerSvg from "../../assets/images/deletepage_banner.svg?react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`;
const MessageContainer = styled.div`
    width: 100%;
    padding: 16px;
    align-items: center;
    text-align: center;
    width: auto;
    height: auto;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 32px;
`
const Button = styled.div`
    
`

const DeleteCompletePage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <MessageContainer>
                탈퇴가 완료되었습니다.
                <ButtonContainer>
                    <Button onClick={() => navigate("/")}>메인으로</Button>
                </ButtonContainer>
            </MessageContainer>
        </Container>
    );
}

export default DeleteCompletePage;
