import React from 'react';

import { FlatList } from 'react-native';
import Item from './Item';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [ 
    {
        id : 1,
        nome:"Hamburguer",
        preco: 29.9,
        descricao:"Hamburguer dupplo bacon",
        quantidade:1
    },
    {   id : 2,
        nome:"milshisheishe",
        preco: 19.9,
        descricao:"milshisheishe de ovo Morango.",
        quantidade:2
    },
    {
        id : 3,
        nome:"Batata Grande com cheddar",
        preco: 15.9,
        descricao:"Batata frita da melhor crocacia.",
        quantidade:1
    }
];

export default function Carrinho(){
    const total = servicos.reduce((soma,{preco, quantidade}) =>soma + (preco * quantidade), 0);

    return  <>
        <StatusCarrinho Total= { total } />
                <FlatList 
                data ={servicos} 
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={({id}) => String(id)}
                />
           </> 
}

