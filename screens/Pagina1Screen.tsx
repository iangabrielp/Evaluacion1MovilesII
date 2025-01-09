import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ref, set } from "firebase/database";
import { db } from '../config/Config';


export default function Pagina1Screen() {

  const [id, setid] = useState('')
  const [marca, setmarca] = useState('')
  const [cantidad, setcantidad] = useState(0)
  const [nombre, setnombre] = useState('')

//GUARDAR//
  function guardar(){

    if (!id || !marca || !nombre || cantidad <= 0) {
        Alert.alert('Error', 'Completa todos los campos.');
        return;
      }
      
     try{
        set(ref(db, 'Autos/' + id), {
            brand: marca,
            amount: cantidad,
            name: nombre
          });

          Alert.alert("El auto se a registrado con exito")
          limpiar();
     } catch (error){
        Alert.alert("Error no se puede completar el registro")
     }
    
  }
 
  function limpiar (): void{
    setid('')
    setcantidad(0)
    setmarca('')
    setnombre('')
  }

  useEffect(() => {
    if (Number.isNaN(cantidad)){
      setcantidad (0)
    }
    }
  , [cantidad])
  

  return (
    <View>
      <Text style={{fontSize:30, color:'black'}}>Registro de Autos</Text>
      <TextInput
        placeholder='Ingrese un Id'
        style={styles.input}
        onChangeText={(texto) => setid(texto)}
        value={id}
      />

      <TextInput
        placeholder='Marca del Auto'
        style={styles.input}
        onChangeText={(texto) => setmarca(texto)}
        value={marca}
      />
      <TextInput
        placeholder='Nombre del Auto'
        style={styles.input}
        onChangeText={(texto) => setnombre(texto)}
        value={nombre}
      />
      <TextInput
        placeholder='Ingresar cantidad'
        style={styles.input}
        onChangeText={(texto) => setcantidad(+texto)}
        value={cantidad.toString()}
      />
      

      <Button title='Guardar' onPress={()=>guardar() } />

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 30,
    backgroundColor: '#93afeb',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 20
  }
})


