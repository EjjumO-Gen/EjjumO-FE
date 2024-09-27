// ViewProfilePage.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListSection from "../../components/ListSection";
import { useNavigate, useParams } from "react-router-dom";
import ProfileItem from "../../components/ProfileItem";
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

const ViewProfilePage = () => {
    const {userId} = useParams();
    const [userData, setUserData] = useState({
        "user": {},
        "playlist": []
    });

    useEffect(() => {
        getUserById({userId: userId, setData: setUserData})
    }, [userId]);

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
            <ListSection title="플레이리스트" data={userData.playlist} playList={true} />
        </Container>
    );
}

export default ViewProfilePage;