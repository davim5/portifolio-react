import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.theme["gray-400"]};
    }

    .status {
        margin-top: .5rem;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        gap: .875rem;
    }

    .social {
        display: flex;
        flex-direction: row;
      
    }
    
    button {
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            background: none;
            border: none;
            color: ${props=>props.theme["yellow-100"]};        
        }

`;