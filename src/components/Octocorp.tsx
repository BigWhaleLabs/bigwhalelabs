import { BodyText, HeaderText, PrimaryAccentText } from 'components/Text'
import { displayFrom } from 'helpers/visibilityClassnames'
import { useInView } from 'react-intersection-observer'
import Background, { BackgroundsAnimated } from 'components/Background'
import Button from 'components/Button'
import Octocorp from 'icons/OctocorpLogo'
import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  opacity,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'

const textCard = classnames(
  space('space-y-6'),
  maxWidth('max-w-400'),
  justifyContent('justify-center')
)

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  position('relative'),
  margin('mx-3', 'md:mt-116', 'mt-64'),
  space('space-y-6', 'space-x-0', 'md:space-y-0', 'md:space-x-12'),
  zIndex('z-10')
)

const Backgrounds = ({ inView }: { inView: boolean }) => (
  <BackgroundsAnimated inView={inView}>
    <div className={opacity('opacity-75')}>
      <div className={displayFrom('md')}>
        <Background
          width={2100}
          height={700}
          background="#FF90BA"
          bottom={-85}
          left={-150}
          blur={150}
        />
      </div>
      <Background
        width={500}
        height={250}
        background="#FFB39B"
        bottom={65}
        left={-50}
        blur={100}
      />
      <Background
        width={1000}
        height={700}
        background="#FF4161"
        bottom={10}
        left={-30}
        rotate={0}
        blur={150}
      />
    </div>
  </BackgroundsAnimated>
)

export default function () {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <div className={wrapper} ref={ref}>
      <Octocorp />
      <div className={textCard}>
        <PrimaryAccentText color="text-secondary">OCTO-CORP</PrimaryAccentText>
        <HeaderText textSize="small">
          The antithesis of Big Whale Labs.
        </HeaderText>
        <BodyText>
          In a world where OCTO-CORP succeeds, your freedom of privacy is
          stifled. Zero Knowledge Proof and all of its benefits would be
          eradicated.
        </BodyText>
        <BodyText>
          Say no to OCTO-CORP, and endorse Big Whale Lab’s pseudonymous vision
          for the future.
        </BodyText>
        <Button
          outlined
          url={`http://twitter.com/share?url=${encodeURIComponent(
            `#zk identity is the future + privacy is a human right.

Check out @bigwhalelabs and spin up a pseudonym with their new protocol @sealcred 🦭`
          )}`}
        >
          Endorse now
        </Button>
      </div>
      <Backgrounds inView={inView} />
    </div>
  )
}
