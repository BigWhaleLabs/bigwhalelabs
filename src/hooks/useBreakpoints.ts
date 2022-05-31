import { useEffect, useState } from 'react'

const xsSize = 279
const smSize = 374
const mobileSize = 399
const mdSize = 599
const lgSize = 1023
const twoXlSize = 1535

export default function () {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function resizer() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', resizer)
    return () => {
      window.removeEventListener('resize', resizer)
    }
  }, [])

  return {
    xxs: width > xsSize,
    xs: width > xsSize && width < smSize,
    sm: width > smSize,
    mobile: width > mobileSize,
    md: width > mdSize,
    lg: width > lgSize,
    twoXl: width > twoXlSize,
  }
}
