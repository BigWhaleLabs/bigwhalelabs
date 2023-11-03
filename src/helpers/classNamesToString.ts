import { TTailwindString } from 'classnames/tailwind'

type AllowedExtraClassnames = '-my-12' | 'outlined-button' | 'group'

export default function (
  ...classNames: (AllowedExtraClassnames | TTailwindString | undefined | null)[]
): string {
  return classNames.filter((s) => !!s).join(' ')
}
