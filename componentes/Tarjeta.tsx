import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props : any) {
    //console.log (props.informacion);

    function detalles(item:any){
      Alert.alert(item.name,item.description + '\n \nAtributos: '+item.atributos)
    }



  return (
    <TouchableOpacity style={styles.container} onPress={() =>  detalles( props.informacion)}>
      <Text style= {styles.txtTitulo}>{props.informacion.name}</Text>

      <View style={styles.fila}>
      <Image source={{uri:props.informacion.image}}
      style={styles.img}/>
      <Text style={styles.txtDescripcion}>{props.informacion.description}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:25,
        textAlign:'center',
        color:'#b7c5f0',
        fontWeight:'bold'
    },
    
    img:{
        height:150,
        width:150,
        resizeMode:'contain'

    },
    container:{
        backgroundColor:'#666',
        margin:2,
        borderRadius:20

    },
    fila:{
      flexDirection:'row',
      justifyContent:'center',

    },
    txtDescripcion:{
      color:'white',
      width:'60%',
      fontSize:15,
      textAlign: 'justify'
    }


})