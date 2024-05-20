import styled from "styled-components";
import marsBytesLogo from '../assets/MARSBYTES Logo Only.svg'

export default function Logo() {
    return (
        <LogoArea>
            <Icon alt='Logo' src={marsBytesLogo} />
            <TextArea>MarsBytes Portfolio</TextArea>
        </LogoArea>
    )
}

const LogoArea = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    width: auto;
    height: 20px;
    margin-right: 6px;
`

const TextArea = styled.div`
    
`
