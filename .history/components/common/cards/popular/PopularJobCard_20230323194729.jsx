
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = () => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handleCardPress(item)}
    >
      <Touch
    </TouchableOpacity>
  )
}

export default PopularJobCard