export default function (...classNames: (string | undefined | null)[]): string {
  return classNames.filter((s) => !!s).join(' ')
}
