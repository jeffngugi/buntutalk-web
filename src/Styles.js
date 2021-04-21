import styled,{ css  } from 'styled-components';
import {Link} from 'react-router-dom';

export const ContainerFluid = styled.div`
    dispaly:'flex';
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    padding-top:30px;
    padding-bottom:30px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.bgcolor || "null"};
`;

export const Button = styled.button`
    padding:2px 10px;
    background-color: ${props => props.bgcolor || "#329200"};
    border-radius:${props => props.br || '3px'};
    border:none;
    &:hover {
        padding:1px 7px;        
        background-color: ${props => props.bghover || "transparent"};
        border-radius:${props => props.br || '2px'};
        border-color: ${props => props.color || "#329200"};;
        border-style:solid
      }
`;

export const AccordionBtn = styled.button`
    padding:1px 7px;
    background-color: ${props => props.bgcolor || "transparent"};
    border:none;
    outline:none;
    &:hover {
        background-color: ${props => props.bghover || "white"}; 
        border:none
        outline:none; 
    }
    &.active {
      padding:1px 5px;        
      background-color: ${props => props.bghover || "white"};  
      border:none;
      outline:none;
  }

`;

export const UnstyledLink = styled(Link)`
  color: ${props => props.color || "white"};
  text-decoration: none;
  position: relative;
  background-color: ${props => props.bgcolor || ""};
  padding:1rem;
  &:hover{
    color: ${props => props.color || "#329200"};
    text-decoration: none;
    background-color: ${props => props.bgcolor || 'rgba(0, 0, 0, 0.1)'};
    position: relative;
    font-weight:bold;
    border-radius:${props => props.br || '3px'};
    border-color: ${props => props.color || "#329200"};;
    border-style:solid
  }
`;

export const StyledLink = styled(Link)`
color: ${props => props.color || "gray"};
text-decoration: none;
position: relative;
// padding:1rem;
margin:0 0.5rem
background-color: ${props => props.bgcolor || ""};
border:none;
&:hover{
  color: ${props => props.color || "#329200"};
  hcolor: ${props => props.color || "#329200"};
  text-decoration: none;
  position: relative;
  font-weight:bold;
}
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 1rem;
  font-weight:bold;
  position: relative;
  dispay:block;
  padding:0.5rem 1rem;
  border-radius:12px 0 12px 0;
  background-color: ${props => props.bgcolor || ""};
  &&& {
    color:${props => props.color || "#329200"};
  };
  &:hover{
    &&& {
        color: ${props => props.chover || "white"};;
      };
    
    background-color: ${props => props.bghover || "#329200"};
    text-decoration: none;
    margin: 1rem;
    position: relative;
    dispay:block;
    border-radius:12px 0 12px 0;
    padding:0.5rem 1rem;
  }
`;

export const OverlayDiv = styled.div`
  background: rgba(50, 146, 0, 0.9); 

`;

export const MyDiv = styled.div`
    margin-top:${props => props.mtop || ""};
    margin-bottom:${props => props.mbottom || ""};
    padding-top:${props => props.ptop || ""};
    padding-bottom:${props => props.bottom || ""};
    background-color:'red';
`;

export const List = styled.ul`
  list-style:none;
  padding:0px 20px;
  display: flex;
  margin-bottom: 0;
  list-style: none;
`;

export const ListItem = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    margin:0px 10px;
    :first-of-type {
        border-top: none;
        margin-left:0px;
      }   
`;

export const H1 = styled.h1`
color: ${props => props.color || "black"};
`;

export const H2 = styled.h2`
color: ${props => props.color || "black"};
`;

export const H3 = styled.h3`
color: ${props => props.color || "black"};
`;

export const H4 = styled.h4`
color: ${props => props.color || "black"};
`;

export const P1 = styled.p`
color: ${props => props.color || "black"};
`;

export const P2 = styled.p`
color: ${props => props.color || "black"};
`;

export const P3 = styled.p`
color: ${props => props.color || "black"};
`;

export const P4 = styled.p`
color: ${props => props.color || "black"};
`;

export const UL = styled.ul`
list-style: circle inside none;
padding:1px;
margin:0rem 1rem;
`;

export const LI = styled.li`
    margin:5px;

`;

// 
export const HowItem = styled.div`
      display: flex;
      justify-content: center;
      padding: .5rem;
      background-color:'yellow'
      color: 'green';
      font-size: 1rem;
      font-weight: bold;
    
`;

export const HowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;