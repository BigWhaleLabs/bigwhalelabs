import WeLiveInAWorld from 'components/WeLiveInAWorld'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
} from 'classnames/tailwind'

export default function () {
  const mainBlock = classnames(
    display('flex'),
    flexDirection('flex-col', 'lg:flex-row'),
    alignItems('items-center', 'lg:items-stretch'),
    justifyContent('lg:justify-center')
  )

  return (
    <div className={mainBlock}>
      <WeLiveInAWorld />
    </div>
  )
}
