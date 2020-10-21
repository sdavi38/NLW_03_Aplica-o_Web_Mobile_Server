import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'

const {Navigator,Screen} = createStackNavigator();

import OrphanagesMap from '../pages/OrphanagesMap'
import OrphanageDetails from '../pages/OrphanageDetails';
import OrphanageData from '../pages/createOrphanages/OrphanagesData';
import SelectedMapPosition from '../pages/createOrphanages/SelectdMapPosition';
import Header from '../components/Heades';

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#f2f3f5'}}}>

        <Screen name="OrphanagesMap" 
        component={OrphanagesMap}/> 

        <Screen name="OrphanagesDetails" 
        component={OrphanageDetails}
        options={{
          headerShown:true,
          header:()=>  <Header showCancel={false} title="Orfanato"/>
        }}
        /> 
        <Screen name="OrphanageData" 
        component={OrphanageData}
        options={{
          headerShown:true,
          header:()=> <Header title="Informe os dados"/> 
        }}
        
        /> 

        <Screen name="SelectedMapPosition" 
        component={SelectedMapPosition}
        options={{
          headerShown:true,
          header:()=> <Header title="Selecine no Map"/> 
        }}
        
        /> 

      </Navigator>
    </NavigationContainer>

  )
};