import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import Image from 'next/image';
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.div`
  background-color: white;
  display: block;
  width: 100%;


`;
const Logo = styled(Link)`
  color:#000;
  text-decoration:none;
  margin:0;
  z-index: 3;

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0;
  

`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: flex;
    flex-direction: column;
  ` : `
    display: none;
  `}
  gap: 50px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  padding: 70px 20px 20px;
 position: static;
 justify-content:center;
align-items: center;
  background-color: white;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction:row;
    padding: 0;
    border:none;
  }
`;
const NavLink = styled(Link)`
  display: block;
  
  color:black;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border:0;
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
 
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}><Image src={'/logo.jpg'} width={90} height={60}></Image></Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            {/* <NavLink href={'/service'}>Services</NavLink> */}

            <NavLink href={'/'}>Abourt us</NavLink>
            {/* <NavLink href={'/cart'}>Contact </NavLink> */}
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
            
          </NavButton>
        
        </Wrapper>
        
      </Center>
    </StyledHeader>
  );
}