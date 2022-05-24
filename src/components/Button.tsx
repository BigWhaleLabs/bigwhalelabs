import React from 'react'
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
  padding,
  textColor,
  width,
} from 'classnames/tailwind'

const commonClasses = () =>
  classnames(
    display('flex'),
    flexDirection('flex-row'),
    alignItems('items-center'),
    outlineStyle('focus:outline-none'),
    width('w-fit')
  )

const fontClasses = ({ outlined }: ButtonProps) =>
  outlined
    ? classnames(
        backgroundColor('bg-tertiary'),
        borderRadius('rounded-4xl'),
        boxShadow('shadow-button'),
        padding('py-4', 'px-6'),
        fontWeight('font-bold'),
        fontFamily('font-primary'),
        fontSize('text-lg'),
        textColor('text-primary-dark')
      )
    : classnames(
        fontWeight('font-normal'),
        fontFamily('font-secondary'),
        fontSize('text-base'),
        textColor('text-formal-accent')
      )

const button = ({ outlined }: ButtonProps) =>
  classnames(commonClasses(), fontClasses({ outlined }))

interface ButtonProps {
  outlined?: boolean
}

export default function ({
  outlined,
  children,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement> & ButtonProps) {
  return (
    <button className={button({ outlined })} {...rest}>
      {typeof children === 'string' ? <span>{children}</span> : children}
    </button>
  )
}
