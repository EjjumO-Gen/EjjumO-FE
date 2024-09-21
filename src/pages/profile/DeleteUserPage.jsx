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
const BannerWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: 100px;
`
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
const MessageWrapper = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Button = styled.div`
    
`

const DeleteUserPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <BannerWrapper>
                <DeleteBannerSvg />
            </BannerWrapper>
            <MessageContainer>
                Never sey good bay...<br />
                당신이 쌓아온 추억이 사라져요.<br />
                그래도 탈퇴하시겠습니까?<br />
                <MessageWrapper>
                    * 플레이리스트도 함께 삭제됩니다. *
                </MessageWrapper>
                <ButtonContainer>
                    <Button onClick={() => navigate("/profile/my/delete/complete")}>네</Button>
                    <Button onClick={() => navigate("/profile/my")}>네니오</Button>
                </ButtonContainer>
            </MessageContainer>
        </Container>
    );
}

export default DeleteUserPage;
