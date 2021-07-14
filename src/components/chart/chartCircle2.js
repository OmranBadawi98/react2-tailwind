import React from 'react'
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts'

const data = [{ name: 'L1', value: 40 }]
const circleSize = 150

function chartCircle2() {
  return (
    <RadialBarChart
      width={circleSize}
      height={circleSize}
      cx={circleSize / 2}
      cy={circleSize / 2}
      innerRadius={65}
      outerRadius={50}
      barSize={60}
      data={data}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type='number'
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        clockWise
        dataKey='value'
        cornerRadius={circleSize / 2}
        fill='#FEFB18'
      />
      <text
        x={circleSize / 2}
        y={circleSize / 2}
        textAnchor='middle'
        dominantBaseline='middle'
        className='progress-label text-xl'
      >
        40%
      </text>
    </RadialBarChart>
  )
}

export default chartCircle2
