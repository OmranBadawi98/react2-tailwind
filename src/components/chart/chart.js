import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='ml-3 mr-3 pl-1 pr-1  md:h-56 w-full ' dir='ltr'>
      <h3 className='pt-1 pb-1 text-base '>{title}</h3>
      <ResponsiveContainer width='99%' height={200}>
        <LineChart
          data={data}
          margin={{ top: 0, left: 0, right: 0, bottom: 8 }}
        >
          <XAxis dataKey='name' stroke='#0cc2aa' />
          <Line
            type='monotone'
            dataKey={dataKey}
            color='0c13aa'
            stroke='#0cc2aa'
          />
          <Tooltip />
          {grid && <CartesianGrid stroke='#ccccff' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
