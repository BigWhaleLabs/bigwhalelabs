import classnames, { height, position, width } from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const bgFit = classnames(
  position('absolute'),
  width('w-full'),
  height('h-full')
)

export default function () {
  const { onlyPhones } = useBreakpoints()

  return (
    <img
      src={
        onlyPhones ? '/img/blurry-shadows-sm.svg' : '/img/blurry-shadows-lg.svg'
      }
      className={bgFit}
    />
  )
}
