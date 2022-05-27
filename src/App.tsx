import Dosu from 'components/Dosu'
import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import PrivacyWorld from 'components/PrivacyWorld'
import Root from 'components/Root'
import SealCred from 'components/SealCred'
import StartBlock from 'components/StartBlock'

const App = () => {
  return (
    <Root>
      <Navbar />
      <StartBlock />
      <PrivacyWorld />

      <SealCred />

      <Dosu />

      <HiringBlock />
      <LogoFooter />
      <Footer />
    </Root>
  )
}

export default App
