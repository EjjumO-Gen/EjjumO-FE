// MainPage.jsx
import styled from "styled-components";
import MainBanner from '../../assets/images/main_banner.png';
import ListSection from "../../components/ListSection";
import MakePlaylistSvg from "../../assets/images/make_playlist.svg?react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MainPage = () => {
    const navigate = useNavigate();

    const handleItemClick = (id) => {
        navigate(`/playlist/${id}`);
    };

    return (
        <Container>
            <img src={MainBanner} alt="Main Banner" style={{ width: '100%', height: 'auto' }} />
            <ListSection 
                title="내 플레이리스트"
                items={Array.from({ length: 10 }, (_, i) => ({
                    id: i + 1,
                    name: `플리 이름 ${i + 1}`,
                    likeCount: 15
                }))}
                onItemClick={handleItemClick}
            />
            <ListSection 
                title="지금, 인기 플레이리스트"
                items={Array.from({ length: 10 }, (_, i) => ({
                    id: 11 + i,
                    name: `플리 이름 ${11 + i}`,
                    likeCount: 15
                }))}
                onItemClick={handleItemClick}
            />
            <ListSection 
                title="고인물이시군요 ^.^"
                items={Array.from({ length: 10 }, (_, i) => ({
                    id: 1 + i,
                    name: `유저 이름 ${1 + i}`,
                    likeCount: 15,
                    shape: 'circle',
                    clickable: false
                }))}
            />
            <span style={{ textAlign: "center", marginTop: "32px" }}>
                지금 바로 여러분의 추억의 플리를 공유하세요<br />.<br />.<br />.
            </span>
            <MakePlaylistSvg style={{ margin: "0 auto", marginTop: "8px", marginBottom: "32px" }} />
        </Container>
    );
};

export default MainPage;
