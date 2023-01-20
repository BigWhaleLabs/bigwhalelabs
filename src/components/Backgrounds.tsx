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
          width={1500}
          height={1000}
          background="#8349FF"
          bottom={-75}
          left={30}
          rotate={10}
          blur={50}
        />
      </div>
      <div className={displayTo('lg')}>
        <Background
          width={1500}
          height={1000}
          background="#8349FF"
          bottom={-75}
          left={0}
          rotate={10}
          blur={50}
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
          width={750}
          height={500}
          background="#0013FF"
          bottom={-20}
          left={0}
          rotate={-30}
          blur={40}
        />
        <Background
          width={900}
          height={500}
          background="#8349FF"
          bottom={30}
          left={10}
          rotate={-30}
          blur={40}
        />
        <Background
          width={500}
          height={300}
          background="#FFCDFF"
          bottom={70}
          left={40}
          blur={80}
        />
        <Background
          width={800}
          height={550}
          background="#FF0095"
          bottom={20}
          left={50}
          rotate={30}
          blur={120}
        />
      </div>
      <div className={displayTo('md')}>
        <Background
          width={600}
          height={400}
          background="#FF0095"
          bottom={20}
          left={0}
          rotate={-30}
          blur={80}
        />
        <Background
          width={600}
          height={400}
          background="#8349FF"
          bottom={0}
          left={-50}
          rotate={30}
          blur={40}
        />
      </div>
    </>
  )
}

export function KetlBackground() {
  return (
    <>
      <Background
        width={400}
        height={560}
        background="#FF0095"
        bottom={0}
        left={-15}
        blur={120}
      />
      <Background
        width={500}
        height={300}
        background="#FFCDFF"
        bottom={0}
        left={-10}
        blur={100}
      />
      <Background
        width={900}
        height={500}
        background="#8349FF"
        bottom={10}
        left={-5}
        rotate={-30}
        blur={100}
      />
      <Background
        width={700}
        height={400}
        background="#0013FF"
        bottom={20}
        left={20}
        rotate={-10}
        blur={100}
      />
    </>
  )
}

export function LearnBlockBackground({ inView }: InViewProp) {
  return (
    <BackgroundsAnimated inView={inView}>
      <div className={displayTo('md')}>
        <Background
          width={1500}
          height={1000}
          background="#FF8993"
          bottom={60}
          left={-10}
          rotate={-20}
          saturate={2}
        />
        <Background
          width={2200}
          height={650}
          background="#CF00A3"
          bottom={40}
          left={-275}
          rotate={-80}
          blur={10}
          saturate={2}
        />
      </div>

      <div className={displayFrom('md')}>
        <Background
          width={2000}
          height={1200}
          background="#280075"
          bottom={-30}
          left={-50}
          rotate={0}
        />
        <Background
          width={2000}
          height={1200}
          background="#CF00A3"
          bottom={-30}
          left={-50}
        />
        <Background
          width={1200}
          height={500}
          background="#FF8993"
          bottom={10}
          left={-50}
          rotate={-10}
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
            width={2100}
            height={700}
            background="#FF90BA"
            bottom={-85}
            left={-150}
            blur={150}
          />
        </div>
        <Background
          width={500}
          height={250}
          background="#FFB39B"
          bottom={65}
          left={-50}
          blur={100}
        />
        <Background
          width={1000}
          height={700}
          background="#FF4161"
          bottom={10}
          left={-30}
          rotate={0}
          blur={150}
        />
      </div>
    </BackgroundsAnimated>
  )
}

export default function ({ inView }: InViewProp) {
  return (
    <div className={displayFrom('md')}>
      <Background
        width={3000}
        height={1000}
        background="#00F3F9"
        bottom={0}
        left={-50}
        rotate={23}
        inView={inView}
        reversedAppear
      />
      <Background
        width={1000}
        height={250}
        background="#81FFD9"
        bottom={100}
        left={20}
        inView={inView}
        blur={60}
        reversedAppear
      />
      <Background
        width={2000}
        height={600}
        background="#0A34CD"
        bottom={100}
        left={-10}
        rotate={23}
        inView={inView}
        reversedAppear
      />
    </div>
  )
}

export function PrivacyWorldBackground({ inView }: InViewProp) {
  return (
    <div className={displayFrom('md')}>
      <Background
        width={3000}
        height={1000}
        background="#00F3F9"
        bottom={0}
        left={-50}
        rotate={23}
        inView={inView}
        reversedAppear
      />
      <Background
        width={1000}
        height={250}
        background="#81FFD9"
        bottom={100}
        left={20}
        inView={inView}
        blur={60}
        reversedAppear
      />
      <Background
        width={2000}
        height={600}
        background="#0A34CD"
        bottom={100}
        left={-10}
        rotate={23}
        inView={inView}
        reversedAppear
      />
    </div>
  )
}

export function LogoFooterBackground({ inView }: { inView: boolean }) {
  return (
    <BackgroundsAnimated inView={inView}>
      <div className={displayFrom('md')}>
        <Background
          width={1200}
          height={500}
          background="#0034EB"
          bottom={-80}
          left={-100}
        />
        <Background
          width={1900}
          height={750}
          background="#00F3F9"
          bottom={-80}
          left={-350}
          blur={100}
        />
      </div>
      <div className={displayTo('md')}>
        <Background
          width={800}
          height={800}
          background="#0034EB"
          bottom={-150}
          left={20}
        />
        <Background
          width={1000}
          height={750}
          background="#00F3F9"
          bottom={-175}
          left={-150}
          blur={100}
        />
      </div>
    </BackgroundsAnimated>
  )
}
