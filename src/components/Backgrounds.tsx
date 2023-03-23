import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import { opacity } from 'classnames/tailwind'
import Background, { BackgroundsAnimated } from 'components/Background'

interface InViewProp {
  inView: boolean
}

export function SealcasterBackground() {
  return (
    <>
      <div className={displayFrom('lg')}>
        <Background
          background="#8349FF"
          blur={50}
          bottom={-75}
          height={1000}
          left={30}
          rotate={10}
          width={1500}
        />
      </div>
      <div className={displayTo('lg')}>
        <Background
          background="#8349FF"
          blur={50}
          bottom={-75}
          height={1000}
          left={0}
          rotate={10}
          width={1500}
        />
      </div>
    </>
  )
}

export function EchoBackground() {
  return (
    <>
      <div className={displayFrom('md')}>
        <Background
          background="#0013FF"
          blur={40}
          bottom={-20}
          height={500}
          left={0}
          rotate={-30}
          width={750}
        />
        <Background
          background="#8349FF"
          blur={40}
          bottom={30}
          height={500}
          left={10}
          rotate={-30}
          width={900}
        />
        <Background
          background="#FFCDFF"
          blur={80}
          bottom={70}
          height={300}
          left={40}
          width={500}
        />
        <Background
          background="#FF0095"
          blur={120}
          bottom={20}
          height={550}
          left={50}
          rotate={30}
          width={800}
        />
      </div>
      <div className={displayTo('md')}>
        <Background
          background="#FF0095"
          blur={80}
          bottom={20}
          height={400}
          left={0}
          rotate={-30}
          width={600}
        />
        <Background
          background="#8349FF"
          blur={40}
          bottom={0}
          height={400}
          left={-50}
          rotate={30}
          width={600}
        />
      </div>
    </>
  )
}

export function KetlBackground() {
  return (
    <>
      <Background
        background="#FF0095"
        blur={120}
        bottom={0}
        height={560}
        left={-15}
        width={400}
      />
      <Background
        background="#FFCDFF"
        blur={100}
        bottom={0}
        height={300}
        left={-10}
        width={500}
      />
      <Background
        background="#8349FF"
        blur={100}
        bottom={10}
        height={500}
        left={-5}
        rotate={-30}
        width={900}
      />
      <Background
        background="#0013FF"
        blur={100}
        bottom={20}
        height={400}
        left={20}
        rotate={-10}
        width={700}
      />
    </>
  )
}

export function LearnBlockBackground({ inView }: InViewProp) {
  return (
    <BackgroundsAnimated inView={inView}>
      <div className={displayTo('md')}>
        <Background
          background="#FF8993"
          bottom={60}
          height={1000}
          left={-10}
          rotate={-20}
          saturate={2}
          width={1500}
        />
        <Background
          background="#CF00A3"
          blur={10}
          bottom={40}
          height={650}
          left={-275}
          rotate={-80}
          saturate={2}
          width={2200}
        />
      </div>

      <div className={displayFrom('md')}>
        <Background
          background="#280075"
          bottom={-30}
          height={1200}
          left={-50}
          rotate={0}
          width={2000}
        />
        <Background
          background="#CF00A3"
          bottom={-30}
          height={1200}
          left={-50}
          width={2000}
        />
        <Background
          background="#FF8993"
          bottom={10}
          height={500}
          left={-50}
          rotate={-10}
          width={1200}
        />
      </div>
    </BackgroundsAnimated>
  )
}

export function OctoBackground({ inView }: InViewProp) {
  return (
    <BackgroundsAnimated inView={inView}>
      <div className={opacity('opacity-75')}>
        <div className={displayFrom('md')}>
          <Background
            background="#FF90BA"
            blur={150}
            bottom={-85}
            height={700}
            left={-150}
            width={2100}
          />
        </div>
        <Background
          background="#FFB39B"
          blur={100}
          bottom={65}
          height={250}
          left={-50}
          width={500}
        />
        <Background
          background="#FF4161"
          blur={150}
          bottom={10}
          height={700}
          left={-30}
          rotate={0}
          width={1000}
        />
      </div>
    </BackgroundsAnimated>
  )
}

export default function ({ inView }: InViewProp) {
  return (
    <div className={displayFrom('md')}>
      <Background
        reversedAppear
        background="#00F3F9"
        bottom={0}
        height={1000}
        inView={inView}
        left={-50}
        rotate={23}
        width={3000}
      />
      <Background
        reversedAppear
        background="#81FFD9"
        blur={60}
        bottom={100}
        height={250}
        inView={inView}
        left={20}
        width={1000}
      />
      <Background
        reversedAppear
        background="#0A34CD"
        bottom={100}
        height={600}
        inView={inView}
        left={-10}
        rotate={23}
        width={2000}
      />
    </div>
  )
}

export function PrivacyWorldBackground({ inView }: InViewProp) {
  return (
    <div className={displayFrom('md')}>
      <Background
        reversedAppear
        background="#00F3F9"
        bottom={0}
        height={1000}
        inView={inView}
        left={-50}
        rotate={23}
        width={3000}
      />
      <Background
        reversedAppear
        background="#81FFD9"
        blur={60}
        bottom={100}
        height={250}
        inView={inView}
        left={20}
        width={1000}
      />
      <Background
        reversedAppear
        background="#0A34CD"
        bottom={100}
        height={600}
        inView={inView}
        left={-10}
        rotate={23}
        width={2000}
      />
    </div>
  )
}

export function LogoFooterBackground({ inView }: { inView: boolean }) {
  return (
    <BackgroundsAnimated inView={inView}>
      <div className={displayFrom('md')}>
        <Background
          background="#0034EB"
          bottom={-80}
          height={500}
          left={-100}
          width={1200}
        />
        <Background
          background="#00F3F9"
          blur={100}
          bottom={-80}
          height={750}
          left={-350}
          width={1900}
        />
      </div>
      <div className={displayTo('md')}>
        <Background
          background="#0034EB"
          bottom={-150}
          height={800}
          left={20}
          width={800}
        />
        <Background
          background="#00F3F9"
          blur={100}
          bottom={-175}
          height={750}
          left={-150}
          width={1000}
        />
      </div>
    </BackgroundsAnimated>
  )
}
