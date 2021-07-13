import { Flip, LocalBar, Cast, Image } from '@material-ui/icons'
import React from 'react'
import Chart from '../components/chart/chart'
import { userData } from '../../src/dummyData'
import Chart2 from '../components/chart/chart2'
import ChartCircle from '../components/chart/chartCircle'
// import widgetSm from '../components/widgetSm/widgetSm'

export default function Home() {
  return (
    // <div className='transition ease-out duration-700 '>
    <div className='m-6'>
      <div className='flex text-xl mb-6'>
        <h1>
          أهلاً <span className='text-green-300'>admin</span>, مرحباً بعودتك
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-4 md:gap-4 lg:gap-6 gap-6 mb-6'>
        <div className='grid grid-cols-2 gap-x-6 gap-y-4 cols-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 '>
          <div className='text-sm flex items-center p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 bg-white shadow'>
            <Flip className='text-haram-icon1' />
            <div className='text-sm pr-2 text-gray-500'>
              صفحات الموقع
              <div className='text-black text-lg'>5</div>
            </div>
          </div>
          <div className='text-sm flex items-center p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 bg-white shadow'>
            <LocalBar className='text-haram-icon2' />
            <div className='text-sm pr-2 text-gray-500'>
              الخدمات
              <div className='text-black text-lg'>4</div>
            </div>
          </div>
          <div className='text-sm flex items-center p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 mt-2 bg-white shadow'>
            <Cast className='text-haram-icon3' />
            <div className='text-sm pr-2 text-gray-500'>
              الأخبار
              <div className='text-black text-lg'>6</div>
            </div>
          </div>
          <div className='text-sm flex items-center p-8 md:p-4 w-full h-16 sm:h-24 md:h-24 lg:h-20 mt-2 bg-white shadow'>
            <Image className='text-haram-icon4' />
            <div className='text-sm pr-2 text-gray-500'>
              الصور
              <div className='text-black text-lg'>4</div>
            </div>
          </div>
          <div className='col-span-2 text-sm flex items-center justify-center w-full mt-2 h-16 bg-haram-300'>
            <div className=' w-full h-full flex items-center justify-center'>
              6
            </div>
            <div className='bg-haram-opacity w-full h-full flex items-center justify-center'>
              6.2
            </div>
          </div>
        </div>
        <div className='col-span-2 flex'>
          <div className='w-full bg-white shadow h-60 xl:h-80 lg:h-80 md:h-80 sm:h-96 text-sm flex items-center justify-center'>
            <div className='h-full w-full flex flex-wrap bg-white shadow  '>
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
            <div className='h-full w-2/4 bg-haram-opacity shadow bg-white items-center justify-center '>
              <div className='w-full h-16 lg:h-16 md:h-14 text-xl pt-3 pr-3 flex flex-wrap '>
                التقارير
              </div>
              <div className='w-full text-base text-gray-500 pl-3 pr-3 flex flex-wrap'>
                يمكنك مشاهدة المزيد من التقارير : حسب التاريخ, الدولة, المدينة,
                نظام التشغيل, المتصفح, طريقة الوصول, اسم المضيف, شركة الاتصال
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
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 sm:gap-y-4 md:gap-4 lg:gap-6 gap-6 mb-6'>
        <div className='h-80 shadow border items-center justify-center'>
          <div className='bg-white text-sm flex items-center justify-center h-16'>
            <div className='w-full h-16 text-xl p-2 pr-3 '>
              معدل الزوار
              <p className='text-sm '>
                معدل الزوار على مدار اليوم الحالي [08-07-2021]
              </p>
            </div>
          </div>
          <div className='text-sm text-grey-dark flex items-center justify-center h-64'>
            <Chart2 />
          </div>
        </div>
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

                  <button class='pb-2 border hover:bg-gray-200 py-1 px-4 rounded-full'>
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
                  <ChartCircle />
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

                    <button class='pb-2 border hover:bg-gray-200 py-1 px-4 rounded-full'>
                      المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-80'>
          <div className='bg-haram-opacity border shadow text-sm text-grey-dark flex items-center justify-center h-16'>
            <div className='w-full h-16 text-xl p-2 pr-3 '>
              زوار اليوم حسب الدولة
              <p className='text-sm '>
                معدل الزوار على مدار اليوم الحالي [08-07-2021]
              </p>
            </div>
          </div>
          <div className='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-64'></div>
        </div>
        <div className='h-80'>
          <div className='bg-yellow-500 text-sm text-grey-dark flex items-center justify-center h-16'>
            1
          </div>
          <div className='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-64'>
            1
          </div>
        </div>
        <div className='h-80'>
          <div className='bg-yellow-500 text-sm text-grey-dark flex items-center justify-center h-16'>
            1
          </div>
          <div className='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-64'>
            1
          </div>
        </div>
        <div className='h-80'>
          <div className='bg-yellow-500 text-sm text-grey-dark flex items-center justify-center h-16'>
            1
          </div>
          <div className='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-64'>
            1
          </div>
        </div>
      </div>
    </div>
    //{' '}
  )
}

// export default Home
// #53B3CB
