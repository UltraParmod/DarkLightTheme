import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DoneButtonComponent=({...props})=>{
    return(
        <TouchableOpacity style={{marginRight:20}} {...props}>
            <Text style={{fontSize:18,fontWeight:'500'}}>Done</Text>
        </TouchableOpacity>
    )
}
const NextButtonComponent=({...props})=>{
    return(
        <TouchableOpacity style={{marginRight:20}} {...props}>
            <Text style={{fontSize:18,fontWeight:'500'}}>Next</Text>
        </TouchableOpacity>
    )
}
const DotComponent=({ selected })=>{
    return(
      <View style={{
        height:selected?8:6,
        width:selected ?20 :6 ,
        borderRadius:14,
        marginHorizontal:4,
        backgroundColor:selected?'rgba(0,0,0.8)':'rgba(0,0,0,.3)'
      }}>

      </View>
    )
}

export default function OnboardingScreen() {
    const navigation=useNavigation()
    const onDone=()=>{
        // navigation.navigate('PROFILE_SCREEN')
        handleDone()
    }
    const onSkip=()=>{
        navigation.navigate('PROFILE_SCREEN')
        
    }


const handleDone = async () => {
    await AsyncStorage.setItem('hasViewedOnboarding', 'true');
    navigation.navigate('PROFILE_SCREEN'); // Navigate to the login screen
  };

  return (
    <Onboarding
    DoneButtonComponent={DoneButtonComponent}
    NextButtonComponent={NextButtonComponent}
    DotComponent={DotComponent}
    onDone={onDone}
    onSkip ={onSkip}
    pages={[
      {
        backgroundColor: 'red',
        image: <Image source={require('../assets/UserProfile.jpg')} />,
        title: 'Onboarding 01',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'green',
        image: <Image source={require('../assets/UserProfile.jpg')} />,
        title: 'Onboarding 02',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'blue',
        image: <Image source={require('../assets/UserProfile.jpg')} />,
        title: 'Onboarding 03',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
      
    ]}
  />
  )
}

const styles = StyleSheet.create({})