import { Platform } from 'react-native'

var SpaceLoading: any

if (Platform.OS === 'web') {
  SpaceLoading = require('./SpaceLoading.web').default
} else {
  SpaceLoading = require('./SpaceLoading.native').default
}

export default SpaceLoading
