import styled, { keyframes } from "styled-components";

export default function Card(props: { title: string, summary: string, image: string, link: string }) {
    return (
        <StyledCard >
            <TopImage alt={props.title} src={props.image} />
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
        </StyledCard>
    )
}



const grow = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.05);
    }
`

const shrink = keyframes`
    from {
        transform: scale(1.05);
    }
    to {
        transform: scale(1);
    }
`

const StyledCard = styled.div`
    width: 200px;
    height: 200px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.borderColor};

    &:hover{
        animation: ${grow} 250ms forwards;
    }

    &:not(:hover){
        animation: ${shrink} 200ms forwards;
    }
    
`

const TopImage = styled.img`
    width: 100%;
    height: 50%;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
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
