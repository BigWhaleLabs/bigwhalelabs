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
  space,
} from 'classnames/tailwind'

const cardsTogether = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  space('lg:space-x-6', 'space-y-6', 'lg:space-y-0'),
  alignItems('items-stretch'),
  maxWidth('max-w-2xl', 'lg:max-w-6xl'),
  margin('mx-6', 'lg:mx-0')
)
const cardsOnRight = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-6')
)

export default function () {
  return (
    <div className={cardsTogether}>
      <WeLiveInAWorld />
      <div className={cardsOnRight}>
        <RightCard
          icon={<OrbSeal />}
          text="Verify NFT ownership while remaining anonymous"
          buttonText="Do this with SealCred"
          url="https://sealcred.xyz"
        />
        <RightCard
          reverse
          icon={<DosuCity />}
          text="Socialize pseudonymously using ZK badges"
          buttonText="Learn about Dosu"
          url="https://dosu.io"
        />
      </div>
    </div>
  )
}
