import { BodyText } from 'components/Text'
import ChildrenProp from 'models/ChildrenProp'
import Line from 'components/Line'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  height,
  padding,
  width,
} from 'classnames/tailwind'

const wrapper = (small?: boolean) =>
  classnames(
    display('flex'),
    flexDirection('flex-row'),
    gap('gap-x-6'),
    width(small ? 'lg:w-1/3' : 'lg:w-1/4'),
    padding('px-8', 'md:px-0'),
    height('h-full'),
    alignItems('items-center')
  )

export default function ({
  children,
  small,
}: { small?: boolean } & ChildrenProp) {
  return (
    <div className={wrapper(small)}>
      <Line />
      <BodyText
        italic
        snugLeading={!small}
        textSize={small ? 'text-lg' : 'text-2xl'}
      >
        {children}
      </BodyText>
    </div>
  )
}
