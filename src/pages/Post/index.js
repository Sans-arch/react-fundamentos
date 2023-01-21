import React, { useMemo } from "react";
import { useParams, useLocation } from 'react-router-dom';

// Para pegar os parâmetros da URL, precisamos usar o useParams
// Para pegar os queryParams, precisamos usar o useLocation

export default function Post() {
  const params = useParams();
  const { search } = useLocation();
  // queryParams não será recalculado ou re-atribuido, somente se o search do useLocation mudar.
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  // Pegando a string de queryParams fornecida pelo search e convertendo ela pra objeto

  console.log(queryParams.get('meuQueryParams'));
  console.log(params);

  return (
    <h1>Post page {params.id}</h1>
  );
}
