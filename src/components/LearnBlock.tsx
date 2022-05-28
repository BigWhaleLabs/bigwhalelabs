import SocializePseudonymously from 'components/SocializePseudonymously'
import VerifyNFTOwnership from 'components/VerifyNFTOwnership'
import WeLiveInAWorld from 'components/WeLiveInAWorld'
import classnames, { display, flexDirection, space } from 'classnames/tailwind'

const cardsTogether = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-6')
)
const cardsOnRight = classnames(
  display('flex'),
  flexDirection('flex-row'),
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
