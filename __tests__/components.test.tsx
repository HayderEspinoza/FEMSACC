import {
  ButtonStyled,
  Container,
  Typography,
  Movement,
} from '../src/components';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { StyledWrapper } from '../src/test/initialize';

describe('Components', () => {
  it('render ButtonStyled', () => {
    render(
      <StyledWrapper>
        <ButtonStyled>
          <Typography>Test</Typography>
        </ButtonStyled>
      </StyledWrapper>,
    );
  });

  it('render Container', () => {
    render(
      <StyledWrapper>
        <Container />
      </StyledWrapper>,
    );
  });

  it('render Typography', () => {
    render(
      <StyledWrapper>
        <Typography>Hello word</Typography>
      </StyledWrapper>,
    );
  });

  it('render Movement', () => {
    const data = {
      createdAt: '10-10-23',
      product: 'PS5',
      points: 200,
      image: 'url',
      is_redemption: true,
      id: '1',
    };
    const onPress = jest.fn();

    render(
      <StyledWrapper>
        <Movement data={data} onPress={onPress} />
      </StyledWrapper>,
    );

    fireEvent.press(screen.getByText('PS5'));

    expect(onPress).toBeCalledTimes(1);
    expect(onPress).toBeCalledWith(data);
  });
});
