
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
            }, 300);
        } else {
            setIsOpen(true);
        }
    }


    const handleNavClick = (navItem: string) => {
        props.setActivePage(navItem)
    }



    return (
        <Nav>
            <Logo />
            <HamburgerMenu onClick={toggleMenu} className={`${isOpen ? 'open' : ''} ${isMoving ? 'closing' : ''}`}>
                <FaBars />
            </HamburgerMenu>
            <Overlay className={`${isOpen ? 'open' : ''}`} onClick={toggleMenu} />
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



const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.containerColor};;
    padding: 0px 20px;
    height: 48px;
    position: relative;
    z-index: 999;
    

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
        font-size: 14px;
    }


`

const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    z-index: 996;
    

    /* Switch nav items to only show on menu click for small screens */
    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMin}) {
        background-color: ${({ theme }) => theme.containerColor};
        display: none;
        flex-direction: column;
        position: fixed;
        top: 0px;
        right: 0;
        width: 133px;
        height: 100%;
        text-align: left;
        overflow-y: hidden;
        padding-top: 48px;

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


    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMin}) {
        margin: 10px 0;
    }
`

const NavLink = styled.a`
    color: ${({ theme }) => theme.textColorPrimary};
    text-decoration: none;
    padding: 10px 15px;
    display: inline-block;
    position: relative;

    /* if active or hovered, add purple bar below. */
    &.active,
    &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.accentColor};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMin}) {
        &.active,
        &:hover {
            border-left: 3px solid ${({ theme }) => theme.accentColor};;
            border-bottom: none;
        }
    }
`


const HamburgerMenu = styled.div`
    display: none;
    font-size: 24px; /* This controls the icon size for some reason */
    cursor: pointer;
    z-index: 998;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMin}) {
        display: block;

        /* To keep the close icon visible while scrolling. */
        &.open {
            position: fixed;
            right: 20px;
        }

    }
`

const Overlay = styled.div`
    display: none;
    position: fixed;
    top: 48px;
    width: 100%;
    height: 100%;
    background-color: #00000066;
    z-index: 996;

    &.open {
        display: block;
    }
`
