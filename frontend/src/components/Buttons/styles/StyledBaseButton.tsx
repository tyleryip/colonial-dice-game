import { styled } from "styled-components"

const StyledBaseButton = styled.button`
    background-color: #e8d8b5;
    border: none;
    border-radius: 10px;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    transition-duration: 0.4s;
    
    &:hover {
        filter: drop-shadow(10px 5px 20px rgba(36, 36, 36, 0.5));
        background-color: #dcc7a1;
    }
    `

export default StyledBaseButton