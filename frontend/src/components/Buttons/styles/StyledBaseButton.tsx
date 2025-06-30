import { styled } from "styled-components"

const StyledBaseButton = styled.button`
/** Layout */

/** Box Model */
    border: none;
    border-radius: 10px;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
    padding-bottom: 1%;

/** Colour + Background */
    background-color: #e8d8b5;

/** Typography */

/** Visual Effects */
    transition-duration: 0.4s;

/** Responsive Design */

/** Interactivity */
    &:hover {
        background-color: #dcc7a1;
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
        pointer-events: none;
    }

/** Micellaneous */
`

export default StyledBaseButton