import styled from "styled-components"
import picture from '../assets/20240222_184109.jpg'
import FlexSection from "../components.styled/Section.styled"
import Container from "../components.styled/Container.styled"

export default function HeaderSection() {
    return (
        <Container>
            <FlexSection>
                <div>
                    <H2>Welcome to Resposive Web Design</H2>
                    <p>
                        Hi there, my name is John Moreau. I've built 3 web apps in the past year with over 50 wineries using them for their daily businesses.
                        I'm just getting started. Thanks for visiting my test portfolio website, built using <a href=''>React</a> & Styled Components.
                    </p>
                </div>
                <div>
                    <ProfilePicture alt='picture of author' src={picture} width='250px' />
                </div>
            </FlexSection>
        </Container>
    )
}



const H2 = styled.h2`
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
`

const ProfilePicture = styled.img`
    padding: 10px;
`
