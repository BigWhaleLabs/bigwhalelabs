import Button from 'components/Button'
import Logo from 'components/Logo'
import NavbarLinks from 'components/NavbarLinks'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  space,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-10'),
  margin('md:mt-116', 'mt-48')
)

export default function () {
  return (
    <div className={wrapper}>
      <Logo large />
      <Button outlined url="https://discord.gg/7frxHQdR">
        Join our Discord
      </Button>
      <NavbarLinks />
    </div>
  )
}
