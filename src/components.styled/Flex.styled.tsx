import styled from "styled-components"

const Flex = styled.div<{ $flexFlow?: string }>`
    display: flex;
    flex-wrap: wrap;
    

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
        flex-wrap: ${(props) => props.$flexFlow};
        
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-flow: ${(props) => props.$flexFlow};
        justify-content: space-evenly;
    }

`
export default Flex
