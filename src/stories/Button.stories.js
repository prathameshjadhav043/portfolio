import React from 'react';
import Button from '../components/Button/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: { handleClick: { action: "handleCilck" } },
}

// const Template = args => <Button {...args} />

// export const Red = () => Template.bind({})
// export const Green = () => Template.bind({})

// Red.args = {
//     lable: "Next",
//     backgroundColor: "red",
//     size: "md",
// };

// Green.args = {
//     lable: "Next",
//     backgroundColor: "Green",
//     size: "md",
// };


export const Red = () => <Button lable="Next" />


