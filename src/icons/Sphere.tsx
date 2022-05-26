import Color from 'models/Color'
import classnames from 'classnames/tailwind'
import colorToDropShadow from 'helpers/colorToDropShadow'
import colorToFillColor from 'helpers/colorToFillColor'

export default function ({ color }: { color: Color }) {
  const fillColor = colorToFillColor(color)
  const dropShadow = colorToDropShadow(color)

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={dropShadow}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" className={classnames(fillColor)} />
    </svg>
  )
}
