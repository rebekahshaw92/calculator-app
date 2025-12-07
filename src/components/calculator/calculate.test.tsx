import { describe, expect, it, vi } from 'vitest';
import Calculator from '.';
import { fireEvent, render } from '@testing-library/react';


describe('calculate', () => {
    it('should render initial value 0', () => {
        const { container } = render(<Calculator />);
        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('0');
    });

    it('should handle number inputs', () => {
        const { getByText, container } = render(<Calculator />);

        const button7 = getByText('7');
        fireEvent.click(button7);

        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('7');
    });

    it('should hsnfle addition', () => {
        const { getByText, container } = render(<Calculator />);

        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));

        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('5');

    });

    it('should hsnfle subtraction', () => {
        const { getByText, container } = render(<Calculator />);

        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));

        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('2');

    });


    it('should clear the display on reset', () => {
        const { getByText, container } = render(<Calculator />);

        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('reset'));

        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('0');

    });


    it('should delete the last digit', () => {
        const { getByText, container } = render(<Calculator />);

        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('del'));

        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('1');

    });

    it('should handle decimal input', () => {
        const { getByText, container } = render(<Calculator />);

        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('1'));

        const display = container.querySelector('#displayValue');
        expect(display).toHaveTextContent('5.1');
    })
})