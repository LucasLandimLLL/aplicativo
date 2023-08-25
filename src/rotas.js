import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from './telas/Servicos';
import Carrinho from './telas/carrinho';

import { cores } from './estilos';

const tab = createBottomTabNavigator ();

export default function Rotas() {
    return <NavigationContainer>
        <tab.Navigator 
        tabBarOptions={{
            activeTintColor: cores.vermelho,
            inactiveTintColor: cores.escuro,
            activeBackgroundColor: cores.vermelho,
            inactiveBackgroundColor: cores.amarelo,
            style: {
                height : 70,
            },
            labelStyle: {
                width: '100%',
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 21,
                marginTop: 3,
                paddingTop: 21,
                backgroundColor: cores.amarelo
            },
            keyboardHidesTabBar: true
        }}>
            <tab.Screen name ="Serviços" component={Servicos} />
            <tab.Screen name ="Carrinho" component={Carrinho} />
        </tab.Navigator>
    </NavigationContainer>
}