/* @flow */

import renderer from 'react-test-renderer';
import Speedometer from '../Speedometer';

describe('<Speedometer />', () => {
  it('renders enabled speedometer', () => {
    const tree = renderer.create(<Speedometer />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a speedometer with custom props', () => {
    const tree = renderer.create(<Speedometer size={40} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
