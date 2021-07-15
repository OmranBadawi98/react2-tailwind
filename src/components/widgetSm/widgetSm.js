import { Flip, LocalBar, Cast, Image } from '@material-ui/icons'
import React from 'react'

export const widgetSm = () => {
  return (
    <div className='h-80 grid grid-cols-2 gap-x-6 gap-y-4 cols-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 '>
      <div className='text-sm flex items-center mb-auto p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 bg-white shadow'>
        <Flip className='text-haram-icon1' />
        <div className='text-sm pr-2 text-gray-500'>
          صفحات الموقع
          <div className='text-black text-lg'>5</div>
        </div>
      </div>
      <div className='text-sm flex items-center mb-auto p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 bg-white shadow'>
        <LocalBar className='text-haram-icon2' />
        <div className='text-sm pr-2 text-gray-500'>
          الخدمات
          <div className='text-black text-lg'>4</div>
        </div>
      </div>
      <div className='text-sm flex items-center p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 mb-auto mt-auto bg-white shadow'>
        <Cast className='text-haram-icon3' />
        <div className='text-sm pr-2 text-gray-500'>
          الأخبار
          <div className='text-black text-lg'>6</div>
        </div>
      </div>
      <div className='text-sm flex items-center p-8 md:p-4 w-full h-16 mb-auto mt-auto sm:h-24 md:h-24 lg:h-20 bg-white shadow'>
        <Image className='text-haram-icon4' />
        <div className='text-sm pr-2 text-gray-500'>
          الصور
          <div className='text-black text-lg'>4</div>
        </div>
      </div>
      <div className='col-span-2 text-sm flex items-center justify-center w-full mt-auto h-20 bg-haram-300'>
        <div className=' w-full h-full flex items-center justify-center'>6</div>
        <div className='bg-haram-opacity w-full h-full flex items-center justify-center'>
          6.2
        </div>
      </div>
    </div>
  )
}

export default widgetSm
