import {
  TDropShadow,
  TTextColor,
  classnames,
  dropShadow,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textColor,
  textDecoration,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const bodyText = (large?: boolean, bold?: boolean, center?: boolean) =>
  classnames(
    textColor('text-formal-accent'),
    lineHeight('leading-6'),
    fontSize(large ? 'text-lg' : 'text-base'),
    fontWeight(bold ? 'font-bold' : 'font-normal'),
    textAlign(center ? 'text-center' : 'text-left')
  )
export function BodyText({
  bold,
  center,
  children,
  large,
}: ChildrenProp & {
  large?: boolean
  bold?: boolean
  textSize?: string
  center?: boolean
}) {
  return <p className={bodyText(large, bold, center)}>{children}</p>
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

const linkText = (tertiary?: boolean) =>
  classnames(
    lineHeight('leading-6'),
    fontSize('text-base'),
    textDecoration('no-underline', 'hover:underline'),
    textColor(
      tertiary ? 'hover:text-tertiary' : 'text-formal-accent',
      tertiary ? 'focus:text-tertiary-dark' : 'focus:text-primary'
    )
  )
export function LinkText({
  children,
  tertiary,
  url,
}: ChildrenProp & { url: string; tertiary?: boolean }) {
  return (
    <a className={linkText(tertiary)} href={url} target="_blank">
      {children}
    </a>
  )
}
