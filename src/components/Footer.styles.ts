import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;

    span {
        margin-top: 1.25rem;
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

    a {
        border-radius: 4px;
        text-decoration: none;
        color: ${props=>props.theme["yellow-100"]};
        
        &:hover {
            box-shadow: 
            0 0 .4em #FAF1CF8f, 
            inset 0 0 1em #FAF1CF6f;
        }
        transition: box-shadow .4s ease-in-out;
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