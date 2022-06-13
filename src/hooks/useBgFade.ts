import { useState } from 'preact/hooks'

export default function () {
  const [fadeIn, setFadeIn] = useState(false)

  return { fadeIn, setFadeIn }
}
