import { BodyText, HeaderText, PrimaryAccentText } from 'components/Text'
import { OctoBackground } from 'components/Backgrounds'
import { useInView } from 'react-intersection-observer'
import Button from 'components/Button'
import Octocorp from 'icons/OctocorpLogo'
import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
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
      <OctoBackground inView={inView} />
    </div>
  )
}
