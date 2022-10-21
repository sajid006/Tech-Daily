import { Edit, Info, Man } from '@mui/icons-material';
import React from 'react';
export const NavData = [
    {
        id: 0,
        icon: <Edit/>,
        text: "Add a Story",
        link: "/stories/new"
    },
    {
        id: 1,
        icon: <Man/>,
        text: "Author Directory",
        link: "/users"
    },
    {
        id: 2,
        icon: <Info/>,
        text: "About Us",
        link: "/about"
    }
]