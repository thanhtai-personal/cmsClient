import React, { PureComponent } from 'react'
import './style.scss'
import snowImage from './img/snowflake.png'


const snowImageCount = 45;
class SnowFallEffect extends PureComponent {
  renderSnow() {
    let snows = []
    for (let i = 0; i < snowImageCount; i++) {
      snows.push(<snowflake key={`snow-flake-${i}`}><img alt={''} src={snowImage} />️</snowflake>)
    }
    return snows
  }

  render() {
    return (
      <div className={this.props.className || ''}>
        <snowfall>
          <snowflake><span role='img' aria-label={''}>❄️</span>️️</snowflake>
          {/* <snowflake><span>🍂</span>️️</snowflake> */}
          {/* <snowflake><span>💝</span>️️</snowflake> */}
          {/* <snowflake><span>🌟</span>️</snowflake> */}
          {this.renderSnow()}
        </snowfall>
      </div>
    )
  }
}

export default SnowFallEffect