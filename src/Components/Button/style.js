import styled from "styled-components";
// import { size } from "App/device";
// import { Theme } from "App/theme";
const Button = styled.button`
  background: ${(props) => props.bgcolor.background};
  color: ${(props) => props.bgcolor.color};
  cursor: pointer;
  border: 0;
  display: inline-block;
  font-family: "Rubik", sans-serif;
  position: relative;
  padding: 0 20px;
  height: 43px;
  line-height: 36px;
  min-width: 130px;
  letter-spacing: 0;
  font-size: 15px;
  text-transform: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.4s ease;
`;

export { Button };
