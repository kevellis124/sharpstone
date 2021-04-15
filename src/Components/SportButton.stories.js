import React from 'react';

import SportButton from './SportButton';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'SportButton',
  component: SportButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SportButton {...args} />;

export const UnclickedSport = Template.bind({});

UnclickedSport.args = {
    text: "NBA"
};