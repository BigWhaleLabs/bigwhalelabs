export default function (list: (string | undefined | null)[]): string {
  return list.filter((s) => !!s).join(' ')
}
