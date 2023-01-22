import React, { useMemo } from "react";
import { useParams, useLocation } from 'react-router-dom';

// Para pegar os parâmetros da URL, precisamos usar o useParams
// Para pegar os queryParams, precisamos usar o useLocation

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    // Para não recalcular o valor (useMemo em funcionais), podemos atribuir esses valores para dentro de propriedades
    // da nossa classe no constructor(), pois o constructor é executado 1 única vez e nunca mais, mesmo que as props ou state sejam alterados
    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  render() {
    // O React Router Dom lá no componente <Route component{}/> injeta umas
    // propriedades novas na nossa instância
    console.log(this.props);
    const params = this.props.match.params;
    console.log(this.queryParams.get('meuQueryParams'))

    return <h1>Post page {params.id}</h1>
  }
}

// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();

//   // Pegando a string de queryParams fornecida pelo search e convertendo ela pra objeto
//   // queryParams não será recalculado ou re-atribuido, somente se o search do useLocation mudar.
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);


//   console.log(queryParams.get('meuQueryParams'));
//   console.log(params);

//   return (
//     <h1>Post page {params.id}</h1>
//   );
// }
