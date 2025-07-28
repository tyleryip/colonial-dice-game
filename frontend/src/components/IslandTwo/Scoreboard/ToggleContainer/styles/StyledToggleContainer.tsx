import { styled } from 'styled-components'

const StyledToggleContainer = styled.div`
/** Layout */
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;

/** Box Model */
    padding-right: 2%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
@media ${(props) => props.theme.breakpoints.xs} {
    width: 60%;
} 
@media ${(props) => props.theme.breakpoints.s} {
    width: 45%;
}
@media ${(props) => props.theme.breakpoints.m} {
    width: 30%;
}
@media ${(props) => props.theme.breakpoints.l} {

}
@media ${(props) => props.theme.breakpoints.xl} {
    width: 25%;
}
@media ${(props) => props.theme.breakpoints.xxl} {
}

/** Interactivity */ 

/** Micellaneous */

`

export default StyledToggleContainer