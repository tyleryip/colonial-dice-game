import { styled } from "styled-components"

const StyledBaseButton = styled.button`
    background-color: #dcc7a1;
    border: none;
    border-radius: 5px;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    transition-duration: 0.4s;

    &:hover {
        filter: drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.5));
    }
`

export default StyledBaseButton