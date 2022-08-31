import styled from "styled-components";
import { lighten } from "polished";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;

    h1 {
        font-family: 'Inter',sans-serif;
        font-size: 48px;
        align-self: flex-start;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 28px;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: 'Inter',sans-serif;
        line-height: 2;
        width: 80%;
        align-self: start;

       margin-bottom: 2rem;
    }

    ul {
        list-style: none;
    }
`;

export const TechList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        span {
            margin-top: .5rem;
            color: ${props => props.theme["gray-400"]};
        }
    }
`;

export const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin-bottom: 1rem;
    gap: 1rem;

    a {
        border-radius: 8px;
        position: relative;
       
        img {
            border-radius: 8px;
            max-width: 200px;
            height: auto;

            transition: opacity .2s;

            
        }
        div {
            visibility: hidden;
            position: absolute;
            bottom: 0;
            padding: .5rem;
            h3 {
                color: ${props => props.theme.white};  
            }
            
            span {
                font-size: 13px;
                color: ${props => props.theme["gray-100"]};
            }
            

        }
        &:hover {
            img {
                opacity: 0.2;
            }    
            div {
                visibility: visible;
            }
        }

        
        
    }

    
`
export const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    
    
    background-color: ${props => props.theme["yellow-300"]};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    
    margin-bottom: 1rem;

    font-weight: bold;

    a {
        text-decoration: none;
        color: inherit;
        border-radius: 8px;
        padding: 1rem 2rem;
    }

    svg {
        margin-left: 8px;
    }

    &:hover {
        background-color: ${props => lighten(0.05, props.theme["yellow-300"])}
    }
`