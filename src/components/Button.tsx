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

const fontClasses = ({ outlined, small }: ButtonProps) =>
  outlined
    ? classnames(
        backgroundColor('bg-tertiary'),
        borderRadius('rounded-4xl'),
        boxShadow('shadow-button'),
        padding(small ? 'py-2' : 'py-4', small ? 'px-4' : 'px-6'),
        fontWeight('font-bold'),
        fontFamily('font-secondary'),
        fontSize(small ? 'text-sm' : 'text-lg'),
        textColor('text-primary-dark')
      )
    : classnames(
        fontWeight('font-normal'),
        fontSize('text-base'),
        textColor('text-formal-accent')
      )

const button = ({ outlined, small }: ButtonProps) =>
  classnames(commonClasses(), fontClasses({ outlined, small }))

interface ButtonProps {
  outlined?: boolean
  small?: boolean
}

export default function ({
  outlined,
  children,
  small,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement> & ButtonProps) {
  return (
    <button className={button({ outlined, small })} {...rest}>
      {typeof children === 'string' ? <span>{children}</span> : children}
    </button>
  )
}
