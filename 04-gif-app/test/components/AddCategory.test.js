import { AddCategory } from '../../src/components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('AddCategory component test', () => {
  test('Should change text box value', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('Should call onNewCategory when input has a value', () => {
    const inputValue = 'test';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
  });

  test('Should not call onNewCategory when input has no value', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
