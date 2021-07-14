import React from 'react'
import WidgetSm from '../components/widgetSm/widgetSm'
import WidgetLg from '../components/widgetLg/widgetLg'
import WidgetMd from '../components/widgetMd/widgetMd'
import WidgetMd2 from '../components/widgetMd/widgetMd2'
import WidgetMd3 from '../components/widgetMd/widgetMd3'
import WidgetMd4 from '../components/widgetMd/widgetMd4'
import WidgetMd5 from '../components/widgetMd/widgetMd5'
import WidgetMd6 from '../components/widgetMd/widgetMd6'

export default function Home() {
  return (
    <div className='m-6'>
      <div className='flex text-xl mb-6'>
        <h1>
          أهلاً <span className='text-green-300'>admin</span>, مرحباً بعودتك
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-4 md:gap-4 lg:gap-6 gap-6 mb-6'>
        <WidgetSm />
        <WidgetLg />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 sm:gap-y-4 md:gap-4 lg:gap-6 gap-6 mb-6'>
        <WidgetMd />
        <WidgetMd2 />
        <WidgetMd3 />
        <WidgetMd4 />
        <WidgetMd5 />
        <WidgetMd6 />
      </div>
    </div>
  )
}
// #53B3CB
