import { InputBase } from '@material-ui/core'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'

function topbar() {
  return (
    <>
      <div className='flex bg-white shadow font-serif w-screen  absolute h-16'>
        <div className='pt-0 pr-5 h-full flex items-center justify-between'>
          <div className='mr-52'>
            <button className='flex items-center text-l text-gray-800 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
              اضافة
            </button>
          </div>
        </div>
        <div className='flex flex-grow-1 items-center w-100 mr-auto'>
          <div className=' relative border-2 sm:hidden md:block lg:block hidden hover:bg-gray-200 hover:cursor-text rounded rounded-l-sm items-center pr-2'>
            <InputBase
              className=''
              placeholder='بحث...'
              classes={
                {
                  // root: classes.inputRoot,
                  // input: classes.inputInput
                }
              }
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <button className='border-2 sm:hidden md:block lg:block hidden border-r-0 h-9 rounded rounded-r-sm w-9 hover:cursor-pointer'>
            <SearchIcon />
          </button>
          <div className='relative cursor-pointer mr-3'>
            <NotificationsNone />
            <span className='absolute -inset-1 inset-x-0 h-3 w-3  bg-red-500 text-white rounded-lg justify-center text-xs'></span>
          </div>
          <div className='relative cursor-pointer mr-3'>
            <Language />
            <span className='absolute -inset-1 inset-x-0 h-3 w-3 bg-red-500 text-white rounded-lg justify-center text-xs'></span>
          </div>
          <div className='relative cursor-pointer mr-3'>
            <Settings />
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='rounded-full w-8 mr-3 ml-3'
          />
        </div>
      </div>
    </>
  )
}

export default topbar
