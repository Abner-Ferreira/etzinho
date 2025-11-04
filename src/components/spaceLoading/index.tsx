import { Platform } from 'react-native'

let SpaceLoading

if (Platform.OS === 'web') {
  SpaceLoading = require('./SpaceLoading.web').default
} else {
  SpaceLoading = require('./SpaceLoading.native').default
}

export default SpaceLoading
