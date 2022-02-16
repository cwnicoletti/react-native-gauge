import React from 'react';

import renderer from 'react-test-renderer';
import Gauge from '../Gauge';

describe('<Gauge />', () => {
  it('renders enabled speedometer', () => {
    const tree = renderer.create(<Gauge />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a speedometer with custom props', () => {
    const tree = renderer.create(<Gauge size={40} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
