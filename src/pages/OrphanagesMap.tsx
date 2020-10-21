import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import mapMarker from '../images/mapMarker.png'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import api from '../services/api'

interface Orphanage{
id:number;
name:string;
latitude:number;
longitude: number

}
  
export default function OrphanagesMap(){
  const[orphanages, setOrphanages] = useState<Orphanage[]>([])
  const [ currentRegion, setCurrentRegion] = useState(null);

  console.log(orphanages)

  const navigation = useNavigation();

  useEffect(()=>{
    api.get('orphanages').then(response =>{
       setOrphanages(response.data);
    })
    
    
    

  },[]) 

  function handleNavigateDetails(id:number){
    navigation.navigate('OrphanagesDetails', {id})
  }

  function handleCreateOrphanage(){
    navigation.navigate('SelectedMapPosition')
  }


return ( 
  <View style={styles.container}>
   <MapView 
    
    style={styles.mapStyle}
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude:-8.1319635,
      longitude:-34.9594989,
      latitudeDelta:0.008,
      longitudeDelta:0.008,
    }}>
        {orphanages.map(orphanage=>{
          return(
            <Marker
            key={orphanage.id}
            calloutAnchor={{
              x:2.7,
              y:0.6,
            }}
            icon={mapMarker}
            coordinate={{
              latitude:orphanage.latitude,
              longitude:orphanage.longitude,
            }}
            >
              <Callout tooltip onPress={()=>handleNavigateDetails(orphanage.id)}>
               <View style={styles.calloutContainer}>
                <Text style={styles.textCallout}>{orphanage.name}</Text>
                </View>
               
              </Callout>
            </Marker>
          )
        })}
    </MapView>
    <View style={styles.footer}>
      <Text style={styles.textFooter}>{orphanages.length} Orfanatos encontrados </Text>

      <RectButton style={styles.create} onPress={handleCreateOrphanage}>
        <Feather name="plus" size={20} color="#fff"></Feather>

      </RectButton>

    </View>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
   flex:1   
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height:'100%',
  },

  calloutContainer:{
      width:160,
      height:46,
      paddingHorizontal:16,
      backgroundColor:'rgba(255,255,255,0.8)',
      borderRadius:16,
      justifyContent:'center'
  },
  textCallout:{
    color:'#0089a5',
    fontSize:14,
    fontFamily:'Nunito_700Bold',

  },
  footer:{
    position:"absolute",
    left:24,
    right:24,
    height:54,
    bottom:32,
 
    paddingLeft:24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
    backgroundColor:'#fff',
    borderRadius:18,
    elevation:3,
    

  },
  textFooter:{
    color:'#8fa763',
    fontFamily:'Nunito_700Bold',

  },
  create:{
    width:54,
    height:54,
    backgroundColor:'#35c3d6',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    elevation:2

  }
});





