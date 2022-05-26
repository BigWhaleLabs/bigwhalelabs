import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import Root from 'components/Root'
import SealCred from 'components/SealCred'
import StartBlock from 'components/StartBlock'

const App = () => {
  return (
    <Root>
      <StartBlock />

      <SealCred />

      <HiringBlock />
      <Footer />
    </Root>
  )
}

export default App
