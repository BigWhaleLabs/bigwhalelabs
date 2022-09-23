import Background from 'components/Background'
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

// TODO:
// 1) Add glow effects for badges
// 2) Remake animation provider to calculate mobile and tablet animations automatically
// 3) Re-define start and end points for animations

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
        <Background />
        <Footer />
      </Root>
    </>
  )
}

export default App
