import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { useRouter } from 'expo-router'
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';


const jobTypes = ["Full-Time", "Part-Time",]

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
          onChange={() => {}}
          placeholder="Search for jobs"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList />
      </View>
    </View>
  )
}

export default Welcome