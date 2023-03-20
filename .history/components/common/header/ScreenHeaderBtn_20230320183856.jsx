import React from 'react'
import { TouchableOpacity, Image  } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.headerBtn}>
      <Image
        source={iconUrl}
        res
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn