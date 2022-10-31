import { LearnBlockBackground } from 'components/Backgrounds'
import { useInView } from 'react-intersection-observer'
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
      <LearnBlockBackground inView={inView} />
    </div>
  )
}
