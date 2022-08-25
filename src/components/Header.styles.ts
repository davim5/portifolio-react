import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        cursor: pointer;


        display: flex;
        align-items: center;
        justify-content: center;

        background: none;
        border: none;
        border-radius:100%;
        color: ${props=>props.theme["yellow-100"]};


        &:hover {
            box-shadow: 
            0 0 .8em ${props=>props.theme["yellow-100"]}, 
            inset 0 0 1.8em ${props=>props.theme["yellow-100"]};
        }
        transition: box-shadow .4s ease-in-out;
        
    }

`