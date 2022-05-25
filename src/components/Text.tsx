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

const logoText = (large?: boolean) =>
  classnames(
    textColor('text-primary'),
    fontWeight('font-bold'),
    fontSize(large ? 'text-3xl' : 'text-2xl'),
    display('flex'),
    textAlign('text-right'),
    lineHeight(large ? 'leading-8' : 'leading-6'),
    dropShadow('drop-shadow-primary')
  )
export default function LogoText({
  children,
  large,
}: ChildrenProp & { large?: boolean }) {
  return <span className={logoText(large)}>{children}</span>
}
