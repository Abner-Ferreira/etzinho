import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// 🎨 Paleta pastel — predominância de verde
const COLORS = {
  successBg: '#E8F5E9',
  successBorder: '#A5D6A7',
  successText: '#2E7D32',

  errorBg: '#FCE8E6',
  errorBorder: '#F5B7B1',
  errorText: '#C62828',

  infoBg: '#E6F4EA',
  infoBorder: '#A5D6A7',
  infoText: '#2E7D32',

  cancelText: '#9E9E9E',
}

// ✅ Toast de sucesso
export const CustomSuccessToast = ({ text1, text2 }: any) => (
  <View
    style={{
      backgroundColor: COLORS.successBg,
      borderLeftColor: COLORS.successBorder,
      borderLeftWidth: 6,
      borderRadius: 14,
      padding: 14,
      marginHorizontal: 10,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
      maxWidth: '95%',
      alignSelf: 'stretch',
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <MaterialCommunityIcons name="check-circle-outline" size={22} color={COLORS.successText} />
      <Text
        style={{
          color: COLORS.successText,
          fontWeight: '600',
          fontSize: 15,
          flex: 1,
          flexWrap: 'wrap',
        }}
      >
        {text1}
      </Text>
    </View>
    {text2 && (
      <Text
        style={{
          color: '#4E5D52',
          fontSize: 13,
          marginTop: 4,
          flexWrap: 'wrap',
        }}
      >
        {text2}
      </Text>
    )}
  </View>
)

// ❌ Toast de erro com decisão
export const CustomErrorToast = ({ text1, text2, onPressYes, onPressNo, hide }: any) => (
  <View
    style={{
      backgroundColor: COLORS.errorBg,
      borderLeftColor: COLORS.errorBorder,
      borderLeftWidth: 6,
      borderRadius: 14,
      padding: 14,
      marginHorizontal: 10,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
      maxWidth: '95%',
      alignSelf: 'stretch',
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <MaterialCommunityIcons name="alert-circle-outline" size={22} color={COLORS.errorText} />
      <Text
        style={{
          color: COLORS.errorText,
          fontWeight: '600',
          fontSize: 15,
          flex: 1,
          flexWrap: 'wrap',
        }}
      >
        {text1}
      </Text>
    </View>

    {text2 && (
      <Text
        style={{
          color: '#6E2C00',
          fontSize: 13,
          marginTop: 4,
          flexWrap: 'wrap',
        }}
      >
        {text2}
      </Text>
    )}

    {(onPressYes || onPressNo) && (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 12, marginTop: 8 }}>
        {onPressYes && (
          <TouchableOpacity
            onPress={onPressYes}
            style={{
              backgroundColor: COLORS.errorBorder,
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: COLORS.errorText, fontWeight: '600' }}>Sim</Text>
          </TouchableOpacity>
        )}
        {onPressNo && (
          <TouchableOpacity
            onPress={onPressNo || hide}
            style={{
              backgroundColor: '#FFF',
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderWidth: 1,
              borderColor: COLORS.errorBorder,
            }}
          >
            <Text style={{ color: COLORS.cancelText, fontWeight: '500' }}>Não</Text>
          </TouchableOpacity>
        )}
      </View>
    )}
  </View>
)

// ⚙️ Toast de info com decisão
export const CustomInfoToast = ({ text1, text2, ...rest }: any) => {
  // Pega callbacks do props
  const { onPressYes, onPressNo } = rest.props || {}

  return (
    <View
      style={{
        backgroundColor: COLORS.infoBg,
        borderLeftColor: COLORS.infoBorder,
        borderLeftWidth: 6,
        borderRadius: 14,
        padding: 14,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
        maxWidth: '95%',
        alignSelf: 'stretch',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <MaterialCommunityIcons name="information-outline" size={22} color={COLORS.infoText} />
        <Text
          style={{
            color: COLORS.infoText,
            fontWeight: '600',
            fontSize: 15,
            flex: 1,
            flexWrap: 'wrap',
          }}
        >
          {text1}
        </Text>
      </View>

      {text2 && (
        <Text
          style={{
            color: '#4E5D52',
            fontSize: 13,
            marginTop: 4,
            flexWrap: 'wrap',
          }}
        >
          {text2}
        </Text>
      )}

      {/* Botões Sim / Não dentro do toast */}
      {(onPressYes || onPressNo) && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 12,
            marginTop: 8,
          }}
        >
          {onPressYes && (
            <TouchableOpacity
              onPress={onPressYes}
              style={{
                backgroundColor: COLORS.infoBorder,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Text style={{ color: COLORS.infoText, fontWeight: '600' }}>Sim</Text>
            </TouchableOpacity>
          )}
          {onPressNo && (
            <TouchableOpacity
              onPress={onPressNo}
              style={{
                backgroundColor: '#FFF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderWidth: 1,
                borderColor: COLORS.infoBorder,
              }}
            >
              <Text style={{ color: COLORS.cancelText, fontWeight: '500' }}>Não</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  )
}


// 🔧 Configuração global dos toasts
export const toastConfig = {
  success: (props: any) => <CustomSuccessToast {...props} />,
  error: (props: any) => <CustomErrorToast {...props} />,
  info: (props: any) => <CustomInfoToast {...props} />,
}

export default Toast
