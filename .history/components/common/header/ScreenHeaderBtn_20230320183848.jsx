import React from 'react'
import { TouchableOpacity, Image  } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handle }) => {
  return (
    <TouchableOpacity style={styles.headerBtn}>
      <Image
        source={iconUrl}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn