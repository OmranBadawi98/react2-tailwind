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
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-6'>
          <div class='flex flex-wrap'>
            <div class='text-sm text-grey-dark flex items-center justify-center w-grid-46 mb-3 bg-gray-500'>
              1
            </div>
            <div class='text-sm text-grey-dark flex items-center justify-center w-grid-46 mb-3 bg-red-500'>
              2
            </div>
            <div class='text-sm text-grey-dark flex items-center justify-center w-grid-46  bg-gray-500'>
              3
            </div>
            <div class='text-sm text-grey-dark flex items-center justify-center w-grid-46  bg-yellow-500'>
              4
            </div>
            <div class='text-sm text-grey-dark flex items-center justify-center w-1/2 mt-3 bg-blue-500'>
              5
            </div>
            <div class='text-sm text-grey-dark flex items-center justify-center w-1/2 mt-3 bg-gray-500'>
              6
            </div>
          </div>
          <div className='col-span-2'>
            <div class='w-full'>
              <div class='border bg-white h-60 text-sm text-grey-dark flex items-center justify-center'>
                <p>full / half</p>
              </div>
            </div>
          </div>
        </div>

        <div class='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 mb-6'>
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
