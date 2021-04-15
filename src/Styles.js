import styled,{ css  } from 'styled-components';
import {Link} from 'react-router-dom';

export const ContainerFluid = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const Button = styled.button`
    padding:5px 10px;
    color: ${props => props.color || "white"};
    background-color: ${props => props.bgcolor || "#329200"};
    border-radius:${props => props.br || '3px'};
    border:none;
    &:hover {
        padding:4px 7px;
        color: ${props => props.color || "#329200"};
        background-color: ${props => props.bgcolor || "white"};
        border-radius:${props => props.br || '3px'};
        border-color: ${props => props.color || "#329200"};;
        border-style:solid
      }
`;


export const StyledLink = styled(Link)`
  color: ${props => props.color || "white"};;
  text-decoration: none;
  position: relative;
  background-color: ${props => props.bgcolor || "#329200"};
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

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 1rem;
  font-weight:bold;
  position: relative;
  dispay:block;
  padding:0.5rem 1rem;
  &&& {
    color: #329200;
  };
  &:hover{
    &&& {
        color: white;
      };
    background-color: ${props => props.bgcolor || "#329200"};
    text-decoration: none;
    margin: 1rem;
    position: relative;
    dispay:block;
    border-radius:12px 0 12px 0;
    padding:0.5rem 1rem;
  }
`;