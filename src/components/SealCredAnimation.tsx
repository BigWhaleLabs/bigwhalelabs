import { AccentText, PlainText } from 'components/Text'
import Color from 'models/Color'
import HappyFace from 'icons/HappyFace'
import Line from 'components/Line'
import Person from 'icons/Person'
import Sphere from 'icons/Sphere'
import Stage from 'icons/Stage'
import Suit from 'icons/Suit'
import SuitReady from 'components/SuitReady'
import SuperOrb from 'icons/SuperOrb'
import classnames, {
  alignItems,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  height,
  inset,
  justifyContent,
  margin,
  padding,
  position,
  space,
  width,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-44')
)
const firstStage = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-7')
)

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
const secondStage = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-7')
)
const superOrbBlock = classnames(
  width('w-20'),
  height('h-20'),
  margin('mt-14', 'mb-44')
)
const thirdStage = classnames(
  display('flex'),
  position('relative'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-6')
)
const happyFacePosition = classnames(position('absolute'), inset('-top-3'))
const happySuit = classnames(
  display('flex'),
  position('relative'),
  justifyContent('justify-center')
)
const personWithSpheres = classnames(display('flex'))
const spheresWrapper = classnames(
  display('flex'),
  position('absolute'),
  inset('bottom-36', 'left-14'),
  flexDirection('flex-col'),
  space('space-y-3'),
  padding('p-2'),
  borderRadius('rounded-4xl'),
  borderColor('border-primary-semi-dimmed'),
  borderWidth('border')
)

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
      <Sphere small color={color} />
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
        <PlainText>
          Wallet NFT collection: <AccentText color="text-accent">04</AccentText>
        </PlainText>
      </div>
      <div className={secondStage}>
        <div className={superOrbBlock}>
          <SuperOrb />
        </div>
        <PlainText>Generating zk proof...</PlainText>
      </div>
      <div className={thirdStage}>
        <div className={happySuit}>
          <div className={happyFacePosition}>
            <HappyFace />
          </div>
          <Suit />
        </div>
        <SuitReady />
        <div className={spheresWrapper}>
          <Sphere color="accent" text="Zk" />
          <Sphere color="primary" text="Zk" />
          <Sphere color="secondary" text="Zk" />
          <Sphere color="tertiary" text="Zk" />
        </div>
      </div>
    </div>
  )
}
