import { useState } from 'react'

export function useShow() {
  const [show, setShow] = useState(false)

  const switch_show = () => {
    setShow(!show)
  }

  const switch_off = () => setShow(false)
  const switch_on = () => setShow(true)

  return {
    show,
    switch_show,
    switch_off,
    switch_on,
  }
}
