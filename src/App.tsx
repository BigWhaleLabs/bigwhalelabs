import Dosu from 'components/Dosu'
import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import LearnBlock from 'components/LearnBlock'
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import Octocorp from 'components/Octocorp'
import PrivacyWorld from 'components/PrivacyWorld'
import Root from 'components/Root'
import SealCred from 'components/SealCred'
import StartBlock from 'components/StartBlock'

const App = () => {
  return (
    <>
      <Navbar />
      <Root>
        <StartBlock />
        <PrivacyWorld />
        <LearnBlock />
        <SealCred />
        <Dosu />

        <HiringBlock />
        <Octocorp />
        <LogoFooter />
        <Footer />
      </Root>
    </>
  )
}

export default App
