import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import PrivacyWorld from 'components/PrivacyWorld'
import Root from 'components/Root'
import SealCred from 'components/SealCred'
import StartBlock from 'components/StartBlock'

const App = () => {
  return (
    <Root>
      <StartBlock />
      <PrivacyWorld />

      <SealCred />

      <HiringBlock />
      <Footer />
    </Root>
  )
}

export default App
