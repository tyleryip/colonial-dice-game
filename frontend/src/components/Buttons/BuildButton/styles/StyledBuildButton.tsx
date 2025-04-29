import { styled } from "styled-components"

const StyledBuildButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 35%;
    background-color: #dcc7a1;
    border: none;
    border-radius: 5px;
    transition-duration: 0.4s;

    &:hover {
        filter: drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.5));
    }
`

export default StyledBuildButton