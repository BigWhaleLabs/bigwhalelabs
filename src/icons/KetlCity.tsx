import classnames, { margin, minWidth } from 'classnames/tailwind'

export default function () {
  return (
    <img
      className={classnames(minWidth('lg:min-w-xs'), margin('lg:-my-12'))}
      src="img/ketl-city.webp"
    />
  )
}
