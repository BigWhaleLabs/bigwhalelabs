import {
  TTextColor,
  backgroundClip,
  backgroundImage,
  classnames,
  dropShadow,
  fontFamily,
  fontSize,
  fontWeight,
  gradientColorStops,
  letterSpacing,
  lineHeight,
  textAlign,
  textColor,
  textOverflow,
  textTransform,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'
import classNamesToString from 'helpers/classNamesToString'

const foldText = classnames(
  fontFamily('font-primary'),
  fontSize('text-2xl', 'md:text-3xl'),
  lineHeight('leading-8', 'md:leading-10'),
  fontWeight('font-bold'),
  textColor('text-transparent'),
  backgroundImage('bg-gradient-to-r'),
  backgroundClip('bg-clip-text'),
  gradientColorStops('from-secondary', 'to-accent')
)
export function FoldText({ children }: ChildrenProp) {
  return <span className={foldText}>{children}</span>
}

const largeStrokeTextAccent = classnames(
  textColor('text-transparent'),
  textOverflow('text-clip'),
  fontWeight('font-bold'),
  textAlign('text-justify'),
  textTransform('uppercase'),
  fontFamily('font-primary'),
  fontSize('text-5xl', 'md:text-8xl'),
  lineHeight('leading-10', 'md:leading-12')
)
export function LargeStrokeText({
  small,
  children,
}: ChildrenProp & { small?: boolean }) {
  return (
    <h1
      className={classNamesToString([
        largeStrokeTextAccent,
        small ? 'strokeTextSmall' : 'strokeText',
      ])}
    >
      {children}
    </h1>
  )
}

const bodyText = (small?: boolean, bold?: boolean) =>
  classnames(
    textColor('text-formal-accent'),
    lineHeight(small ? 'leading-5' : 'leading-6'),
    fontSize(small ? 'text-sm' : 'text-base'),
    fontWeight(bold ? 'font-bold' : 'font-normal')
  )
export function BodyText({
  bold,
  small,
  children,
}: ChildrenProp & { bold?: boolean; small?: boolean }) {
  return <p className={bodyText(small, bold)}>{children}</p>
}

const primaryAccentText = (color: TTextColor) =>
  classnames(
    textColor(color),
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    lineHeight('leading-11'),
    fontSize('text-4xl')
  )
export function PrimaryAccentText({
  color,
  children,
}: ChildrenProp & {
  color: TTextColor
}) {
  return <h3 className={primaryAccentText(color)}>{children}</h3>
}

const accentText = (color: TTextColor) => classnames(textColor(color))
export function AccentText({
  color,
  children,
}: ChildrenProp & {
  color: TTextColor
}) {
  return <span className={accentText(color)}>{children}</span>
}

const headerText = (small?: boolean) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    textColor('text-formal-accent'),
    fontSize(small ? 'text-2xl' : 'text-4xl'),
    lineHeight(small ? 'leading-8' : 'leading-11')
  )
export function HeaderText({
  small,
  children,
}: ChildrenProp & { small?: boolean }) {
  return <h2 className={headerText(small)}>{children}</h2>
}

const plainText = classnames(
  fontFamily('font-primary'),
  fontWeight('font-normal'),
  fontSize('text-xs'),
  lineHeight('leading-4')
)
export function PlainText({ children }: ChildrenProp) {
  return <span className={plainText}>{children}</span>
}

const extraBoldText = (extraLeading?: boolean) =>
  classnames(
    fontWeight('font-bold', 'md:font-extrabold'),
    fontSize(extraLeading ? 'text-2.5xl' : 'text-xl', 'md:text-2.5xl'),
    lineHeight(
      extraLeading ? 'leading-11.5' : 'leading-7',
      extraLeading ? 'md:leading-11.5' : 'md:leading-8'
    ),
    textColor('text-primary-dark'),
    textTransform('uppercase'),
    letterSpacing('tracking-extra')
  )
export function ExtraBoldText({
  extraLeading,
  children,
}: ChildrenProp & { extraLeading?: boolean }) {
  return <span className={extraBoldText(extraLeading)}>{children}</span>
}

const retroText = classnames(
  fontFamily('font-primary'),
  fontWeight('font-bold'),
  fontSize('text-7xl', 'md:text-10xl'),
  lineHeight('leading-13', 'md:leading-14'),
  textAlign('text-center'),
  textColor('text-transparent'),
  backgroundClip('bg-clip-text'),
  backgroundImage('bg-retro'),
  textTransform('uppercase'),
  dropShadow('drop-shadow-retro')
)
export function RetroText({ children }: ChildrenProp) {
  return <div className={retroText}>{children}</div>
}
