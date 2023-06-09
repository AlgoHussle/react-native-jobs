import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router'
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';




const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Anon,</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value=""
          onChange={() => }
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome