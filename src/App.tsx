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
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import Root from 'components/Root'

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
    <Root>
      <Navbar />
      <LogoFooter />
    </Root>
  )
}

export default App
