import styled from "styled-components"
import picture from '../assets/20240222_184109.jpg'

export default function HeaderSection() {
    return (
        <Header>
            <div>
                <H2>Welcome to Resposive Web Design</H2>
                <p>
                    Hi there, my name is John Moreau. I have 3 apps that I've built in the past year with over 50 wineries using them.
                    I'm just getting started. Thanks for visiting my test portfolio website, built using <a href=''>React</a> & Styled Components.
                </p>
            </div>
            <div>
                <ProfilePicture alt='picture of author' src={picture} width='250px' />
            </div>
        </Header>
    )
}


const Header = styled.div`
    display: flex;
    text-align: left;
    padding: 26px;
`

const H2 = styled.h2`
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
`

const ProfilePicture = styled.img`
    padding: 10px;
`
