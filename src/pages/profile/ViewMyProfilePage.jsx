// ViewMyProfilePage.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components"; 
import ListSection from "../../components/ListSection";
import { useNavigate, useParams } from "react-router-dom";
import ProfileItem from "../../components/ProfileItem";
import DeleteUserSvg from "../../assets/images/delete_user.svg?react";
import { getUserById } from "../../apis/user";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const DeleteUserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`

const ViewMyProfilePage = () => {
    const navigate = useNavigate();

    const {userId} = useParams();
    const [userData, setUserData] = useState({
        "user": {},
        "playlist": []
    });

    useEffect(() => {
        getUserById({userId: 3, setData: setUserData})
    }, [userId]);

    const handleDeleteClick = () => {
        navigate('/profile/my/delete');
    }

    return (
        <Container>
            {userData && (
                <ProfileWrapper>
                    <ProfileItem
                        userId={userData.user.userId}
                        profilePic={userData.user.profilePic}
                        userName={userData.user.userName}
                        thumbs={userData.user.totalThumbs}
                    />
                </ProfileWrapper>
            )}
            <ListSection title="내 플레이리스트" data={userData.playlist} playList={true} />
            <DeleteUserWrapper>
                <DeleteUserSvg onClick={handleDeleteClick} style={{ marginBottom: "32px" }}/>
            </DeleteUserWrapper>
        </Container>
    );
}

export default ViewMyProfilePage;
