import { TTailwindString } from 'classnames/tailwind'

type AllowedExtraClassnames =
  | 'outlined-button'
  | 'group'
  | 'no-text-shadow'
  | 'animation-delay-300'

export default function (
  ...classNames: (AllowedExtraClassnames | TTailwindString | undefined | null)[]
): string {
  return classNames.filter((s) => !!s).join(' ')
}
