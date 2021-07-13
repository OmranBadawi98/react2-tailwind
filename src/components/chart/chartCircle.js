import React from 'react'
import {
  // PieChart,
  // Pie,
  // Tooltip,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar
} from 'recharts'

const data = [{ name: 'L1', value: 60 }]
const circleSize = 150

function chartCircle() {
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
        fill='#82ca9d'
      />
      <text
        x={circleSize / 2}
        y={circleSize / 2}
        textAnchor='middle'
        dominantBaseline='middle'
        className='progress-label text-xl'
      >
        60%
      </text>
    </RadialBarChart>
    // <PieChart width={400} height={400}>
    //   <Pie
    //     dataKey='value'
    //     isAnimationActive={true}
    //     data={myData}
    //     outerRadius={50}
    //     stroke='orangered'
    //     strokeWidth='10'
    //     fill='white'
    //     label
    //   />

    //   {/* Display the tooltips */}
    //   <Tooltip />
    // </PieChart>
  )
}

export default chartCircle
