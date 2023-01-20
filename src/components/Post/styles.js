import styled, { css } from "styled-components";

// Componentes criados com styled-components são componentes React normais,
// então podem receber props normalmente.
// Em styled components, para usar as props, executamos funções dentro, e o parametro será as props.
export const Container = styled.article`
  margin-bottom: 24px;
  /* opacity: ${props => props.removed ? 0.5 : 1};
  color: ${props => props.removed ? '#f00' : '#fff'}; */

  ${props => css`
    color: ${props.removed ? '#f00' : '#fff'};
    opacity: ${props.removed ? 0.5 : 1};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;
