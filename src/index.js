import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from 'material-ui/CssBaseline'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'
import './index.css'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
