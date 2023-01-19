import styled from "styled-components";

// Importando um componente já existente (feito com styled-components)
import MainTitle from "../Title";

// Vamos pegar os estilos do Title acima já existente e fazer algumas alterações
// para passar pra um novo componente (é como se fosse Herança)
export const Title = styled(MainTitle)`
  color: red;
`;
