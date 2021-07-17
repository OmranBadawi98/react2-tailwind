import React from 'react'
import Chart2 from '../chart/chart2'

function widgetMd() {
  return (
    <div className='h-80 shadow border items-center justify-center'>
      <div className='bg-white text-sm flex items-center justify-center h-16'>
        <div className='w-full h-16 text-xl p-2 pr-3 '>
          معدل الزوار
          <p className='text-sm '>
            معدل الزوار على مدار اليوم الحالي [08-07-2021]
          </p>
        </div>
      </div>
      <div className=' text-sm text-grey-dark flex items-center justify-center h-64'>
        <Chart2 />
      </div>
    </div>
  )
}

export default widgetMd
