import classnames, {
  borderColor,
  borderStyle,
  borderWidth,
  height,
  scale,
  width,
} from 'classnames/tailwind'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'
import useBreakpoints from 'hooks/useBreakpoints'

const ellipseStyles = (xs: boolean) =>
  classnames(
    height('h-20'),
    width('tiny:w-64', 'w-48'),
    scale(xs ? 'scale-75' : 'scale-100'),
    borderStyle('border-dashed'),
    borderWidth('border-2'),
    borderColor('border-primary-semi-dimmed')
  )

export default function ({ isVisible }: { isVisible: boolean }) {
  const { xs } = useBreakpoints()

  return (
    <div
      className={ellipseStyles(xs)}
      style={{
        borderRadius: '50%',
        ...scrollAnimationProvider('walletAndStageAnimation', isVisible),
      }}
    />
  )
}
