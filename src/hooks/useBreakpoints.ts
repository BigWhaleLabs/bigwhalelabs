import { useMemo, useState } from 'preact/hooks'

const xsSize = 279
const smSize = 374
const mobileSize = 420
const mdSize = 599
const defaultMd = 768
const lgSize = 1023
const twoXlSize = 1535

export default function () {
  const [width, setWidth] = useState(window.innerWidth)

  useMemo(() => {
    function resizer() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', resizer)
    return () => {
      window.removeEventListener('resize', resizer)
    }
  }, [])

  return {
    defaultMd: width > defaultMd,
    expandedTablet: width > mobileSize && width < lgSize,
    lg: width > lgSize,
    md: width > mdSize,
    mobile: width > mobileSize,
    onlyPhones: width < mdSize,
    sm: width > smSize,
    tablet: width > xsSize && width < mdSize,
    twoXl: width > twoXlSize,
    xs: width > xsSize && width < smSize,
    xxs: width > xsSize,
  }
}
