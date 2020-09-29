import React from 'react'
import { withEventEmitter } from 'root/customMiddleware'
import styled from 'styled-components'
import { EVENT_EMITTER_COMMAND } from 'root/constants/cv/enums'
import { Link } from 'react-router-dom'

const Promp = styled.input`
width: 150px;
color: lightblue;
background: darkblue;
opacity: 0.5;
border-radius: 5px;
padding-left: 8px;
margin-left: 35px;
`

const SelectionCommand = styled.ul`
  opacity: 0.7;
  background-color: white;
  display: none;
  width: 150px;
  padding-left: 8px;
  margin-left: 35px;
  position: absolute;
  height: 300px;
  overflow: scroll;
  li {
    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: yellow;
    }
  }
  &.open {
    display: block;
  }
`


class PortfolioHeader extends React.PureComponent {

  constructor (props) {
    super(props)
    this.onPrompKeydown = this.onPrompKeydown.bind(this)
    this.state = {
      openCommandList: false
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  onPrompKeydown = (e) => {
    if (e.keyCode === 13) {
      Object.keys(EVENT_EMITTER_COMMAND).forEach((key) => {
        if (e.target.value === EVENT_EMITTER_COMMAND[key]) {
          this.props.eventEmitter.emit('promp-action', e.target.value ? e.target.value.trim() : '')
        }
      })
    }
  }

  render() {
    // const { props: { setLanguage, language } } = this
    return (
      <header>
        <div className='header-area' style={{position: 'relative', backgroundColor: 'steelblue', height: '75px'}}>
          <div id='sticky-header' className='main-header-area'>
            <div className='container-fluid'>
              <div className='row align-items-center'>
                <div className='col-xl-3 col-lg-2'>
                  <div className='logo'>
                    <Promp onKeyDown={this.onPrompKeydown} placeholder='Type an action' id='command-input'
                      onBlur={() => {
                        this.setState({ openCommandList: false })
                      }}
                      onFocus={() => {
                        this.setState({ openCommandList: true })
                      }}
                    />
                    <SelectionCommand className={this.state.openCommandList ? 'open' : ''}>
                      {Object.keys(EVENT_EMITTER_COMMAND).map((key, index) => (
                        <li value={key} key={`command-${index}`} 
                            onMouseDown={(e) => {
                              let ip = document.getElementById('command-input')
                              if(ip) ip.value = EVENT_EMITTER_COMMAND[key]
                              this.props.eventEmitter.emit('promp-action', EVENT_EMITTER_COMMAND[key])
                            }}
                        >{EVENT_EMITTER_COMMAND[key]}</li>
                      ))}
                    </SelectionCommand>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-7'>
                  <div className='main-menu  d-none d-lg-block'>
                    <nav>
                      <ul id='navigation'>
                        <li><Link className='active' to='/home'>Home</Link></li>
                        <li><Link to='/aboutMe'>About</Link></li>
                        <li><Link to='/home'>Services</Link></li>
                        <li><Link to='/vietmap'>Blog <i className='ti-angle-down'></i></Link>
                          <ul className='submenu'>
                            <li><Link to='/historicalMap'>Blog</Link></li>
                            <li><Link to='/historicalMap'>Single Blog</Link></li>
                          </ul>
                        </li>
                        <li><Link to='#'>Pages <i className='ti-angle-down'></i></Link>
                          <ul className='submenu'>
                            <li><Link to='/aboutMe'>Portfolio</Link></li>
                          </ul>
                        </li>
                        <li><Link to='aboutMe'>Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                  <div className='Appointment'>
                    <div className='book_btn d-none d-lg-block'>
                      <a target='_blank' rel="noopener noreferrer" href='/login' className='btn contact-me'>Contact Me</a>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='mobile_menu d-block d-lg-none'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withEventEmitter(PortfolioHeader)