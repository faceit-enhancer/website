import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Slider from 'react-slick'
import Menu, { MenuItem } from 'material-ui/Menu'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import screenshot1 from './screenshot-1.png'
import screenshot2 from './screenshot-2.png'
import screenshot3 from './screenshot-3.png'
import screenshot4 from './screenshot-4.png'

class App extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    return (
      <div
        style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Toolbar style={{ justifyContent: 'flex-end' }}>
          <Button color="primary" onClick={this.handleClick}>
            Donate
          </Button>
          <Menu
            id="donate-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem
              component="a"
              href="https://paypal.me/timcheung"
              target="_blank"
            >
              PayPal
            </MenuItem>
            <MenuItem
              component="a"
              href="http://steamcommunity.com/tradeoffer/new/?partner=238736&token=IGhRvdeN"
              target="_blank"
            >
              Steam Trade Offer
            </MenuItem>
          </Menu>
          <Button
            color="primary"
            href="https://www.reddit.com/r/faceitenhancer"
            target="_blank"
          >
            Reddit
          </Button>
          <Button
            color="primary"
            href="http://steamcommunity.com/groups/FACEITEnhancer"
            target="_blank"
          >
            Steam Group
          </Button>
          <Button
            color="primary"
            href="https://github.com/timche/faceit-enhancer"
            target="_blank"
          >
            GitHub
          </Button>
        </Toolbar>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#1E2222'
          }}
        >
          <Typography variant="display2" color="primary">
            FACEIT Enhancer
          </Typography>
          <Typography
            variant="headline"
            color="primary"
            style={{ marginBottom: 40 }}
          >
            Enhances the FACEIT experience and adds useful features.
          </Typography>
          <Typography variant="subheading" style={{ marginBottom: 4 }}>
            Install for
          </Typography>
          <div style={{ display: 'flex', marginBottom: 40 }}>
            <Button
              variant="raised"
              size="large"
              style={{ background: '#4285f4', color: '#fff' }}
              href="https://chrome.google.com/webstore/detail/faceit-enhancer/mokknliiomknodkdmpcellamkopbdmao"
              target="_blank"
            >
              Chrome
            </Button>
            <Button
              variant="raised"
              size="large"
              color="primary"
              style={{ background: '#ff9400', color: '#fff', marginLeft: 10 }}
              href="https://addons.mozilla.org/en-US/firefox/addon/faceit-enhancer/"
              target="_blank"
            >
              Firefox
            </Button>
          </div>
          <div style={{ width: 900 }}>
            <Slider autoplaySpeed={5000} autoplay dots infinite fade>
              <div>
                <img
                  src={screenshot1}
                  alt="Screenshot 1"
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <img
                  src={screenshot2}
                  alt="Screenshot 2"
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <img
                  src={screenshot3}
                  alt="Screenshot 3"
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <img
                  src={screenshot4}
                  alt="Screenshot 4"
                  style={{ width: '100%' }}
                />
              </div>
            </Slider>
          </div>
        </div>
        <Toolbar>
          <Typography variant="caption" style={{ flex: 1 }}>
            FACEIT Enhancer is developed independently, and is not officially
            endorsed by or affiliated with FACEIT.
          </Typography>
          <Button
            variant="caption"
            href="https://faceit.com/en/players/azn__"
            target="_blank"
          >
            Developed by azn
          </Button>
        </Toolbar>
      </div>
    )
  }
}

export default App
