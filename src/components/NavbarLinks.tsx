import BwlLinks from 'components/BwlLinks'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
  space,
} from 'classnames/tailwind'

const navLinkContainer = classnames(
  display('hidden', 'sm:flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-y-10', 'md:space-y-0', 'md:space-x-4', 'lg:space-x-12'),
  padding('py-10', 'md:py-0')
)

export default function () {
  return (
    <div className={navLinkContainer}>
      <BwlLinks />
    </div>
  )
}
