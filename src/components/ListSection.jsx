import React from "react";
import styled from "styled-components";
import ArrowIcon from '../assets/images/arrow_forward_ios.png'
import ListItem from "./ListItem";

const SectionContainer = styled.div`
    margin-top: 32px;
    margin-left: 16px;
`
const Title = styled.div`
    font-family: "Galmuri11";
    font-weight: bold;
    font-size: 24px;
    color: white;
`
const Arrow = styled.img`
    height: 24px;
    margin-left: 8px;
`
const ItemsContainer = styled.div`
    display: flex;
    overflow-x: scroll;

`

const ListSection = ({ title, items }) => {
    return (
        <SectionContainer>
            <Title>
                {title}
                <Arrow src={ArrowIcon} alt="Forward Arrow Icon" />
            </Title>
            <ItemsContainer>
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
            </ItemsContainer>
        </SectionContainer>
    );
};

export default ListSection;