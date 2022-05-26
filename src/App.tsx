import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import Root from 'components/Root'
import SealCred from 'components/SealCred'

const App = () => {
  return (
    <Root>
      <Navbar />
      <SealCred />
      <HiringBlock />
      <LogoFooter />
      <Footer />
    </Root>
  )
}

export default App
