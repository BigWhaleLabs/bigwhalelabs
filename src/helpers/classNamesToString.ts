import { TTailwindString } from 'classnames/tailwind'

type AllowedExtraClassnames =
  | 'stroke-text'
  | 'stroke-text-small'
  | 'retro-text'
  | '-my-12'
  | 'outlined-button'
  // built-in tailwind classname, not represented as helper in tailwindcss-classnames for some reasons
  | 'group'

export default function (
  ...classNames: (AllowedExtraClassnames | TTailwindString | undefined | null)[]
): string {
  return classNames.filter((s) => !!s).join(' ')
}
