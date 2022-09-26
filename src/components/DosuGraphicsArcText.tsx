import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import ArcText from 'icons/ArcText'

export default function () {
  const text = 'We are hard at work • Stay tuned!'

  return (
    <>
      <div className={displayFrom('md')}>
        <ArcText text={text} diameter={400} />
      </div>

      <div className={displayTo('md')}>
        <ArcText text={text} diameter={200} />
      </div>
    </>
  )
}
