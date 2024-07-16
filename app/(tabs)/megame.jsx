import { View, Text, ScrollView,StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { Colors } from '../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation, useRouter} from 'expo-router'



export default function Megame() {

    const navigation=useNavigation();
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })

    },[])
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View >
                <Text style={{fontSize:25,fontFamily:'outfit-bold',textAlign:'center',marginTop:50
            
        }}>
                    Hi, Let's Play
                </Text>
            </View>

            <View style={{flexDirection:'row',borderColor:'#C6C6C6',borderWidth:1,
            borderRadius:5,
            paddingHorizontal:10,
            paddingVertical:8,
            marginLeft:15,
            marginRight:15,
                marginTop:10}}>
            <FontAwesome name="search" size={20} color="#C6C6C6" style={{marginRight:5}} />
                <TextInput style={{fontSize:18, fontFamily:'outfit' }} placeholder='Search' />
            </View>
            <View style={{
               marginBottom:30,
                flexDirection:'row',
                justifyContent:'space-between',
                marginLeft:15,
                marginRight:15,
            }}>
                <Text style={{fontSize:18,fontFamily:'outfit'}}>Upcoming Games</Text>
                <TouchableOpacity>
                    <Text style={{color:'#0aada8'}}>See all</Text>
                </TouchableOpacity>
            </View>

            <View style={{}}>
           
            
            <View style={{marginBottom:10,
                flexDirection:'row',
                justifyContent:'space-between',
                marginLeft:15,
                marginRight:15,
            }}>
                
                <Image source={require('./../../assets/images/battlefield-2042.webp')} style={{width:'48%',height:100}}/>

                
               
                <Image source={require('./../../assets/images/login.jpeg')} style={{width:'48%',height:100}}/>

                 
            </View>
            <View style={{marginBottom:20,
                flexDirection:'row',
                justifyContent:'space-between',
                marginLeft:15,
                marginRight:91,
            }}>
                
                <Text style={{fontSize:18,fontFamily:'outfit'}}>Battle Field</Text>

                
               
                <Text style={{fontSize:18,fontFamily:'outfit'}}>Red Ninjas</Text>

                 
            </View>
           
           </View>
           <View style={{marginLeft:15,
                marginRight:15,}}>
            <Text style={styles.headingText}>Trending Games</Text>
            <View style={[styles.card,styles.cardElement]}>
            <Image source={require('./../../assets/images/running.jpg')} style={styles.cardImage}/>
                <View style={styles.cardBody}>
                    <Text style={{fontSize:25,fontFamily:'outfit-bold',textAlign:'center',marginTop:5}}>Tracking game</Text>
                    <Text style={{fontSize:15,fontFamily:'outfit',textAlign:'center',marginTop:5}}>Play the classic and addictive bubble pop game - match colors, pop balloons, and shoot balls to clear levels</Text>
                    <TouchableOpacity onPress={()=>router.replace('/Tracker')}>
                    <Text style={{color:'#0aada8',fontSize:18,fontFamily:'outfit-medium',textAlign:'center',marginTop:5,borderWidth:1,width:100,margin:120}}>Join Now</Text>
                </TouchableOpacity>
                    
                </View>
            </View>
            <View style={[styles.card,styles.cardElement]}>
            <Image source={require('./../../assets/images/buuble.jpg')} style={styles.cardImage}/>
                <View style={styles.cardBody}>
                    <Text style={{fontSize:25,fontFamily:'outfit-bold',textAlign:'center',marginTop:5}}>Bubble Shooter</Text>
                    <Text style={{fontSize:15,fontFamily:'outfit',textAlign:'center',marginTop:5}}>Play the classic and addictive bubble pop game - match colors, pop balloons, and shoot balls to clear levels</Text>
                    <TouchableOpacity>
                    <Text style={{color:'#0aada8',fontSize:18,fontFamily:'outfit-medium',textAlign:'center',marginTop:5,borderWidth:1,width:100,margin:120}}>Join Now</Text>
                </TouchableOpacity>
                    
                </View>
                
            </View>
            <View style={[styles.card,styles.cardElement]}>
            <Image source={require('./../../assets/images/subway surfer.jpg')} style={styles.cardImage}/>
                <View style={styles.cardBody}>
                    <Text style={{fontSize:25,fontFamily:'outfit-bold',textAlign:'center',marginTop:5}}>Subway Surfer</Text>
                    <Text style={{fontSize:15,fontFamily:'outfit',textAlign:'center',marginTop:5}}>Play the classic and addictive bubble pop game - match colors, pop balloons, and shoot balls to clear levels</Text>
                    <TouchableOpacity>
                    <Text style={{color:'#0aada8',fontSize:18,fontFamily:'outfit-medium',textAlign:'center',marginTop:5,borderWidth:1,width:100,margin:120}}>Join Now</Text>
                </TouchableOpacity>
                    
                </View>
            </View>

           
           </View>


           
           

           


            </ScrollView>
            </SafeAreaView>
        
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        
        
        
        height:'100%',
        
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'


    },
    headingText: {
        fontSize:20,
        frontWeight:'outfit-bold',
        marginBottom:10,
        
    },
    card:{
        width:330,
        height:360,
        borderradius:6,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        marginTop:20
        
        
    },
    cardElement:{
        backgroundColor:'#fff',
        
        elevation:3,
        shadowOffset:{
            width:0,
            height:0
        },
        

    },
    cardImage:{
        height:190,
        width:'100%',
        marginBottom:10,
        marginBottom:10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        

    },
  
    

})