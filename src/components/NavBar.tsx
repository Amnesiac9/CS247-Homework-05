import { useState } from "react";
import styled from "styled-components";

export default function NavBar() {
    const [active, setActive] = useState('Home')

    const handleSetActive = (navItem: string) => {
        setActive(navItem)
    }


    return (
        <Nav>
            <Logo>Your Logo</Logo>
            <NavItems>
                {['Home', 'Portfolio', 'Blog', 'About Me', 'Contact Me'].map((navItem) => (
                    <NavItem key={navItem}>
                        <NavLink
                            href="#"
                            className={active === navItem ? 'active' : ''}
                            onClick={() => handleSetActive(navItem)}
                        >
                            {navItem}
                        </NavLink>
                    </NavItem>
                ))}
            </NavItems>
        </Nav>
    )
}


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #484A47;
    padding: 0px 20px;
    height: 48px;
`;

const Logo = styled.div`
    color: #fff;
    font-size: 1.5em;
`;

const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    margin-left: 20px;
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
        border-bottom: 3px solid purple;
    }
    /* &.active::after,
    &:hover::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: purple;
        position: absolute;
        bottom: -5px;
        left: 0;
    } */
`;
