import styled from "styled-components"
import LockSvg from "../../assets/images/lock.svg?react"
import LogoSvg from "../../assets/images/logo.svg?react"
import ProfileSvg from "../../assets/images/profile.svg?react"
import SearchSvg from "../../assets/images/search.svg?react"
import AccountSvg from "../../assets/images/account.svg?react"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      <AccountSvg style={{ padding: "0 16px" }} />
      <LogoSvg />
      <SearchSvg style={{ padding: "0 16px" }} />
    </Container>
  )
}