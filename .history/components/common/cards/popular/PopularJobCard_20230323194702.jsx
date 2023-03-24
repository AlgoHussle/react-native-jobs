
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = () => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handleCard)}
    >

    </TouchableOpacity>
  )
}

export default PopularJobCard