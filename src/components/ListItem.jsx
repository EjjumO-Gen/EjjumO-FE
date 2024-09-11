import styled from "styled-components";
import ThumbsUpSvg from "../assets/images/thumb_up.svg?react";

const ItemContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
`
const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    background-color: gray;
    margin-top: 16px;
    border-radius: ${props => props.shape === 'circle' ? '50%' : '0'};
`
const Name = styled.span`
    font-size: 16px;
    color: white;
    margin-top: 16px;
`
const LikeCount = styled.span`
    font-size: 16px;
    color: white;
    margin-right: 8px;
`
const LikeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`
const ListItem = ({ profileImg, name, likeCount, shape = 'square' }) => {
    return (
        <ItemContainer>
            <ProfileImage shape={shape}/>
            <Name>{name}</Name>
            <LikeContainer>
                <LikeCount>{likeCount}</LikeCount>
                <ThumbsUpSvg />
            </LikeContainer>
        </ItemContainer>
    );
};

export default ListItem;