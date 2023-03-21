import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useRouter } from 'next/router'
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';




const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome