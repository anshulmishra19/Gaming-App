import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Pedometer } from 'expo-sensors';





export default function Tracker() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription ;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,fontFamily:'outfit-bold',textAlign:'center',marginTop:5, color:'red'}}>Pedometer Steps Count  Tracking Game</Text>
       <Image source={require('./../../assets/images/running.jpg')} style={styles.cardImage}/>
      <Text style={{fontSize:25,fontFamily:'outfit-medium',textAlign:'center',marginTop:5, color:'blue'}}>Pedometer is working(): {isPedometerAvailable}</Text>
      <Text style={{fontSize:25,fontFamily:'outfit-medium',textAlign:'center',marginTop:5,color:'black'}}> Steps count in 24 hours: {pastStepCount}</Text>
      <Text style={{fontSize:25,fontFamily:'outfit-medium',textAlign:'center',marginTop:5,color:'black'}}>Live Count : {currentStepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  cardImage:{
    height:300,
    width:'100%',
    marginBottom:10,
    marginBottom:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    

},
});