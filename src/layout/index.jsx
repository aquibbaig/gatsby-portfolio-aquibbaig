import React, { createContext, useEffect, useState } from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

// Theme vars
import * as Dom from '../utils/dom'
import * as Storage from '../utils/storage'
import { THEME } from '../constants'

import './index.scss'

function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeCtx = createContext(false)

const Layout = ({ location, title, children }) => {
  const [checked, setChecked] = useState(false)
  const handleChange = checked => {
    const theme = getTheme(checked)

    Storage.setTheme(checked)
    setChecked(checked)
    toggleTheme(theme)
  }
  useEffect(() => {
    const checked = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(checked)
  }, [checked])
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <ThemeCtx.Provider value={checked}>
      <Top
        setCheckVar={(c) => setChecked(c)}
        title={title}
        location={location}
        rootPath={rootPath}
        checked={checked}
      />
      <br />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          boxShadow: '0 2px 2px 0 rgba(0,0,0,0.1)',
        }}
      >
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
      </div>
      <Footer />
    </ThemeCtx.Provider>
  )
}

export default Layout
