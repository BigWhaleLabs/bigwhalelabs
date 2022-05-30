import {
  TTextAlign,
  TTextColor,
  backgroundClip,
  backgroundImage,
  classnames,
  content,
  display,
  dropShadow,
  fontFamily,
  fontSize,
  fontWeight,
  gradientColorStops,
  letterSpacing,
  lineHeight,
  position,
  textAlign,
  textColor,
  textDecoration,
  textOverflow,
  textTransform,
  zIndex,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'
import classNamesToString from 'helpers/classNamesToString'
import useBreakpoints from 'hooks/useBreakpoints'

const logoText = (large?: boolean) =>
  classnames(
    textColor('text-primary'),
    fontWeight('font-bold'),
    fontSize(
      large ? 'text-5xl' : 'text-xl',
      large ? 'sm:text-6xl' : 'sm:text-xl'
    ),
    display('flex'),
    textAlign('text-right'),
    lineHeight(
      large ? 'leading-10' : 'leading-5',
      large ? 'sm:leading-11' : 'sm:leading-5'
    ),
    dropShadow('drop-shadow-primary')
  )
export default function LogoText({
  children,
  large,
}: ChildrenProp & { large?: boolean }) {
  return <span className={logoText(large)}>{children}</span>
}

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
      className={classNamesToString(
        largeStrokeTextAccent,
        small ? 'stroke-text-small' : 'stroke-text'
      )}
    >
      {children}
    </h1>
  )
}

const bodyText = (small?: boolean, bold?: boolean, center?: boolean) =>
  classnames(
    textColor('text-formal-accent'),
    lineHeight(small ? 'leading-5' : 'leading-6'),
    fontSize(small ? 'text-sm' : 'text-base'),
    fontWeight(bold ? 'font-bold' : 'font-normal'),
    textAlign(center ? 'text-center' : 'text-left')
  )
export function BodyText({
  bold,
  small,
  center,
  children,
}: ChildrenProp & { bold?: boolean; small?: boolean; center?: boolean }) {
  return <p className={bodyText(small, bold, center)}>{children}</p>
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

const headerText = (small?: boolean, center?: boolean) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    textColor('text-formal-accent'),
    fontSize(small ? 'text-2xl' : 'text-4xl'),
    lineHeight(small ? 'leading-8' : 'leading-11'),
    textAlign(center ? 'text-center' : undefined)
  )
export function HeaderText({
  small,
  center,
  children,
}: ChildrenProp & { small?: boolean; center?: boolean }) {
  return <h2 className={headerText(small, center)}>{children}</h2>
}

const plainText = (position: TTextAlign) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-normal'),
    fontSize('text-xs'),
    lineHeight('leading-4'),
    textAlign(position)
  )
export function PlainText({
  position = 'text-left',
  children,
}: ChildrenProp & { position?: TTextAlign }) {
  return <span className={plainText(position)}>{children}</span>
}

const extraBoldText = (small?: boolean, extraLeading?: boolean) =>
  classnames(
    fontWeight('font-bold', 'md:font-extrabold'),
    fontSize(
      extraLeading ? 'text-2.5xl' : small ? 'text-xs' : 'text-xl',
      'md:text-2.5xl'
    ),
    lineHeight(
      extraLeading ? 'leading-8' : small ? 'leading-3' : 'leading-7',
      extraLeading ? 'md:leading-10' : 'md:leading-8'
    ),
    textColor('text-primary-dark'),
    textTransform('uppercase'),
    letterSpacing('tracking-extra')
  )
export function ExtraBoldText({
  small,
  extraLeading,
  children,
}: ChildrenProp & { small?: boolean; extraLeading?: boolean }) {
  return <span className={extraBoldText(small, extraLeading)}>{children}</span>
}

const retroText = (extraSmall?: boolean) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    fontSize(extraSmall ? 'text-6xl' : 'text-7xl', 'md:text-9xl'),
    lineHeight('leading-11.5', 'md:leading-15'),
    textAlign('text-center'),
    textColor('text-transparent'),
    backgroundClip('bg-clip-text', 'before:bg-clip-text'),
    backgroundImage('bg-retro', 'before:bg-metallic'),
    textTransform('uppercase'),
    zIndex('before:-z-10'),
    position('before:absolute'),
    content('before:content-retro'),
    dropShadow('before:drop-shadow-retro')
  )
export function RetroText({ children }: ChildrenProp) {
  const { xs } = useBreakpoints()
  return (
    <h1
      data-text={children}
      className={classNamesToString(retroText(xs), 'retro-text')}
    >
      {children}
    </h1>
  )
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
  url,
  tertiary,
  children,
}: ChildrenProp & { url: string; tertiary?: boolean }) {
  return (
    <a className={linkText(tertiary)} href={url} target="_blank">
      {children}
    </a>
  )
}

const sphereText = classnames(
  fontWeight('font-bold'),
  textColor('text-primary-dark'),
  textAlign('text-center'),
  textTransform('uppercase')
)
export function SphereText({ children }: ChildrenProp) {
  return <p className={sphereText}>{children}</p>
}
