import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import ArcText from 'icons/ArcText'

export default function () {
  const text = 'We are hard at work • Stay tuned!'

  return (
    <>
      <div className={displayFrom('md')}>
        <ArcText diameter={400} text={text} />
      </div>

      <div className={displayTo('md')}>
        <ArcText diameter={200} text={text} />
      </div>
    </>
  )
}
