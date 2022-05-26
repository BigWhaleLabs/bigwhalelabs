import Footer from 'components/Footer'
import HiringBlock from 'components/HiringBlock'
import StartBlock from 'components/StartBlock'
import classnames, {
  alignItems,
  display,
  flexDirection,
} from 'classnames/tailwind'

const rootBox = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center')
)

const App = () => {
  return (
    <>
      <div className={rootBox}>
        <StartBlock />

        <HiringBlock />
      </div>
      <Footer />
    </>
  )
}

export default App
