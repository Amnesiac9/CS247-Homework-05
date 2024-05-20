
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';





export default function NavBar(props: { pages: string[], activePage: string, setActivePage: (item: string) => void }) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMoving, setIsMoving] = useState<boolean>(false);

    const toggleMenu = () => {
        if (isOpen) {
            setIsMoving(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsMoving(false);
            }, 300); // Duration of the slide-out animation
        } else {
            setIsOpen(true);
        }
    };


    const handleNavClick = (navItem: string) => {
        props.setActivePage(navItem)
    }



    return (
        <Nav>
            <Logo />
            <HamburgerMenu onClick={toggleMenu}>
                <FaBars />
            </HamburgerMenu>
            <NavItems className={`${isOpen ? 'open' : ''} ${isMoving ? 'closing' : ''}`}>
                {props.pages.map((navItem) => (
                    <NavItem key={navItem}>
                        <NavLink
                            href="#"
                            className={props.activePage === navItem ? 'active' : ''}
                            onClick={() => handleNavClick(navItem)}
                        >
                            {navItem}
                        </NavLink>
                    </NavItem>
                ))}
            </NavItems>
        </Nav>
    )
}

const slideIn = keyframes`
from {
    transform: translateX(100%);
}
to {
    transform: translateX(0);
}
`

const slideOut = keyframes`
from {
    transform: translateX(0);
}
to {
    transform: translateX(100%);
}
`

const hoverFade = keyframes`
from {
    transform: translateX(0);
    transform: translateX(100%);
}
to {
    transform: translateX(100%);
}
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #484A47;
    padding: 0px 20px;
    height: 48px;
    position: relative;
`;

const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    


    /* Switch nav items to only show on menu click for small screens */
    @media (max-width: 775px) {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 48px;
        right: 0;
        background-color: #484A47;
        width: 133px;
        height: 95vh;
        /* padding: 10px 0; */
        text-align: left;

        &.open {
            display: flex;
            animation: ${slideIn} 0.3s forwards;
        }

        &.closing {
            /* Could not get reverse to work for slideIn */
            animation: ${slideOut} 0.3s forwards;
        }
    }
`

const NavItem = styled.li`
    margin-left: 20px;

    @media (max-width: 775px) {
        margin: 10px 0;
    }
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    display: inline-block;
    position: relative;

    /* if active or hovered, add purple bar below. */
    &.active,
    &:hover {
        border-bottom: 3px solid #C751FF;
    }

    @media (max-width: 775px) {
        &.active,
        &:hover {
            border-left: 3px solid #C751FF;
            border-bottom: none;
            /* https://www.w3schools.com/css/css3_animations.asp */
            /* animation: ${hoverFade} 0.3s forwards */
        }
    }
`


const HamburgerMenu = styled.div`
    display: none;
    font-size: 24px; /* This controls the icon size for some reason */
    cursor: pointer;

    @media (max-width: 775px) {
        display: block;
    }
`
