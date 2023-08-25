import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import TelaPadrao from "./src/componentes/TelaPadrao/index";
import Rotas from './src/rotas';


export default function App() {
  return <TelaPadrao><Rotas/></TelaPadrao> ;
}