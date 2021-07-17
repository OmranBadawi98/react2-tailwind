import { Drafts, Mail, MoreVert } from '@material-ui/icons'
import React from 'react'

function widgetMd() {
  return (
    <div className='h-96 bg-white border '>
      <div className='text-sm text-grey-dark flex items-center justify-center h-16'>
        <div className='w-full h-16 text-xl p-3 pt-4 '>أحدث الرسائل</div>
        <div className='pl-3'>
          <MoreVert />
        </div>
      </div>
      <div className=' text-sm text-grey-dark pr-3 pl-3'>
        {/* <div className='bg-red-300 text-sm text-grey-dark flex h-80 flex-wrap'>
          <div className='p-3 flex flex-wrap items-center justify-center'> */}
        <div className='text-sm w-full flex items-center pb-3 border-b-2 cursor-pointer'>
          <div className='rounded-full bg-red-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
            <Drafts />
          </div>
          <div className='text-base pr-2 text-black'>
            <div className='flex items-center'>
              <h1 className='pr-1'>Uknown</h1>
            </div>
            <div className='text-gray-500 text-sm'>
              عدد الزوار : 35, عدد الصفحات : 129
            </div>
          </div>
          <div className='mr-auto'>
            <h1 className='mb-4'>2020-2-13</h1>
          </div>
        </div>
        <div className='text-sm flex w-full items-center pb-3 border-b-2 pt-2 cursor-pointer'>
          <div className='rounded-full bg-red-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
            <Mail />
          </div>
          <div className='text-base pr-2 text-black '>
            <div className='flex items-center'>
              <h1 className='pr-1'>United States</h1>
            </div>
            <div className='text-gray-500 text-sm '>
              عدد الزوار : 4, عدد الصفحات : 4
            </div>
          </div>
          <div className='mr-auto'>
            <h1 className='mb-4'>2020-7-16</h1>
          </div>
        </div>
        <div className='text-sm flex w-full items-center pb-3 border-b-2 pt-2 cursor-pointer'>
          <div className='rounded-full bg-red-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
            <Mail />
          </div>
          <div className='text-base pr-2 text-black'>
            <div className='flex items-center'>
              <h1 className='pr-1'>Brazil</h1>
            </div>
            <div className='text-gray-500 text-sm'>
              عدد الزوار : 1, عدد الصفحات : 12
            </div>
          </div>
          <div className='mr-auto'>
            <h1 className='mb-4'>2019-4-18</h1>
          </div>
        </div>
        <div className='text-sm flex w-full items-center pb-3 pt-2 cursor-pointer'>
          <div className='rounded-full bg-green-500 text-white w-9 h-9 ml-3 items-center justify-center flex text-sm'>
            <Mail />
          </div>
          <div className='text-base pr-2 text-black'>
            <div className='flex items-center'>
              <h1 className='pr-1'>Malaysia</h1>
            </div>
            <div className='text-gray-500 text-sm'>
              عدد الزوار : 1, عدد الصفحات : 14
            </div>
          </div>
          <div className='mr-auto'>
            <h1 className='mb-4'>2021-3-1</h1>
          </div>
        </div>
      </div>
      <div className='flex p-3'>
        <button class='pb-2 border hover:bg-gray-200 py-1 px-4 rounded-full'>
          المزيد
        </button>
        <button class='pb-2 mr-auto border hover:text-white border-green-400 hover:bg-green-400 py-1 px-4 rounded-full'>
          رسالة جديدة
        </button>
      </div>
    </div>
  )
}

export default widgetMd
