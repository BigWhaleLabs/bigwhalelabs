import {
  TArg,
  backgroundImage,
  classnames,
  container,
  fontSize,
  fontWeight,
  gradientColorStops,
  padding,
  textColor,
  textDecoration,
} from 'classnames/tailwind'
import Footer from 'components/Footer'

const section = classnames(
  backgroundImage('bg-gradient-to-br'),
  padding('px-2', 'py-8', 'sm:px-8', 'sm:py-12')
)
const containerClasses = classnames(container('container'))
const header = classnames(
  textColor('text-white'),
  fontSize('text-3xl', 'sm:text-7xl'),
  fontWeight('font-bold')
)
const link = classnames(textDecoration('underline'))

const Section: React.FC<{ gradientClassName: TArg }> = ({
  gradientClassName,
  children,
}) => (
  <div className={classnames(gradientClassName, section)}>
    <div className={containerClasses}>
      <div className={header}>{children}</div>
    </div>
  </div>
)

const Link: React.FC<{ href: string }> = ({ href, children }) => (
  <a href={href} className={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const App = () => {
  return (
    <>
      <Section
        gradientClassName={gradientColorStops('from-pink-600', 'to-purple-600')}
      >
        We are Big Whale Labs 🐳
      </Section>
      <Section
        gradientClassName={gradientColorStops('from-gray-700', 'to-gray-900')}
      >
        Breaking:{' '}
        <Link href="https://blog.bigwhalelabs.com/big-whale-labs-pre-seed-announcement">
          we've raised our pre-seed
        </Link>{' '}
        from Slow, Samsung, NFT Investment, 1inch, and more
      </Section>
      <Section
        gradientClassName={gradientColorStops('from-purple-600', 'to-blue-600')}
      >
        While everybody lives in the past we build the future
      </Section>
      <Section
        gradientClassName={gradientColorStops('from-blue-600', 'to-green-600')}
      >
        Dosu — pseudonymous web 3 platform to share your thoughts with the
        world, <Link href="https://dosu.io">join the waitlist</Link>
      </Section>
      <Section
        gradientClassName={gradientColorStops(
          'from-green-600',
          'to-yellow-600'
        )}
      >
        SealCred — anonymized decentralized social credit system based on NFT
        ownership, <Link href="https://blog.bwl.gg">stay tuned</Link>
      </Section>
      <Section
        gradientClassName={gradientColorStops('from-yellow-600', 'to-red-600')}
      >
        SocialGraph — portable on-chain list of connections owned by users not
        by corporations, <Link href="https://blog.bwl.gg">stay tuned</Link>
      </Section>
      <Section
        gradientClassName={gradientColorStops('from-red-600', 'to-purple-600')}
      >
        <Link href="mailto:hi@bwl.gg">Shoot us an email</Link>
      </Section>
      <Footer />
    </>
  )
}

export default App
