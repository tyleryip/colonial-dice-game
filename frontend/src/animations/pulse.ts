import { keyframes } from "styled-components";

const pulse = ($maxScale: number) => keyframes`
    from {
        transform: scale(1);
    }
    50%{
        transform: ${`scale(${$maxScale})`};
    }
    to {
        transform: scale(1);
    }
`

export default pulse