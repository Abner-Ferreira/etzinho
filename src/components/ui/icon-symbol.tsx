import React from 'react'
import { OpaqueColorValue } from 'react-native'
import {
  HouseIcon,
  ForkKnifeIcon,
  BookIcon,
  BrainIcon,
  ChatsIcon,
  BarbellIcon,
  PaperPlaneRightIcon,
  CodeIcon, // Phosphor não tem Dumbbell, mas há alternativas como DumbbellAlt
} from 'phosphor-react-native'

type IconSymbolName =
  | 'house.fill'
  | 'dumbbell.fill'
  | 'fork.knife'
  | 'book.fill'
  | 'brain.head.profile'
  | 'bubble.left.and.bubble.right'
  | 'paperplane.fill'
  | 'chevron.left.forwardslash.chevron.right'

const ICON_MAPPING: Record<
  IconSymbolName,
  React.FC<{ size?: number; color?: string }>
> = {
  'house.fill': HouseIcon,
  'dumbbell.fill': BarbellIcon,
  'fork.knife': ForkKnifeIcon,
  'book.fill': BookIcon,
  'brain.head.profile': BrainIcon,
  'bubble.left.and.bubble.right': ChatsIcon,
  'paperplane.fill': PaperPlaneRightIcon,
  'chevron.left.forwardslash.chevron.right': CodeIcon,
}

interface IconSymbolProps {
  name: IconSymbolName
  size?: number
  color?: string | OpaqueColorValue
}

export function IconSymbol({ name, size = 24, color }: IconSymbolProps) {
  const IconComponent = ICON_MAPPING[name]
  return <IconComponent size={size} color={typeof color === 'string' ? color : '#000'} />
}
