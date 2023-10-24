'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className='cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        🌙
      </div>
    </>
  )
}

export default ThemeSwitcher