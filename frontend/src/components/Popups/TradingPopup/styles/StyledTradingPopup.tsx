import { styled } from "styled-components";

const StyledTradingPopup = styled.div`
/** Layout */ 
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 3;

/** Box Model */ 
  border-radius: 5px;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 10%;
  padding-right: 10%;

/** Colour + Background */ 
  background-color: #ffffff;
  
/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
  @media ${(props) => props.theme.breakpoints.xs} {
    top: -387%;
    left: 0%;
    width: 100%;
    flex-direction: column;
  }
  
  @media ${(props) => props.theme.breakpoints.s} {
    top: -100%;
    left: -147%;
    width: 400%;
    flex-direction: row;
  }
  
  @media ${(props) => props.theme.breakpoints.m} {

  }
  
  @media ${(props) => props.theme.breakpoints.l} {

  }
  
  @media ${(props) => props.theme.breakpoints.xl} {

  }
  
  @media ${(props) => props.theme.breakpoints.xxl} {
    
  }

/** Interactivity */ 

/** Micellaneous */
  overflow: hidden;


`;

export default StyledTradingPopup;
