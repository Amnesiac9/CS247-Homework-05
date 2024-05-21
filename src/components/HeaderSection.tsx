import styled from 'styled-components'
import picture from '../assets/20240222_184109.jpg'
import Container from '../components.styled/Container.styled'

export default function HeaderSection() {
    return (
        <Container>
            <HeaderArea>
                <div>
                    <H2>Welcome to Resposive Web Design</H2>
                    <About>
                        Hi there, my name is John Moreau. I've built 3 web apps in the past year with over 50 wineries using them for their daily business.
                        I'm just getting started. Thanks for visiting my test portfolio website, built using <a href='https://react.dev/'>React</a> & <a href='https://styled-components.com/'>Styled Components.</a>
                    </About>
                </div>
                <ProfilePicture alt='picture of author' src={picture} />
            </HeaderArea>
        </Container>
    )
}

const HeaderArea = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMin}) {
        flex-wrap: wrap-reverse;
    }
`


const ProfilePicture = styled.img`
    
    width: 250px;
    height: auto;
    object-fit: cover;
    display: block;
    margin-left: 10px;


    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMin}) {
        margin: 0 auto 10px auto;
        width: 100%;
        max-height: 368px;
    }
`
const H2 = styled.h2`
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;

    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
        font-size: 24px;
        line-height: 29.05px;
        margin-top: 4px;
    }
`

const About = styled.p`
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
        font-size: 14px;
    }
`
