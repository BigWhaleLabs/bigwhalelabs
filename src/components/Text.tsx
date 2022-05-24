import ChildrenProp from 'models/ChildrenProp'
import classnames, {
  display,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'

const logoText = classnames(
  textColor('text-primary'),
  fontWeight('font-bold'),
  fontSize('text-xl'),
  display('flex'),
  textAlign('text-right')
)
// eslint-disable-next-line import/prefer-default-export
export function LogoText({ children }: ChildrenProp) {
  return <span className={logoText}>{children}</span>
}
