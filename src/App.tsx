import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import PrivacyWorld from 'components/PrivacyWorld'
import Root from 'components/Root'
import SealCred from 'components/SealCred'
import StartBlock from 'components/StartBlock'
import WeLiveInAWorld from 'components/WeLiveInAWorld'

const App = () => {
  return (
    <>
      <Navbar />
      <Root>
        <StartBlock />
        <PrivacyWorld />
        <WeLiveInAWorld />
        <SealCred />

        <HiringBlock />
        <LogoFooter />
        <Footer />
      </Root>
    </>
  )
}

export default App
