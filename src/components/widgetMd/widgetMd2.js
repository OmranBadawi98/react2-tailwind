import React from 'react'
import ChartCircle from '../chart/chartCircle'
import ChartCircle2 from '../chart/chartCircle2'

function widgetMd() {
  return (
    <div className='h-80 shadow border'>
      <div className='bg-white text-sm text-grey-dark flex items-center justify-center h-16'>
        <div className='w-full h-16 text-xl p-2 pr-3 '>
          متصفح الإنترنت
          <p className='text-sm '>نسبة المتصفحات حسب أخر 7 أيام</p>
        </div>
      </div>
      <div className='bg-white border-t-2 text-sm text-grey-dark flex h-64'>
        <div className='flex-wrap flex w-full'>
          <div
            className='bg-white flex flex-col 
                    items-center justify-center w-full text-sm text-grey-dark'
          >
            <ChartCircle />
          </div>
          <div
            className='bg-white flex flex-col 
                    items-center justify-center w-full text-sm text-grey-dark '
          >
            <div
              className='pb-3 flex flex-col 
                    items-center justify-center'
            >
              <h1>Chrome</h1>
              <h3 className='pb-3'>332</h3>

              <button class='pb-2 border hover:bg-gray-200 px-4 rounded-full'>
                المزيد
              </button>
            </div>
          </div>
        </div>
        <div className='bg-haram-opacity h-full w-full'>
          <div className='flex-wrap flex w-full'>
            <div
              className='flex flex-col 
                    items-center justify-center w-full text-sm text-grey-dark'
            >
              <ChartCircle2 />
            </div>
            <div
              className=' flex flex-col 
                    items-center justify-center w-full text-sm text-grey-dark '
            >
              <div
                className='pb-3 flex flex-col 
                    items-center justify-center'
              >
                <h1>Chrome</h1>
                <h3 className='pb-3'>332</h3>

                <button class='pb-2 border hover:bg-gray-200 px-4 rounded-full'>
                  المزيد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default widgetMd
