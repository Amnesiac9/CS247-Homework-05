import styled from 'styled-components';
import Flex from '../components.styled/Flex.styled';
import Container from '../components.styled/Container.styled';
import Divider from '../components.styled/Divider.styled';
import { Project } from '../types/Project';
import StyledCard from '../components.styled/Card.styled';

export default function ProjectSection(props: { Projects: Project[] }) {
    return (
        <Container>
            <H3>My current projects</H3>
            <Divider />
            <Flex $flexFlow='wrap'>
                {props.Projects.map((proj, i) =>
                    <StyledCard key={i} title={proj.title} summary={proj.summary} image={proj.image} imagePadding={proj.imageTopBottomPadding} link={proj.link} />
                )}
            </Flex>
        </Container>
    )
}


const H3 = styled.h3`
    font-size: 24px;
    line-height: 29.05px;
    font-weight: 500;
    margin-bottom: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
        font-size: 20px;
        line-height: 24.2px;
    }

`
