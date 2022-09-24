import ArcText from 'icons/ArcText'
import classnames, {
  display,
  inset,
  margin,
  position,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const arcTextWrapper = classnames(
  position('absolute'),
  inset('right-3', '-bottom-11', 'md:left-14', 'md:right-auto')
)
const smallGem = classnames(
  display('block', 'md:hidden'),
  margin('ml-16', 'tiny:ml-32')
)
const wrapper = classnames(position('relative'), margin('lg:mr-32', 'xl:mr-84'))

export default function () {
  const { md } = useBreakpoints()

  return (
    <div className={wrapper}>
      <div className={arcTextWrapper}>
        <ArcText
          text="We are hard at work • Stay tuned!"
          diameter={md ? 400 : 200}
        />
      </div>
      <img
        src="img/dosu-coming-soon-lg.png"
        className={display('hidden', 'md:block')}
      />
      <img src="img/dosu-coming-soon-sm.png" className={smallGem} width="125" />
    </div>
  )
}
