import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";

import { db } from '../config/Config';
import { TextInput } from 'react-native-gesture-handler';
import Informacion from '../componentes/Informacion';

export default function Pagina2Screen() {
    const [datos,setdatos]=useState <any[]>([])
    const [registro,setRegistro]=useState<any | null>(null)
    const [id,setid]=useState <String> ("");



    //LEER DATOS
    useEffect(() => {
        function leer() {
            const starCountRef = ref(db, 'Autos/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();

                const arregloTemp : any []= Object.keys(data).map (id=>({
                    id:id, ...data[id]
                }))

                setdatos(arregloTemp)
                //console.log(datos);

            }); 
        }

        leer()

    }, [])

const buscarPorId = () =>{
    const resultado = datos.find((item) => item.id === id)
    if (resultado){
        setRegistro (resultado)
    } else {
        Alert.alert("no se encontro ningun registro con ese Id")
    }
}

//////////////////
type Usuario ={
    id : String,
    cantidad: Number,
    marca: String,
    nombre: String
}

    return (
        <View>
            <Text style={{fontSize:30, color:'black'}}>Lista de Autos </Text>
            <TextInput
            placeholder='Ingresar Id'
            style = {styles.input}
            onChangeText={(texto) => setid(texto)}
            value={id}/>

            <Button title='Buscar' onPress={buscarPorId}/>

            {registro && (
                <View style= {styles.registroContainer}>
                    <Text>ID: {registro.id}</Text>
                    <Text>NOMBRE: {registro.name}</Text>
                    <Text>MARCA: {registro.brand}</Text>
                    <Text>CANTIDAD: {registro.amount}</Text>
                </View>
            )}


            <FlatList
            data ={datos}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
                <TouchableOpacity
            onPress={() => Alert.alert('Detalles', `Marca: ${item.brand}\nCantidad: ${item.amount}`)}
          >
            <Informacion name={item.name} />
          </TouchableOpacity>
            )
                
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
      },
      registroContainer: {
        marginVertical: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
      },
      registroText: {
        fontSize: 16,
        color: 'black',
      },
})