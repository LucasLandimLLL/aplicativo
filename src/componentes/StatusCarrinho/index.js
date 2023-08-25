import React from 'react'
import {View, Text} from 'react-native'
import estilos from './estilos'
import Botao from '../botao'

export default function StatusCarrinho({ Total }){
    return <View style={ estilos.conteudo }>
        <View style={ estilos.total }>
            <Text style={ estilos.descricao }>total do carrinho:</Text>
            <Text style={ estilos.valor }>
                { 
                    Intl.NumberFormat('pt-Br', { 
                        style: 'currency', currency: 'BRL'
                    }).format(Total)
                }
            </Text>
        </View>
        <View style={estilos.botao}>
        < Botao valor='Concluir Pedido' invertido/>
        </View>
    </View>

}