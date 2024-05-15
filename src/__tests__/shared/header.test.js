import ShallowRenderer from 'react-shallow-renderer';
import Header from 'src/shared/header';

describe('header component', () => {
  it('should be render', () => {
    const renderer = new ShallowRenderer();
    const wrapper = renderer.render(<Header title="GameZone" />);
    expect(wrapper).toMatchSnapshot();
  });
});
