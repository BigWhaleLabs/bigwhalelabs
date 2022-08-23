import classnames, { margin, minWidth } from 'classnames/tailwind'

export default function () {
  return (
    <img
      src="img/dosu-city.webp"
      className={classnames(minWidth('lg:min-w-xs'), margin('lg:-my-12'))}
    />
  )
}
