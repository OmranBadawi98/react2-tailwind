import {
  Timeline,
  Apps,
  Group,
  Flip,
  LocalBar,
  Cast,
  Image,
  CardGiftcard,
  AlternateEmail,
  Settings,
  SettingsEthernet,
  FolderOpen,
} from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'

export const SidebarData = [
  {
    heading: 'الرئيسي',
    title: 'الشاشة الرئيسية',
    path: '/',
    icon: <HomeIcon />,
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
        title: 'حسب التاريخ',
        path: '/OnDate',
      },
      {
        title: 'الدولة',
        path: '/OnCountry',
      },
      {
        title: 'المدينة',
        path: '/OnCity',
      },
      {
        title: 'نظام التشغيل',
        path: '/OnOS',
      },
      {
        title: 'المتصفح',
        path: '/OnBrowser',
      },
      {
        title: 'طريقة الوصول',
        path: '/OnAccess',
      },
      {
        title: 'اسم المضيف',
        path: '/CustName',
      },
      {
        title: 'شركة الاتصال',
        path: '/TelName',
      },
      {
        title: 'سجل الزوار',
        path: '/Visiter',
      },
      {
        title: 'استعلام عن IP',
        path: '/GetIP',
      },
    ],
  },
  {
    title: 'جهات الاتصال',
    path: '/Contact',
    icon: <Group />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'بريد الموقع',
    path: '/Mail',
    icon: <AlternateEmail />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'الأجندة والملاحظات',
    path: '/Notes',
    icon: <Apps />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    heading: 'بيانات الموقع',
    title: 'صفحات الموقع',
    path: '/Pages',
    icon: <Flip />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'الخدمات',
    path: '/Services',
    icon: <LocalBar />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'الأخبار',
    path: '/News',
    icon: <Cast />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'الصور',
    path: '/Pict',
    icon: <Image />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    title: 'المنتجات',
    path: '/Product',
    icon: <CardGiftcard />,
    // iconClosed: '< />',
    // iconOpened: '< />'
    subNav: [
      {
        title: 'تصنيفات المنتجات',
        path: '/FilterProduct',
      },
      {
        title: 'المنتجات',
        path: '/Product',
      },
    ],
  },
  {
    title: 'العملاء',
    path: '/Customer',
    icon: <FolderOpen />,
    // iconClosed: '< />',
    // iconOpened: '< />'
  },
  {
    heading: 'الإعدادات',
    title: 'إعدادات الموقع',
    path: '/WebSetting',
    icon: <Settings />,
    // iconClosed: '< />',
    // iconOpened: '< />'
    subNav: [
      {
        title: 'الإعدادات العامة',
        path: '/PublicSetting',
      },
      {
        title: 'قوائم الموقع',
        path: '/ListWeb',
      },
      {
        title: 'المستخدمين والصلاحيات',
        path: '/Users&Roles',
      },
    ],
  },
  {
    title: 'أدوات مشرف الموقع',
    path: '/AdminSetting',
    icon: <SettingsEthernet />,
    // iconClosed: '< />',
    // iconOpened: '< />'
    subNav: [
      {
        title: 'الإعدادات العامة',
        path: '/PublicSetting',
      },
      {
        title: 'إعدادات أقسام الموقع',
        path: '/PartsSetting',
      },
      {
        title: 'إعدادات البنرات',
        path: '/BanarSetting',
      },
    ],
  },
]
