import styled from "styled-components";
import MainBanner from '../../assets/images/main_banner.png';
import ListSection from "../../components/ListSection";
import MakePlaylistSvg from "../../assets/images/make_playlist.svg?react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MainPage = () => {
    return (
        <Container>
            <img src={MainBanner} alt="Main Banner" style={{ width: '100%', height: 'auto' }} />
            <ListSection 
                title="내 플레이리스트"
                items={[
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15}
                     
                ]}
            />
            <ListSection 
                title="지금, 인기 플레이리스트" 
                items={[
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15},
                    {name: '플리 이름', likeCount: 15}
                    
                ]}
            />
            <ListSection 
                title="고인물이시군요 ^.^"
                items={[
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'},
                    {name: '유저 이름', likeCount: 15, shape: 'circle'}
                ]}
            />
            <span style={{ textAlign: "center", marginTop: "32px" }}>
                지금 바로 여러분의 추억의 플리를 공유하세요<br />.<br />.<br />.
            </span>
            <MakePlaylistSvg style={{ margin: "0 auto", marginTop: "8px", marginBottom: "32px" }} />
        </Container>
    );
};

export default MainPage;
