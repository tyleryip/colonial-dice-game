import { keyframes } from "styled-components";

const colourFlash = () => keyframes`
    from {
        filter: grayscale(100%);
    }
    50%{
        filter: grayscale(0%);
    }
    to {
        filter: grayscale(100%);
    }
`

export default colourFlash