import styled from "styled-components"
import LockSvg from "../../assets/images/lock.svg?react"
import LogoSvg from "../../assets/images/logo.svg?react"
import ProfileSvg from "../../assets/images/profile.svg?react"
import SearchSvg from "../../assets/images/search.svg?react"
import AccountSvg from "../../assets/images/account.svg?react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  max-width: 425px;
  z-index: 10;
  background-color: ${(props) => props.$bgColor};
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`

const Header = ({userId}) => {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("#222222");

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setBgColor("#222222");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProfileClick = () => {
    navigate(`/profile/my`);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Container $bgColor={bgColor}>
      <AccountSvg style={{ padding: "0 16px" }} onClick={handleProfileClick}/>
      <LogoSvg style={{ width: "40%" }} onClick={handleLogoClick}/>
      <SearchSvg style={{ padding: "0 16px" }} />
    </Container>
  );
};

export default Header;