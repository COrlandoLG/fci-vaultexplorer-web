import React from 'react'
import { Canvas } from '@react-pdf/renderer'

const Line = ({ color = '#000', width = 1, style }:any) => (
  <Canvas
    style={{ width: '100%', height: 10, ...style }}
    paint={(painter) =>
      painter
        .lineWidth(width)
        .strokeColor(color)
        .stroke()
    }
  />
)

export default Line
