import styled from "styled-components"
import Header from "../../components/layout/Header"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
`

export default function MainPage() {
    return (
        <Container>
            <Header />
            <span>메인</span>
        </Container>
    )
}