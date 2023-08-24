import React from "react"

import { TextInput } from "react-native"
import estilosPadrao from './estilos'

export default function CampoInteiro({valor, estilos, acao}) {
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/); /*para que trave de 0 a 9 e não entre nada além disso*/ 
        if (!verificaInteiro) return;
        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/,'$2'); /*quando 0 tiver a esquerda o da direita apagar e ficar na frente, sequencia para tirar o que vem antes do que for colocado*/ 

        acaoRetorno (removeZeroEsquerda);
    }
    const numeroEmTexto = String(valor);

    return <TextInput 
    style={[estilosPadrao.campo, estilos]}
    keyboardType="number-pad"
    selectTextOnFocus
    onChangeText={(novoValor)=> {atualiza(novoValor, acao)}}
    value={numeroEmTexto}
    />
}