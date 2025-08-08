import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SelectedItem = () => {

  const params = useLocalSearchParams()
  console.log("params", params?.id)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 , alignContent: "center"}}>
      <Text className='text-4xl text-green-400' >Hi From Selected Item </Text>
      <Text className='text-lg font-bold text-black'>{`params Id : ${params?.id}`}</Text>
      <Text>{`params Name : ${params?.name}`}</Text>
      <Text>{`params Age : ${params?.age}`}</Text>
      <Text>{`params Address : ${params?.address}`}</Text>
    </View>
  )
}

export default SelectedItem
