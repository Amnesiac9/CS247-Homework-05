import styled, { keyframes, DefaultTheme } from 'styled-components';

export default function Card(props: { title: string, summary: string, image: string, imagePadding?: string, link: string }) {

    return (
        <StyledCard onClick={() => { window.open(props.link) }}>
            <TopImage $topBottomPadding={props.imagePadding} alt={props.title} src={props.image} />
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
        </StyledCard>
    )
}

const grow = (theme: DefaultTheme) => keyframes`
    from {
        /* 00 is opacity 0 */
        box-shadow: 0 0 0px ${theme.accentColor};
        transform: scale(1);
    }
    to {
        box-shadow: 0 0 8px ${theme.accentColor};
        transform: scale(1.02);
    }
`

const shrink = (theme: DefaultTheme) => keyframes`
    from {
        box-shadow: 0 0 8px ${theme.accentColor};
        transform: scale(1.02);
    }
    to {
        box-shadow: 0 0 0px ${theme.accentColor};
        transform: scale(1);
    }
`

const StyledCard = styled.div`
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;

    &:hover{
        animation: ${({ theme }) => grow(theme)} 250ms forwards;
    }

    &:not(:hover){
        animation: ${({ theme }) => shrink(theme)} 225ms forwards;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax})  {
        width: 150px;
        height: 150px;
        min-width: 150px;
        min-height: 150px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile})  {
        margin: 15px 10px;
    }
    
`

const TopImage = styled.img<{ $topBottomPadding?: string }>`
    width: 100%;
    height: 50%;
    min-height: 50%;
    overflow: hidden;
    object-fit: contain;
    object-position: center;
    padding: ${(props) => `${props.$topBottomPadding || '0'} 0`}; // Optional padding for images on top and bottom


    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
        min-height: 15%;
    }

`

const Title = styled.h5`
    padding: 0px 10px;
    margin: 2px 0;
`

const Summary = styled.p`
    padding: 10px;
    margin: 0px;
    font-size: 0.7rem;
`
