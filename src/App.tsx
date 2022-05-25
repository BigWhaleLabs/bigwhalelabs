import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import LogoFooter from 'components/LogoFooter'
import Navbar from 'components/Navbar'
import Root from 'components/Root'

const App = () => {
  return (
    <Root>
      <Navbar />
      <HiringBlock />
      <LogoFooter />
      <Footer />
    </Root>
  )
}

export default App
