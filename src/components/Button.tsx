import { HTMLAttributes } from 'react'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  boxShadow,
  display,
  dropShadow,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  outlineStyle,
  padding,
  textColor,
  textDecoration,
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
        dropShadow('drop-shadow-tertiary'),
        padding(small ? 'py-2' : 'py-4', small ? 'px-4' : 'px-6'),
        fontWeight('font-bold'),
        fontFamily('font-primary'),
        fontSize(small ? 'text-sm' : 'text-lg'),
        textColor('text-primary-dark')
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
      className={button({ outlined, small, icon })}
      onClick={() => {
        if (url) window.open(url, '_blank')
      }}
      {...rest}
    >
      {typeof children === 'string' ? <span>{children}</span> : children}
    </button>
  )
}
