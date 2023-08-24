import React from 'react';

import { FlatList } from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao/Index'
import Item from './Item';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const Servicos = [ 
    {
        id : 1,
        nome:"Hamburguer",
        preco: 29.9,
        descricao:"Hamburguer dupplo bacon",
        quantidade:1
    },
    {   id : 2,
        nome:"Milkshake",
        preco: 19.9,
        descricao:"Milkshake de ovo maltine.",
        quantidade:2
    },
    {
        id : 3,
        nome:"Batata Grande",
        preco: 15.9,
        descricao:"Batata frita da melhor crocacia.",
        quantidade:1
    }
];

export default function Carrinho(){
    const total = Servicos.reduce((soma,{preco, quantidade}) =>soma + (preco * quantidade), 0);

    return  <TelaPadrao>
        <StatusCarrinho Total= { total } />
                <FlatList data ={Servicos} 
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={({id}) => String(id)}/>
           </TelaPadrao> 
}

