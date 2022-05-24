import ChildrenProp from 'models/ChildrenProp'
import classnames, {
  display,
  dropShadow,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'

const logoText = classnames(
  textColor('text-primary'),
  fontWeight('font-bold'),
  fontSize('text-2xl'),
  display('flex'),
  textAlign('text-right'),
  lineHeight('leading-6')
)
// eslint-disable-next-line import/prefer-default-export
export function LogoText({ children }: ChildrenProp) {
  return <span className={logoText}>{children}</span>
}
