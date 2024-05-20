import styled from "styled-components"

const FlexSection = styled.div<{ $flexFlow?: string }>`
    display: flex;

    @media (max-width: 550px) {
        flex-flow: ${(props) => props.$flexFlow};
    }

`
export default FlexSection
