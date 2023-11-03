import {
  TDropShadow,
  TFontSize,
  TFontWeight,
  TTextColor,
  classnames,
  dropShadow,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  textColor,
  textDecoration,
  transitionProperty,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

interface BodyTextStyles {
  weight?: TFontWeight
  textSize?: TFontSize
  snugLeading?: boolean
  center?: boolean
  italic?: boolean
}

const bodyText = ({
  italic,
  snugLeading,
  textSize,
  weight = 'font-medium',
}: BodyTextStyles) =>
  classnames(
    fontStyle({ italic }),
    textColor('text-primary'),
    lineHeight(snugLeading ? 'leading-snug' : 'leading-6'),
    fontWeight(weight),
    fontSize(textSize)
  )
export function BodyText({
  children,
  ...styles
}: ChildrenProp & BodyTextStyles) {
  return <p className={bodyText(styles)}>{children}</p>
}

const accentText = (color: TTextColor, shadow?: TDropShadow) =>
  classnames(textColor(color), dropShadow(shadow))
export function AccentText({
  children,
  color,
  shadow,
}: ChildrenProp & {
  color: TTextColor
  shadow?: TDropShadow
}) {
  return <span className={accentText(color, shadow)}>{children}</span>
}

interface LinkTextProps extends ChildrenProp {
  url: string
  inline?: boolean
}

const linkText = (inline?: boolean) =>
  classnames(
    lineHeight('leading-6'),
    fontSize(inline ? undefined : 'text-base'),
    textDecoration('no-underline', 'hover:underline'),
    textColor('hover:text-accent-hover', 'text-accent'),
    transitionProperty('transition-colors')
  )
export function LinkText({ children, inline, url }: LinkTextProps) {
  return (
    <a className={linkText(inline)} href={url} target="_blank">
      {children}
    </a>
  )
}
