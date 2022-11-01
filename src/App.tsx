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

const App = () => {
  return (
    <>
      <Navbar />
      <Root>
        <div className="flex flex-col space-y-4 border-t-3xl border-b-full echo-badge-background">
          <span className="font-bold "></span>
        </div>
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
