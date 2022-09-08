import { InputBase } from '@mui/material'
import styled from 'styled-components'

export const NetflixInput = styled(InputBase)`
z-index: 30;
background: #fff;
padding: 25.5px;
height: 30px;
border-radius: 5px;
border: none;`

export const NetflixButton = styled.button`
z-index: 15;
background-color: ${(props) => props.color === "gray" ? "#656161" : "#fa5252"};
color: #990099;
border-radius: 5px;
text-transform: inherit;
padding: 22px;
font-size: 1rem;
border: none;
outline: none;
cursor: pointer;`