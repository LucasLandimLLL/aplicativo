import React from 'react';

import { FlatList } from 'react-native'
import TelaPadrao from '../../componentes/TelaPadrao/Index';
import Item from './Item';

const Servicos = [ 
    {
        id : 1,
        nome:"Hamburguer",
        preco: 29.9,
        descricao:"Hamburguer dupplo bacon"
    },
    {   id : 2,
        nome:"Milkshake",
        preco: 19.9,
        descricao:"Milkshake de ovo maltine."

    },
    {
        id : 3,
        nome:"Batata Grande",
        preco: 15.9,
        descricao:"Batata frita da melhor crocancia."
    }
];

export default function servicos(){
    return <TelaPadrao>
                <FlatList data ={Servicos} 
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={({id}) => String(id)}
                />
             </TelaPadrao>
}

