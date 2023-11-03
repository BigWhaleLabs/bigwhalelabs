import { HTMLAttributes } from 'preact/compat'
import classNamesToString from 'helpers/classNamesToString'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  boxShadow,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  outlineStyle,
  overflow,
  padding,
  textColor,
  transitionProperty,
  translate,
  width,
  willChange,
} from 'classnames/tailwind'

const commonClasses = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  outlineStyle('focus:outline-none'),
  width('w-fit')
)

const fontClasses = classnames(
  backgroundColor('bg-accent'),
  borderRadius('rounded-4xl'),
  boxShadow('shadow-button'),
  padding('py-2', 'px-4'),
  fontWeight('font-bold'),
  fontFamily('font-primary'),
  fontSize('text-sm'),
  textColor('text-primary-dark')
)
const button = classnames(commonClasses, fontClasses)

const xTwitter = classNamesToString(padding('pl-1.5'), 'no-text-shadow')

interface ButtonProps {
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
  translate('group-hover:-translate-y-7'),
  willChange('will-change-transform')
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
  children,
  url,
  ...rest
}: HTMLAttributes<HTMLButtonElement> & ButtonProps) {
  return (
    <button
      className={classNamesToString(button, 'outlined-button', 'group')}
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
      <span className={xTwitter}>𝕏</span>
    </button>
  )
}
