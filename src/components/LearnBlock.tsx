import SocializePseudonymously from 'components/SocializePseudonymously'
import VerifyNFTOwnership from 'components/VerifyNFTOwnership'
import WeLiveInAWorld from 'components/WeLiveInAWorld'
import classnames, {
  alignItems,
  display,
  flexDirection,
  margin,
  space,
} from 'classnames/tailwind'

const cardsTogether = classnames(
  display('flex'),
  flexDirection('2xl:flex-row', 'flex-col'),
  space('2xl:space-x-6'),
  space('space-y-6', '2xl:space-y-0'),
  alignItems('items-stretch'),
  margin('md:mt-64', 'mt-32')
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
        <VerifyNFTOwnership />
        <SocializePseudonymously />
      </div>
    </div>
  )
}
