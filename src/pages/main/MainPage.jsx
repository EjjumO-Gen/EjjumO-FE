import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function MainPage() {
    return (
        <Container>
            <span>메인</span>
            <div style={{fontFamily:"Galmuri11-Bold"}}>볼드체짱</div>
        </Container>
    )
}