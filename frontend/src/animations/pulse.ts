import { keyframes } from "styled-components";

const pulse = keyframes`
    from {
        transform: scale(1);
    }
    50%{
        transform: scale(1.05);
    }
    to {
        transform: scale(1);
    }
`

export default pulse