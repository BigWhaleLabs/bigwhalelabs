import { HTMLAttributes } from 'react'
import classNamesToString from 'helpers/classNamesToString'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  boxShadow,
  boxShadowColor,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  outlineStyle,
  overflow,
  padding,
  textColor,
  textDecoration,
  transitionProperty,
  translate,
  width,
} from 'classnames/tailwind'

const commonClasses = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  outlineStyle('focus:outline-none'),
  width('w-fit')
)

const fontClasses = ({ outlined, small, icon }: ButtonProps) =>
  outlined
    ? classnames(
        backgroundColor('bg-tertiary'),
        borderRadius('rounded-4xl'),
        boxShadow('shadow-button'),
        boxShadowColor('shadow-tertiary'),
        padding(small ? 'py-2' : 'py-3', small ? 'px-4' : 'px-6'),
        fontWeight('font-bold'),
        fontFamily('font-primary'),
        fontSize(small ? 'text-sm' : 'text-lg'),
        textColor('text-primary-dark'),
        translate('hover:-translate-y-0.5')
      )
    : classnames(
        fontWeight('font-normal'),
        fontSize('text-base'),
        textColor(
          icon ? 'active:text-tertiary-dark' : 'active:text-primary',
          icon ? 'hover:text-tertiary' : undefined,
          'text-formal-accent'
        ),
        textDecoration('hover:underline')
      )

const button = ({ outlined, small, icon }: ButtonProps) =>
  classnames(commonClasses, fontClasses({ outlined, small, icon }))

interface ButtonProps {
  outlined?: boolean
  small?: boolean
  icon?: boolean
  url?: string
}

const animatedTextWrapper = classnames(
  display('flex'),
  overflow('overflow-hidden')
)

const getCharacterTransitionDelay = (index: number) =>
  `transition-delay: ${0.015 * index}s`

const charWrapper = classnames(
  transitionProperty('transition-letters'),
  translate('group-hover:-translate-y-7')
)

const renderLetters = (sentence: string) => {
  const whitepsace = ' '
  const unicodeWhitespace = '\u00A0'

  return (
    sentence
      // replace plain text whitepsace to unicode whitespace, otherwise it won't be rendered in an individual span
      .replaceAll(whitepsace, unicodeWhitespace)
      .split('')
      .map((char, index) => {
        return (
          <span
            className={charWrapper}
            style={getCharacterTransitionDelay(index)}
          >
            {char}
          </span>
        )
      })
  )
}

export default function ({
  outlined,
  children,
  small,
  icon,
  url,
  ...rest
}: Omit<HTMLAttributes<HTMLButtonElement>, 'icon'> & ButtonProps) {
  return (
    <button
      className={classNamesToString(
        button({ outlined, small, icon }),
        'outlined-button',
        'group'
      )}
      onClick={() => {
        if (url) window.open(url, '_blank')
      }}
      {...rest}
    >
      {typeof children === 'string' ? (
        <div className={animatedTextWrapper}>{renderLetters(children)}</div>
      ) : (
        children
      )}
    </button>
  )
}
