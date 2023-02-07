import React from 'react';
import HoverButton from '../components/Button/HoverButton';

export default {
    title: 'HoverButton',
    component: HoverButton,
    argTypes: { handleClick: { action: "handleCilck" } },
}


export const Red = () => <HoverButton lable="Hover Button" />



