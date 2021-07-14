import React from 'react'
import USA from '../Flags/usa.png'
import BR from '../Flags/brazil.png'
import MA from '../Flags/malaysia.png'
function widgetMd() {
  return (
    <div className='bg-white h-80 border shadow'>
      <div className='text-sm border-b-2 text-grey-dark flex items-center justify-center h-16'>
        <div className='w-full h-16 text-xl p-2 pr-3 '>
          زوار اليوم حسب الدولة
          <p className='text-sm '>
            معدل الزوار على مدار اليوم الحالي [08-07-2021]
          </p>
        </div>
        <div className='pl-3'>
          <button class='border bg-white hover:bg-gray-200 py-1 px-4 rounded-full'>
            المزيد
          </button>
        </div>
      </div>
      <div className='text-sm text-grey-dark flex h-64'>
        <ul className='p-3 h-full w-full'>
          <li className='text-sm flex items-center pb-3'>
            <div className='rounded-full bg-gray-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
              Un
            </div>
            <div className='text-base pr-2 text-black '>
              unknown
              <div className='text-gray-500 text-sm'>
                عدد الزوار : 35, عدد الصفحات : 129
              </div>
            </div>
          </li>
          <li className='text-sm flex items-center pb-3'>
            <div className='rounded-full bg-gray-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
              US
            </div>
            <div className='text-base pr-2 text-black '>
              <div className='flex items-center'>
                <img src={USA} alt='USA' className='w-4 h-4' />
                <h1 className='pr-1'>United States</h1>
              </div>
              <div className='text-gray-500 text-sm '>
                عدد الزوار : 4, عدد الصفحات : 4
              </div>
            </div>
          </li>
          <li className='text-sm flex items-center pb-3'>
            <div className='rounded-full bg-gray-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
              BR
            </div>
            <div className='text-base pr-2 text-black'>
              <div className='flex items-center'>
                <img src={BR} alt='BR' className='w-4 h-4' />
                <h1 className='pr-1'>Brazil</h1>
              </div>
              <div className='text-gray-500 text-sm'>
                عدد الزوار : 1, عدد الصفحات : 12
              </div>
            </div>
          </li>
          <li className='text-sm flex items-center pb-3'>
            <div className='rounded-full bg-gray-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
              MA
            </div>
            <div className='text-base pr-2 text-black'>
              <div className='flex items-center'>
                <img src={MA} alt='MA' className='w-4 h-4' />
                <h1 className='pr-1'>Malaysia</h1>
              </div>
              <div className='text-gray-500 text-sm'>
                عدد الزوار : 1, عدد الصفحات : 14
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default widgetMd
