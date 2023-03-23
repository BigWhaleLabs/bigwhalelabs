import { LearnBlockBackground } from 'components/Backgrounds'
import { useInView } from 'react-intersection-observer'
import KetlCity from 'icons/KetlCity'
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
const ketlCityIcon = classnames(
  margin('mb-0', 'mr-0', 'sm:-mb-10', 'sm:-mr-10', 'lg:-mb-24')
)

export default function () {
  const { inView, ref } = useInView({ threshold: 0.4 })

  return (
    <div className={cardsTogether} ref={ref}>
      <WeLiveInAWorld />
      <div className={cardsOnRight}>
        <RightCard
          buttonText="Do this with SealCred"
          icon={<OrbSeal />}
          text="Verify credentials through zk NFTs while remaining anonymous"
          url="https://sealcred.xyz"
        />
        <RightCard
          reverse
          reverseBelowMedium
          buttonText="Learn about Ketl"
          text="Socialize pseudonymously using ZK NFT badges"
          url="https://ketl.xyz"
          icon={
            <div className={ketlCityIcon}>
              <KetlCity />
            </div>
          }
        />
      </div>
      <LearnBlockBackground inView={inView} />
    </div>
  )
}
