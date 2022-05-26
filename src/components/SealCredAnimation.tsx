import { AccentText, PlainText } from 'components/Text'
import Color from 'models/Color'
import Line from 'components/Line'
import Person from 'icons/Person'
import Sphere from 'icons/Sphere'
import Stage from 'icons/Stage'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  space,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-7')
)
const firstStage = classnames(display('flex'))

const spheresBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('mb-auto', 'mt-4', 'tablet:mt-16'),
  space('space-y-4')
)
const personWithStage = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('-space-y-11')
)

const nftLine = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  space('space-x-2', 'tablet:space-x-4')
)
const nftSphereIcon = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  space('space-x-2')
)

const personWithSpheres = classnames(display('flex'))

const NftBlock = ({
  color,
  postion,
}: {
  color: Color
  postion: 'left' | 'right'
}) => {
  return (
    <div className={nftSphereIcon}>
      {postion === 'left' && (
        <div className={nftLine}>
          <PlainText>NFT</PlainText>
          <Line small fromLight gradientDirection="to-right" color={color} />
        </div>
      )}
      <Sphere color={color} />
      {postion === 'right' && (
        <div className={nftLine}>
          <Line small fromLight gradientDirection="to-left" color={color} />
          <PlainText>NFT</PlainText>
        </div>
      )}
    </div>
  )
}

const PairOfNfts = ({ colors, left }: { colors: Color[]; left?: boolean }) => {
  return (
    <div className={spheresBlock}>
      {colors.map((color) =>
        NftBlock({ color, postion: left ? 'left' : 'right' })
      )}
    </div>
  )
}

export default function () {
  const { tablet } = useBreakpoints()

  return (
    <div className={wrapper}>
      <div className={firstStage}>
        <div className={personWithStage}>
          <div className={personWithSpheres}>
            <PairOfNfts left colors={['primary', 'tertiary']} />
            <Person large={!tablet} />
            <PairOfNfts colors={['accent', 'secondary']} />
          </div>
          <Stage />
        </div>
      </div>
      <PlainText>
        Wallet NFT collection: <AccentText color="text-accent">04</AccentText>
      </PlainText>
    </div>
  )
}
