import BigWhaleLabs from 'components/MainPage/BigWhaleLabs'
import InfoBlock from 'components/MainPage/InfoBlock'
import MobileInfoBlock from 'components/MainPage/MobileInfoBlock'
import Navbar from 'components/Navbar'
import Root from 'components/Root'

const App = () => {
  return (
    <>
      <Navbar />
      <Root>
        <BigWhaleLabs />
        <InfoBlock />
        <MobileInfoBlock />
      </Root>
    </>
  )
}

export default App
