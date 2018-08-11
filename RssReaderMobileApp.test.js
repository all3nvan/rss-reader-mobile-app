import React from 'react';
import RssReaderMobileApp from './RssReaderMobileApp';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<RssReaderMobileApp />).toJSON();
  expect(rendered).toBeTruthy();
});
