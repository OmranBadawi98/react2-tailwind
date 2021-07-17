import { Apps } from '@material-ui/icons'
import React from 'react'

function widgetMd() {
  return (
    <div className='h-96 bg-white'>
      <div className=' text-xl text-grey-dark flex h-16 p-3 pt-4'>
        الملاحظات والأحداث
        <button class=' mr-auto pb-2 border hover:bg-gray-200 py-1 px-4 rounded-full'>
          إضافة
        </button>
      </div>
      <div className='text-gray-400 text-sm flex justify-center pt-4'>
        <Apps />
      </div>
      <div className='text-gray-400 text-sm flex justify-center h-64'>
        لايوجد أية بيانات هنا حتى الآن
      </div>
    </div>
  )
}

export default widgetMd
