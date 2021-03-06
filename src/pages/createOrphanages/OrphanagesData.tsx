import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Switch} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

export default function OrphanageData(){
  return (
    <ScrollView>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}> Nome</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.label}>Sobre</Text>
      <TextInput style={[styles.input , {height:110}]}
      multiline/>

           
      <Text style={styles.label}> Whatsapp</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.label}>Fotos</Text>
      <TouchableOpacity style={styles.imagesInput}>
        <Feather name="plus"size={24} color="#156686"/>

      </TouchableOpacity>
      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instrução</Text>
      <TextInput style={[styles.input , {height:110}]}
      multiline />

      <Text style={styles.label}> Horário de Visita</Text>
      <TextInput style={styles.input}/>

      <View style={styles.switchContainer}>
      <Text style={styles.label}> Atende no final de semana?</Text>
      <Switch
      thumbColor="#fff"
      trackColor={{false:'#cccc', true:'#39CC83'}}/>
        
       </View>

      <RectButton style={styles.nextButton}onPress={()=>{}}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})