import React from 'react'
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";

export const BottomBarData = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <MdIcons.MdDashboard />,
      cName: 'nav-text-mobile'
    },
    {
        title: 'Create Project',
        path: '/createproject',
        icon: <FiIcons.FiFilePlus />,
        cName: 'nav-text-mobile'
      },
      {
        title: 'Edit Project',
        path: '/Edit',
        icon: <FiIcons.FiEdit />,
        cName: 'nav-text-mobile'
      },
]