import { createContext, useState } from "react";
import NavBar from "../components/NavBar";

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
            <div>Content here</div>
        </>
    )
}
