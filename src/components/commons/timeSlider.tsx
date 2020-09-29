import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Slider, Typography } from '@material-ui/core'
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    width: '300px',
  },
})

const CustomSliderStyled = styled.div`
  background-color: lightblue;
  padding-left: 25px;
  border-radius: 10px;
  .MuiSlider-track {
    background-color: orange;
  }
  .MuiSlider-mark {
    width: 2px;
    height: 10px;
    top: 10px;
  }
  .MuiSlider-markActive {
    background-color: green;
  }
  .MuiSlider-rail {
    background-color: gray;
  }
  .MuiSlider-markLabel {
    font-weight: bolder;
  }
`

const defaultMark = [
  {
    value: -300,
    label: 'III TCN'
  },
  {
    value: -208,
    label: '208TCN'
  }
]

const TimeSlider = (props: any) => {
  const classes = useStyles()
  const { text, timelineStyle, onChangeSlider, customMark, minTime, maxTime, step, defaultTimeValue } = props
  const handleAriaValueText = (value: number) => {
    return `${value}`
  }
  return (
    <CustomSliderStyled>
      <div className={timelineStyle || classes.root}>
        <Typography id="discrete-slider-always" gutterBottom>
          {text?.timeline || 'Năm: '}
        </Typography>
        <Slider
          defaultValue={defaultTimeValue || -300}
          getAriaValueText={handleAriaValueText}
          aria-labelledby='discrete-slider-custom'
          step={step || 1}
          marks={customMark || defaultMark}
          min={minTime || -300}
          max={maxTime || 100}
          valueLabelDisplay='on'
          onChange={onChangeSlider}
        />
      </div>
    </CustomSliderStyled>
  )
}

export default TimeSlider