import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title:'Overview',
        path:'/overview',
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'Users',
                path:'/overview/users',
                icon:<IoIcons.IoIosPaper />
            },
            {
                title:'Admin',
                path:'/overview/admin',
                icon:<IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'Reports1',
                path:'/reports/reports1',
                icon:<IoIcons.IoIosPaper />
            },
            {
                title:'Reports2',
                path:'/reports/reports2',
                icon:<IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus />
    },
    {
        title:'Teams',
        path:'/teams',
        icon:<IoIcons.IoMdPeople />
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText />
    }

]