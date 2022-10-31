import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import { useInView } from 'react-intersection-observer'
import Background from 'components/Background'
import DosuCity from 'icons/DosuCity'
import OrbSeal from 'components/OrbSeal'
import RightCard from 'components/RightCard'
import WeLiveInAWorld from 'components/WeLiveInAWorld'
import classnames, {
  alignItems,
  display,
  flexDirection,
  margin,
  maxWidth,
  padding,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'

const cardsTogether = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  position('relative'),
  space('lg:space-x-6', 'space-y-6', 'lg:space-y-0'),
  alignItems('items-stretch'),
  maxWidth('max-w-2xl', 'lg:max-w-6xl'),
  margin('mx-6', 'lg:mx-0'),
  padding('lg:px-4'),
  zIndex('z-10')
)
const cardsOnRight = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-6')
)
const dosuCityIcon = classnames(
  margin('mb-0', 'mr-0', 'sm:-mb-10', 'sm:-mr-10', 'lg:-mb-24')
)

const Backgrounds = ({ inView }: { inView: boolean }) => (
  <>
    <div className={displayTo('md')}>
      <Background
        width={1500}
        height={1000}
        background="#FF8993"
        bottom={60}
        left={-10}
        rotate={-20}
        saturate={2}
        inView={inView}
      />
      <Background
        width={2200}
        height={650}
        background="#CF00A3"
        bottom={40}
        left={-275}
        rotate={-80}
        blur={10}
        saturate={2}
        inView={inView}
      />
    </div>

    <div className={displayFrom('md')}>
      <Background
        width={2000}
        height={1200}
        background="#280075"
        bottom={-30}
        left={-50}
        rotate={0}
        inView={inView}
      />
      <Background
        width={2000}
        height={1200}
        background="#CF00A3"
        bottom={-30}
        left={-50}
        inView={inView}
      />
      <Background
        width={1200}
        height={500}
        background="#FF8993"
        bottom={10}
        left={-50}
        rotate={-10}
        inView={inView}
      />
    </div>
  </>
)

export default function () {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <div className={cardsTogether} ref={ref}>
      <WeLiveInAWorld />
      <div className={cardsOnRight}>
        <RightCard
          icon={<OrbSeal />}
          text="Verify credentials through zk NFTs while remaining anonymous"
          buttonText="Do this with SealCred"
          url="https://sealcred.xyz"
        />
        <RightCard
          reverse
          icon={
            <div className={dosuCityIcon}>
              <DosuCity />
            </div>
          }
          text="Socialize pseudonymously using ZK NFT badges"
          buttonText="Learn about Dosu"
          url="https://dosu.io"
          reverseBelowMedium
        />
      </div>
      <Backgrounds inView={inView} />
    </div>
  )
}
