import { boxShadowColor } from 'classnames/tailwind'
import Color from 'models/Color'

export default function (color: Color) {
  switch (color) {
    case 'primary':
      return boxShadowColor('shadow-primary')
    case 'tertiary':
      return boxShadowColor('shadow-tertiary')
    case 'secondary':
      return boxShadowColor('shadow-secondary')
    case 'accent':
      return boxShadowColor('shadow-accent')
  }
}
