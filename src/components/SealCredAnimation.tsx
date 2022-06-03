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
  justifyItems,
  margin,
  opacity,
  padding,
  position,
  space,
  transitionDuration,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'
import { useInView } from 'react-intersection-observer'

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
  margin('mt-14', 'mb-44'),
  zIndex('z-50')
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
const spheresWrapper = (visible: boolean) =>
  classnames(
    display('flex'),
    position('absolute'),
    inset('bottom-36', 'left-14'),
    flexDirection('flex-col'),
    width('w-11'),
    space('space-y-3'),
    padding('p-2'),
    borderRadius('rounded-4xl'),
    borderColor('border-primary-semi-dimmed'),
    borderWidth('border'),
    opacity(visible ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-opacity'),
    transitionDuration('duration-1000')
  )

type SpherePosition = 'left' | 'right'
interface NftBlockProps {
  position: SpherePosition
  small: boolean
  color: Color
}

const NftBlock = ({ position, small, color }: NftBlockProps) => {
  return (
    <div className={nftSphereIcon}>
      {position === 'left' && (
        <div className={nftLine}>
          <PlainText>NFT</PlainText>
          <Line small fromLight gradientDirection="to-right" color={color} />
        </div>
      )}
      <Sphere small={small} color={color} onLeft={position === 'left'} />
      {position === 'right' && (
        <div className={nftLine}>
          <Line small fromLight gradientDirection="to-left" color={color} />
          <PlainText>NFT</PlainText>
        </div>
      )}
    </div>
  )
}

interface PairOfNftsProps {
  position: SpherePosition
  small: boolean
  colors: Color[]
}
const PairOfNfts = ({ colors, position, small }: PairOfNftsProps) => {
  return (
    <div className={spheresBlock}>
      {colors.map((color) => NftBlock({ position, small, color }))}
    </div>
  )
}

export default function () {
  const { tablet } = useBreakpoints()
  const { beforeSuperOrb } = useScrollPercent()
  const { ref, inView } = useInView()

  return (
    <div className={wrapper}>
      <div className={firstStage}>
        <div className={personWithStage}>
          <div className={personWithSpheres}>
            <PairOfNfts
              position="left"
              colors={['primary', 'tertiary']}
              small={beforeSuperOrb}
            />
            <Person large={!tablet} />
            <PairOfNfts
              position="right"
              colors={['accent', 'secondary']}
              small={beforeSuperOrb}
            />
          </div>
          <Stage />
        </div>
        <div style={scrollAnimationProvider('walletAnimation')}>
          <PlainText>
            Wallet NFT collection:{' '}
            <AccentText color="text-accent">04</AccentText>
          </PlainText>
        </div>
      </div>
      <div className={secondStage}>
        <div className={superOrbBlock}>
          <SuperOrb />
        </div>
        <div style={scrollAnimationProvider('generatingHideAnimation')}>
          <PlainText>Generating zk proof...</PlainText>
        </div>
      </div>
      <div className={thirdStage}>
        <div
          className={happySuit}
          style={scrollAnimationProvider('suitAnimation')}
        >
          <div className={happyFacePosition}>
            <HappyFace />
          </div>
          <Suit />
        </div>
        <SuitReady />
        <div className={spheresWrapper(inView)} ref={ref}>
          <Sphere animated={false} color="accent" text="ZK" />
          <Sphere animated={false} color="primary" text="ZK" />
          <Sphere animated={false} color="secondary" text="ZK" />
          <Sphere animated={false} color="tertiary" text="ZK" />
        </div>
      </div>
    </div>
  )
}
