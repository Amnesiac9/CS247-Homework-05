import styled from "styled-components";
import FlexSection from "../components.styled/Section.styled";
import Container from "../components.styled/Container.styled";
import Divider from "../components.styled/Divider.styled";
import { Project } from "../types/Project";
import StyledCard from "../components.styled/Card.styled";

export default function ProjectSection(props: { Projects: Project[] }) {
    return (
        <Container>
            <H3>My current projects</H3>
            <Divider />
            <FlexSection>
                {props.Projects.map((proj, i) =>
                    <StyledCard key={i} title={proj.title} summary={proj.summary} image={proj.image} link={proj.link} />
                )}
            </FlexSection>
        </Container>
    )
}


const H3 = styled.h3`
    font-size: 24px;
    line-height: 29.05px;
    font-weight: 500;
    margin-bottom: 0;
`
