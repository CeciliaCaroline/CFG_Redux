import renderer from 'react-test-renderer';

import Button from './Button';


test('renders component correctly', () => {
    const buttonText = "123";
    const component = renderer.create(<Button buttonText={buttonText} />)
    const tree = component.toJSON();

    // creates snapshot
    expect(tree).toMatchSnapshot();
})
