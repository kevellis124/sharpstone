import React from 'react';

import SiteHeader from './SiteHeader';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'SiteHeader',
  component: SiteHeader,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SiteHeader {...args} />;

export const NormalHeader = Template.bind({});
NormalHeader.args = {};