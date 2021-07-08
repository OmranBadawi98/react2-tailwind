import { Flip, LocalBar, Cast, Image } from '@material-ui/icons'
import React from 'react'

function Home() {
  return (
    <>
      <div className='m-6'>
        <div className='flex text-2xl mb-6'>
          <h1>
            أهلاً <span className='text-green-300'>admin</span>, مرحباً بعودتك
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:gap-0 sm:gap-y-4 md:gap-4 lg:gap-4 gap-4 mb-6'>
          <div class='grid grid-cols-2 gap-x-6 gap-y-4'>
            <div class='text-sm flex items-center p-8 w-full h-16 bg-white shadow'>
              <Flip className='text-haram-icon1' />
              <div className='text-sm pr-2 text-gray-500'>
                صفحات الموقع
                <div className='text-black text-lg'>4</div>
              </div>
            </div>
            <div class='text-sm flex items-center p-8 w-full h-16 bg-white shadow'>
              <LocalBar className='text-haram-icon2' />
              <div className='text-sm pr-2 text-gray-500'>
                صفحات الموقع
                <div className='text-black text-lg'>4</div>
              </div>
            </div>
            <div class='text-sm flex items-center p-8 w-full h-16 mt-2 bg-white shadow'>
              <Cast className='text-haram-icon3' />
              <div className='text-sm pr-2 text-gray-500'>
                صفحات الموقع
                <div className='text-black text-lg'>4</div>
              </div>
            </div>
            <div class='text-sm flex items-center p-8 w-full h-16 mt-2 bg-white shadow'>
              <Image className='text-haram-icon4' />
              <div className='text-sm pr-2 text-gray-500'>
                صفحات الموقع
                <div className='text-black text-lg'>4</div>
              </div>
            </div>
            <div class='col-span-2 text-sm flex items-center justify-center w-full mt-2 h-16 bg-haram-300'>
              <div className=' w-full h-full flex items-center justify-center'>
                6
              </div>
              <div className='bg-haram-opacity w-full h-full flex items-center justify-center'>
                6.2
              </div>
            </div>
          </div>
          <div className='col-span-2 flex'>
            <div class='w-full'>
              <div class='bg-white shadow h-60 text-sm flex items-center justify-center'>
                <div className='h-full w-full flex-wrap bg-white shadow flex items-center justify-center'>
                  <div className='w-full h-16 text-xl p-3 pr-3'>
                    عدد الزوار
                    <p className='text-sm mt-2'>الزوار لآخر 7 أيام</p>
                  </div>
                  <div className='w-full h-44 p-3 pt-6'>Chart</div>
                </div>
                <div className='h-full w-2/4 flex-wrap bg-haram-opacity shadow bg-white flex items-center justify-center '>
                  <div className='w-full h-16 text-xl p-3'>التقارير</div>
                  <div className='w-full h-44 p-3 pt-6'>Buttom</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 mb-6'>
          <div class='grid grid-cols-1 h-72'>
            <div class='bg-white shadow border text-sm flex items-center justify-center h-16'>
              <div className='w-full h-16 text-xl p-2 pr-3 '>
                معدل الزوار
                <p className='text-sm '>
                  معدل الزوار على مدار اليوم الحالي [08-07-2021]
                </p>
              </div>
            </div>
            <div class='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-56'>
              1
            </div>
          </div>
          <div class='grid grid-cols-1 h-72'>
            <div class='bg-white shadow border text-sm text-grey-dark flex items-center justify-center h-16'>
              <div className='w-full h-16 text-xl p-2 pr-3 '>
                متصفح الإنترنت
                <p className='text-sm '>نسبة المتصفحات حسب أخر 7 أيام</p>
              </div>
            </div>
            <div class='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-56'>
              1
            </div>
          </div>
          <div class='grid grid-cols-1 h-72'>
            <div class='bg-haram-opacity border shadow text-sm text-grey-dark flex items-center justify-center h-16'>
              <div className='w-full h-16 text-xl p-2 pr-3 '>
                زوار اليوم حسب الدولة
                <p className='text-sm '>
                  معدل الزوار على مدار اليوم الحالي [08-07-2021]
                </p>
              </div>
            </div>
            <div class='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-56'>
              1
            </div>
          </div>
        </div>
        <div class='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4'>
          <div class='grid grid-cols-1 h-72'>
            <div class='bg-yellow-500 text-sm text-grey-dark flex items-center justify-center h-16'>
              1
            </div>
            <div class='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-56'>
              1
            </div>
          </div>
          <div class='grid grid-cols-1 h-72'>
            <div class='bg-yellow-500 text-sm text-grey-dark flex items-center justify-center h-16'>
              1
            </div>
            <div class='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-56'>
              1
            </div>
          </div>
          <div class='grid grid-cols-1 h-72'>
            <div class='bg-yellow-500 text-sm text-grey-dark flex items-center justify-center h-16'>
              1
            </div>
            <div class='bg-gray-500 text-sm text-grey-dark flex items-center justify-center h-56'>
              1
            </div>
          </div>
        </div>
        {/* <div class='grid grid-cols-3 gap-4'>
          <div class='grid grid-flow-row grid-row-3 grid-col-3'>
            <div class='flex flex-wrap -mx-2 mb-4 '>
              <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
                <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
                  <p>full / half / quarter</p>
                </div>
              </div>
              <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
                <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
                  <p>full / half / quarter</p>
                </div>
              </div>
              <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
                <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
                  <p>full / half / quarter</p>
                </div>
              </div>
              <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
                <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
                  <p>full / half / quarter</p>
                </div>
              </div>
            </div>
          </div>
          <div class='col-span-2 ...'>
            <div class='w-full lg:w-3/5 px-2'>
              <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
                <p>full / half</p>
              </div>
            </div>
          </div>
        </div>
        <div class='flex flex-wrap -mx-2 mb-4'>
          <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
            <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
              <p>full / half / quarter</p>
            </div>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
            <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
              <p>full / half / quarter</p>
            </div>
          </div>
        </div>
        <div class='flex flex-wrap -mx-2 mb-4'>
          <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
            <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
              <p>full / half / quarter</p>
            </div>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/6 px-2 mb-4'>
            <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
              <p>full / half / quarter</p>
            </div>
          </div>
          <div class='w-full lg:w-3/5 px-2'>
            <div class='border bg-white h-12 text-sm text-grey-dark flex items-center justify-center'>
              <p>full / half</p>
            </div>
          </div>
        </div>

        <div className='container grid grid-rows-2 grid-flow-col gap-4 h-60 '>
          <div className='grid grid-cols-2 gap-4 '>
            <div className='shadow bg-white h-16 pt-4'>
              <div className=''>
                <i className='gg-ereader text-red-800'></i>
              </div>
            </div>
            <div className='shadow bg-white h-16 text-right pt-4'>
              <div className=''>
                <i className='gg-ereader text-red-800'></i>
              </div>
            </div>
            <div className='shadow bg-white h-16 mt-2 text-right pt-4'>
              <div className=''>
                <i className='gg-ereader text-red-800'></i>
              </div>
            </div>
            <div className='shadow bg-white h-16 mt-2 text-right pt-4'>
              <div className=''>
                <i className='gg-ereader text-red-800'></i>
              </div>
            </div>
            <div className='shadow bg-white h-16 mt-2 text-right pt-4'>5</div>
            <div className='shadow bg-white h-16 mt-2 text-right pt-4'>6</div>
          </div>
          <div className='bg-red-600 row-span-2 col-span-2 h-60'>5</div>
        </div> */}
      </div>
    </>
  )
}

export default Home
// #53B3CB
