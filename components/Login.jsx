import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native';


export default function Login() {
    const router=useRouter();
  return (
    <View>
      
      <Image source={require('./../assets/images/login.jpeg')} style={{width:'100%',height:500}}/>
      <View style={styles.container}>
        <Text style={{fontSize:25,fontFamily:'outfit-bold',textAlign:'center'
            
        }}>
            RealGames
        </Text>
        <Text style={{fontSize:17,fontFamily:'outfit',textAlign:'center',color:Colors.GRAY
            ,marginTop:10
        }}>Step into a world of epic adventures,     Log in to unlock your ultimate gaming experience!</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit',frontSize:17}}>Get Started</Text>
        </TouchableOpacity >
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
        height:'100%',
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'


    }

})