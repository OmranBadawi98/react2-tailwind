import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const SidebarLink = styled(Link)`
//   display: flex;
//   color: #e1e9fc;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   list-style: none;
//   height: 60px;
//   text-decoration: none;
//   font-size: 18px;
//   &:hover {
//     background: #252831;
//     border-left: 4px solid #632ce4;
//     cursor: pointer;
//   }
// `

// const SidebarLabel = styled.span`
//   margin-left: 16px;
// `

// const DropdownLink = styled(Link)`
//   background: #414757;
//   height: 60px;
//   padding-left: 3rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;
//   &:hover {
//     background: #632ce4;
//     cursor: pointer;
//   }
// `

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <div>
      <div to={item.path} onClick={item.subNav && showSubnav}>
        <h3 className='text-sm text-gray-400 mr-2 pr-4 mb-2'>الرئيسي </h3>
        <div className='list-none'>
          <div className='items-center pt-1 pb-1 pr-5 mb-2 cursor-pointer flex text-lg hover:bg-gray-700 hover:text-white'>
            <div className='ml-3'>{item.icon}</div>
            {item.title}
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </div>
      </div>
      <div className='bg-white bg-haram-opacity bg-opacity-10'>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <div>
                <div className='list-none'>
                  <div
                    className='items-center pt-1 pb-1 pr-14 mb-2 cursor-pointer flex text-lg  hover:bg-gray-700 hover:text-white'
                    to={item.path}
                    key={index}
                  >
                    {/* <div className='ml-3'>{item.icon}</div> */}
                    <div>{item.title}</div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SubMenu
