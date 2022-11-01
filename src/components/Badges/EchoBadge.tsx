import HumanMessages from 'icons/HumanMessages'
import classNamesToString from 'helpers/classNamesToString'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  height,
  inset,
  letterSpacing,
  lineHeight,
  mixBlendMode,
  padding,
  position,
  rotate,
  saturate,
  space,
  textAlign,
  textColor,
  textTransform,
  userSelect,
  width,
  zIndex,
} from 'classnames/tailwind'

const shieldWrapper = classNamesToString(
  display('flex'),
  flexDirection('flex-col'),
  saturate('saturate-150'),
  lineHeight('leading-none'),
  alignItems('items-center'),
  padding('p-5'),
  space('space-y-3'),
  borderRadius('rounded-t-4xl', 'rounded-b-22xl'),
  textTransform('uppercase'),
  fontWeight('font-black'),
  textColor('text-primary-dark'),
  userSelect('select-none'),

  'echo-badge-background'
)

const tweetText = fontSize('text-lg')

const innerShield = classnames(
  position('relative', 'before:absolute'),
  display('flex'),
  flexDirection('flex-col'),
  padding('p-3', 'pb-6'),
  zIndex('before:z-10'),
  borderRadius('before:rounded-t-4xl', 'before:rounded-b-22xl'),
  backgroundColor('before:bg-tertiary'),
  width('before:w-full'),
  height('before:h-full'),
  inset('before:inset-0'),
  mixBlendMode('before:mix-blend-color-burn')
)
const anonText = classnames(
  textAlign('text-right'),
  textColor('text-primary-dark'),
  fontSize('text-6xl'),
  zIndex('z-20'),
  mixBlendMode('mix-blend-color')
)
const echoText = classnames(
  position('absolute'),
  textColor('text-primary-light'),
  fontSize('text-2xl'),
  rotate('-rotate-90'),
  letterSpacing('tracking-extra'),
  inset('-left-2', 'top-10'),
  zIndex('z-20')
)

export default function () {
  return (
    <div className={shieldWrapper}>
      <span className={tweetText}>Tweet with anonymity</span>
      <div className={innerShield}>
        <span className={anonText}>ANØN</span>
        <span className={echoText}>Echo</span>
        <HumanMessages />
      </div>
    </div>
  )
}
