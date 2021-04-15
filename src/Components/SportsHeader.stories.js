import React from 'react';

import SportsHeader from './SportsHeader';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'SportsHeader',
  component: SportsHeader,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SportsHeader {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
};