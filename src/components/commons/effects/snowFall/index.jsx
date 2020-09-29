import React, { PureComponent } from 'react'

import './style.scss'
class SnowFallEffect extends PureComponent {
  render () {
    const { layer1 = true, layer2 = false, layer3 = false } = this.props
    return (
      <div className={this.props.className || ''}>
        <div className="wrapper">
          {layer1 && <div className="snow layer1 a"></div>}
          {layer1 && <div className="snow layer1"></div>}
          {layer2 && <div className="snow layer2 a"></div>}
          {layer2 && <div className="snow layer2"></div>}
          {layer3 && <div className="snow layer3 a"></div>}
          {layer3 && <div className="snow layer3"></div>}
        </div>
      </div>
    )
  }
}

export default SnowFallEffect