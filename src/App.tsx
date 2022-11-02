import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import LearnBlock from 'components/LearnBlock'
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import Octocorp from 'components/Octocorp'
import PrivacyWorld from 'components/PrivacyWorld'
import Projects from 'components/Projects'
import Root from 'components/Root'
import SealCred from 'components/SealCred'
import StartBlock from 'components/StartBlock'

// TODO: remake sealcaster badge
// TODO: Re-use gem.webp and resize it

const App = () => {
  return (
    <>
      <Navbar />
      <Root>
        <StartBlock />
        <PrivacyWorld />
        <LearnBlock />
        <SealCred />
        <Projects />
        <HiringBlock />
        <Octocorp />
        <LogoFooter />
        <Footer />
      </Root>
    </>
  )
}

export default App
