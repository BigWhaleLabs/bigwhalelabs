import classnames, {
  alignItems,
  backgroundColor,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  height,
  justifyContent,
  textColor,
  transitionProperty,
  translate,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  width('w-full'),
  display('flex'),
  backgroundColor('bg-primary-background'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  height('h-14'),
  fontSize('text-sm'),
  fontWeight('font-bold'),
  textColor('text-primary'),
  gap('gap-2'),
  translate('se:-translate-y-3'),
  transitionProperty('transition-transform')
)
const badgeStyle = classnames(height('h-8'), width('w-36'))
const phString = display('hidden', 's:inline')

export default function () {
  return (
    <div className={wrapper}>
      <div className={phString}>Check us out on Product Hunt:</div>
      <a
        href="https://www.producthunt.com/posts/ketl?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ketl"
        target="_blank"
      >
        <img
          alt="ketl | Product Hunt"
          className={badgeStyle}
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425326&theme=neutral"
        />
      </a>
    </div>
  )
}
