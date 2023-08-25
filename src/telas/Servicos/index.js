import React from 'react';

import { FlatList } from 'react-native';
import Item from './Item';

const servicos = [ 
    {
        id : 1,
        nome:"Hamburguer",
        preco: 29.9,
        descricao:"Hamburguer dupplo bacon"
    },
    {   id : 2,
        nome:"milshisheishe",
        preco: 19.9,
        descricao:"milshisheishe de ovo Morango."

    },
    {
        id : 3,
        nome:"Batata Grande com cheddar",
        preco: 15.9,
        descricao:"Batata frita da melhor crocancia."
    }
];

export default function Servicos(){
    return <>
                <FlatList data ={servicos} 
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={({id}) => String(id)}
                />
             </>
}

