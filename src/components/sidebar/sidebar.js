// import {
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report
// } from '@material-ui/icons'
// import { Link } from 'react-router-dom'
// import HomeIcon from '@material-ui/icons/Home'
import React from 'react'
// import Topbar from '../topbar/topbar'
import { SidebarData } from './sidebarData'
import SubMenu from './subMenu'

function sidebar() {
  return (
    <div className='sm:invisible lg:visible h-screen bg-haram absolute w-56 text-gray-300 overflow-y-auto no-scrollbar'>
      {/* <Topbar /> */}
      {/* <div className='text-gray-300'> */}
      {/* <div className='mb-3 '> */}
      <h3 className='text-xl text-white pt-5 pr-5 pb-2 flex items-center font-bold '>
        {/* <Eco className='ml-3' /> */}
        <img
          className='ml-3 w-6 h-6'
          src='http://smartfordesign.net/smartend/demo/assets/dashboard/images/logo.png'
          alt='Logo'
        />
        لوحة التحكم
      </h3>
      <div className='space-y-6 bg-haram mb-12'>
        <div className='mb-2 mt-4 w-56'>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
        </div>
        {/* <div className='mb-2 mt-4 w-56'>
          <h3 className='text-sm text-gray-400 mr-2 pr-4 mb-2'>الرئيسي </h3>
          <ul className='list-none'>
            <Link to='/' className='link transition ease-out duration-700'>
              <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
                <HomeIcon className='ml-3' />
                الشاشة الرئيسية
              </li>
            </Link>
            <Link to='/Analytics' className='link'>
              <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
                <Timeline className='ml-3' />
                تحليلات
              </li>
            </Link>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <TrendingUp className='ml-3' />
              مبيعات
            </li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-sm text-gray-400 mr-2 pr-4 mb-2'>قائمة </h3>
          <ul className='list-none'>
            <Link to='/users' className='link'>
              <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
                <PermIdentity className='ml-3' />
                المستخدمين
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
                <Storefront className='ml-3' />
                المنتجات
              </li>
            </Link>
            <Link to='/معاملات' className='link'>
              <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
                <AttachMoney className='ml-3' />
                المعاملات
              </li>
            </Link>
            <Link to='/Report' className='link'>
              <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
                <BarChart className='ml-3' />
                التقارير
              </li>
            </Link>
          </ul>
        </div>
        <div className='mb-2'>
          <h3 className='text-sm text-gray-400 mr-2 pr-4 mb-2'>التنبيهات</h3>
          <ul className='list-none'>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <MailOutline className='ml-3' />
              الايميل
            </li>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <DynamicFeed className='ml-3' />
              تعليق
            </li>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <ChatBubbleOutline className='ml-3' />
              الرسائل
            </li>
          </ul>
        </div>
        <div className='mb-2'>
          <h3 className='text-sm  text-gray-400 mr-2 pr-4 mb-2'>الاغراض</h3>
          <ul className='list-none'>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <WorkOutline className='ml-3' />
              ادارة
            </li>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <Timeline className='ml-3' />
              تحليلات
            </li>
            <li className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
              <Report className='ml-3' />
              التقارير
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default sidebar
