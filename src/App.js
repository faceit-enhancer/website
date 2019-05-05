import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Slider from 'react-slick'
import Particles from 'react-particles-js'
import screenshot1 from './images/screenshot-1.png'
import screenshot2 from './images/screenshot-2.png'
import screenshot3 from './images/screenshot-3.png'
import screenshot4 from './images/screenshot-4.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden'
          }}
        >
          <Particles />
        </div>
        <Toolbar style={{ justifyContent: 'flex-end' }}>
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
            href="https://github.com/faceit-enhancer/faceit-enhancer"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            color="primary"
            href="https://twitter.com/timche_"
            target="_blank"
          >
            Twitter
          </Button>
        </Toolbar>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 40
            }}
          >
            <Typography variant="display2" color="primary">
              FACEIT Enhancer
            </Typography>
            <Typography
              variant="headline"
              color="primary"
              style={{ marginBottom: 20 }}
            >
              Enhances the FACEIT experience and adds useful features.
            </Typography>
            <Typography variant="subheading" style={{ marginBottom: 4 }}>
              Install for
            </Typography>
            <div style={{ display: 'flex' }}>
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
          </div>
          <div style={{ flex: 1 }}>
            <Slider autoplaySpeed={5000} autoplay infinite fade adaptiveHeight>
              {[screenshot1, screenshot2, screenshot3, screenshot4].map(
                (screenshot, i) => (
                  <div className="image-wrapper" key={i}>
                    <img src={screenshot} />
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
        <Toolbar>
          <Typography variant="caption" style={{ flex: 1 }}>
            FACEIT Enhancer is developed independently, and is not officially
            endorsed by or affiliated with FACEIT.
          </Typography>
          <Button href="https://faceit.com/en/players/azn" target="_blank">
            Created by azn
          </Button>
        </Toolbar>
      </div>
    )
  }
}

export default App
