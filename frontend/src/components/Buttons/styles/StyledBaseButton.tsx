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
        background-color: #dcc7a1;
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
        pointer-events: none;
    }
    `

export default StyledBaseButton