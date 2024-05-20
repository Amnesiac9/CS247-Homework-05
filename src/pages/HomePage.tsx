import { useState } from "react";
import NavBar from "../components/NavBar";
import HeaderSection from "../components/HeaderSection";
import ProjectSection from "../components/ProjectSection";
import { Project } from "../types/Project";
import { ThemeProvider } from "styled-components";


const theme = {
    backgroundColor: '#242424',
    containerColor: '#484A47',
    textColorPrimary: '#ffffffde',
    accentColor: '#C751FF',
    borderColor: '#4D4B4B',
};


const pages = ['Home', 'Portfolio', 'Blog', 'About Me', 'Contact Me']

const projects: Project[] = [
    {
        title: 'Quick Inventory',
        summary: 'A software for mass updating inventory numbers in Commerce7.',
        image: 'https://marsbytesapps.com/wp-content/uploads/2023/09/upload.png',
        link: 'https://marsbytesapps.com/quick-inventory/',
    }
]

export default function HomePage() {
    //TODO: Build other pages, use this to route.
    const [activePage, setActivePage] = useState('Home')
    return (
        <ThemeProvider theme={theme}>
            <NavBar
                pages={pages}
                activePage={activePage}
                setActivePage={setActivePage}
            />
            <HeaderSection />
            <ProjectSection Projects={projects} />
        </ThemeProvider>
    )
}
