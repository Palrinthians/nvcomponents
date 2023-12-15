import { render } from '@testing-library/react';
import { Button } from './button.component';

describe('Button Component', () => {
  it('Should render the label correctly', () => {
    const label = 'Test Label';
    const { getByText } = render(<Button variant='primary' label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });

  //Test styles
  it('Should render with default styles', () => {
    const { container } = render(<Button variant='primary' label="Test Button" />);
    
    expect(container.firstChild).toHaveClass('btn');
  });

  it('Should render with outlined styles', () => {
    const { container } = render(<Button variant='primary' label="Test Button" hasOutline />);
    
    expect(container.firstChild).toHaveClass('btn-primary__outline');
  });

  it('Should render with shadow styles', () => {
    const { container } = render(<Button variant='primary' label="Test Button" hasShadow />);
    
    expect(container.firstChild).toHaveClass('btn-shadow');
  });
});