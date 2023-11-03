import classnames, { backgroundColor, height, width } from 'classnames/tailwind'

const line = classnames(
  height('h-full'),
  width('w-px'),
  backgroundColor('bg-secondary')
)

export default () => {
  return <div className={classnames(line)} />
}
