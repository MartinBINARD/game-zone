import { render, fireEvent } from '@testing-library/react-native';
import FlatButton from 'src/shared/button';

describe('Button component', () => {
  it('call onPress function when the button is pressed', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <FlatButton
        testID="FlatButton:submit"
        text="submit"
        onPress={mockOnPress}
      />
    );
    const pressFlatButton = getByTestId('FlatButton:submit');
    fireEvent.press(pressFlatButton);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
