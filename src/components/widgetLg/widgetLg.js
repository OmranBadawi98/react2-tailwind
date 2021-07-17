import React from 'react'
import { userData } from '../../dummyData'
import Chart from '../chart/chart'

function widgetLg() {
  return (
    <div className='col-span-2'>
      <div className='w-full bg-white shadow h-60 xl:h-72 lg:h-80 md:h-96 sm:h-80 text-sm flex items-center justify-center'>
        <div className='h-full w-full flex flex-wrap bg-white  '>
          <div className='w-full h-16 lg:h-16 md:h-14 text-xl pt-3 pr-3'>
            عدد الزوار
            <p className='text-sm mt-2'>الزوار لآخر 7 أيام</p>
          </div>
          <Chart
            data={userData}
            title='User Analytics'
            grid
            dataKey='Active User'
          />
        </div>
        <div className='h-full w-2/4 items-center justify-center bg-haram-opacity bg-white'>
          <div className='w-full h-16 lg:h-16 md:h-14 text-xl pt-3 pr-3 flex  flex-wrap '>
            التقارير
          </div>
          <div className='w-full text-base text-gray-500 pl-3 pr-3 flex flex-wrap'>
            يمكنك مشاهدة المزيد من التقارير : حسب التاريخ, الدولة, المدينة, نظام
            التشغيل, المتصفح, طريقة الوصول, اسم المضيف, شركة الاتصال
            <div className='pt-2 text-black md:mb-4'>
              <button class='pb-2 flex flex-wrap mb-2 border-green-500 border-2 hover:bg-green-500 hover:text-white py-1 px-4 rounded-full'>
                مشاهدة المزيد
              </button>
              <button class='pb-2 border-blue-500 border-2 hover:bg-blue-500 hover:text-white py-1 px-4 rounded-full'>
                سجل الزوار
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default widgetLg
