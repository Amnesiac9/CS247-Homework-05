import { useState } from 'react';
import { Project } from '../types/Project';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import NavBar from '../components/NavBar';
import HeaderSection from '../components/HeaderSection';
import ProjectSection from '../components/ProjectSection';
import Body from '../components.styled/Body.styled';
import SplitterImage from '../assets/SplitterIcon.png'
import MarsBytesLogo from '../assets/MARSBYTES Logo Only.svg'

// breakpoints (Desktop >= 1200px, Laptop < 1200px AND >= 800px, Mobile <= 400px)
const theme: DefaultTheme = {
    backgroundColor: '#242424',
    containerColor: '#484A47',
    textColorPrimary: '#ffffffde',
    accentColor: '#C851FF',
    borderColor: '#4D4B4B',
    breakpoints: {
        laptopMax: '1200px',
        laptopMin: '800px',
        mobile: '550px',
    }
};

const pages = ['Home', 'Portfolio', 'Blog', 'About Me', 'Contact Me']

const projects: Project[] = [
    {
        title: 'Quick Inventory',
        summary: 'A software for mass updating inventory numbers on Commerce7.com',
        image: 'https://marsbytesapps.com/wp-content/uploads/2023/09/upload.png',
        link: 'https://marsbytesapps.com/quick-inventory/',
    },
    {
        title: 'ShipStation Custom Store',
        summary: 'Sync orders from Commerce7 directly to ShipStation for fulfillment.',
        image: 'https://marsbytesapps.com/wp-content/uploads/2023/09/shipstation-logo-dark-1024x241.png',
        link: 'https://marsbytesapps.com/shipstation/',
    },
    {
        title: 'Bulk Product Updater',
        summary: 'UI interface for mass updating products on Commerce7.com',
        image: 'https://marsbytesapps.com/wp-content/uploads/2024/05/productUpdateIcon.png',
        link: 'https://marsbytesapps.com/bulk-product-update/',
    },
    {
        title: 'Transaction Splitter',
        summary: 'My first web application. Split a number into unique amounts.',
        image: SplitterImage,
        imageTopBottomPadding: '8px',
        link: 'https://marsbytes.dev/splitinator/',
    },
    {
        title: 'Placeholder',
        summary: 'Coming soon!',
        image: MarsBytesLogo,
        imageTopBottomPadding: '4px',
        link: 'https://marsbytesapps.com/',
    },
    {
        title: 'Placeholder',
        summary: 'Coming soon!',
        image: MarsBytesLogo,
        imageTopBottomPadding: '4px',
        link: 'https://marsbytesapps.com/',
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
            <Body>
                <HeaderSection />
                <ProjectSection Projects={projects} />
            </Body>
        </ThemeProvider>
    )
}
