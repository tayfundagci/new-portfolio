'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
    setTheme(fnGetTheme())
  }, [])

  const fnGetTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      return theme
    }
    return 'dark'
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <label id="switch" className="switch">
        <input type="checkbox" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} id='slider' />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default ThemeSwitcher