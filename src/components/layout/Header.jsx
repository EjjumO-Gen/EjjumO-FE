import styled from "styled-components"

const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    max-width: 425px;
`

export default function Header() {
  return (
    <Container>
      <span>헤더</span>
    </Container>
  )
}