import { Timeline } from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'
export const SidebarData = [
  {
    title: 'الشاشة الرئيسية',
    path: '/',
    icon: <HomeIcon />
    // iconClosed: <HomeIcon />,
    // iconOpened: <HomeIcon />
  },
  {
    title: 'تحليلات',
    path: '/Analytics',
    icon: <Timeline />,
    // iconClosed: <Timeline />,
    // iconOpened: <Timeline />,
    subNav: [
      {
        title: 'first one',
        path: '/',
        icon: <Timeline />
      },
      {
        title: '2',
        path: '/',
        icon: <Timeline />
      },
      {
        title: '3',
        path: '/',
        icon: <Timeline />
      }
    ]
  },
  {
    title: 'جهات الاتصال',
    path: '/',
    icon: '< />'
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'بريد الموقع',
    path: '/',
    icon: '< />'
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'الأجندة والملاحظات',
    path: '/',
    icon: '< />'
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: '',
    path: '/',
    icon: '< />'
    // iconClosed: '< />',
    // iconOpened: '< />'
  }
]
