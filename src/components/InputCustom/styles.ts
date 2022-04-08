import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";
interface ContainerProps {
  isFocused: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const CustomTextField = styled.div<ContainerProps>`
  position: relative;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 41rem;

  border-radius: 0.3rem;
  border: 2px solid orange;
  padding: 5px;
  /* width: 100%; */
  & input {
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom:none;
    font-size: 0.6rem;
    background: transparent;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    width: 100%;
    color: #000;
    transition: all 0.3s;
    z-index: 1;
    ${(props) =>
    props.isErrored &&
    css`
        border-bottom: 1px solid #c53030;
      `}
  }
  & label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    color: #000;
    font-weight: bold;
    transition: all 0.3s;
    z-index: 0;
    /* padding: ; */
  }
  & label {
    ${(props) =>
    props.isFocused &&
    css` {
        top: -10px;
        position: absolute;
        text-align: left;
        padding: 0 5px;
        background-color: #fff;
        `}
  }
`;


export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  z-index: 99;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
