import { createContext, useState } from "react";
import NavBar from "../components/NavBar";
import HeaderSection from "../components/HeaderSection";
import ProjectSection from "../components/ProjectSection";

const ThemeContext = createContext('')

export default function HomePage() {
    const [activePage, setActivePage] = useState('Home')

    const pages = ['Home', 'Portfolio', 'Blog', 'About Me', 'Contact Me']


    return (
        <>
            <NavBar
                pages={pages}
                activePage={activePage}
                setActivePage={setActivePage}
            />
            <HeaderSection />
            <ProjectSection />
        </>
    )
}
