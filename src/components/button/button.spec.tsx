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
    
    expect(container.firstChild).toHaveClass('font-sans rounded-md text-white font-semibold py-2 px-2');
  });

  it('Should render with outlined styles', () => {
    const { container } = render(<Button variant='primary' label="Test Button" outlined />);
    
    expect(container.firstChild).toHaveClass('border-2 border-primary bg-transparent text-primary');
  });

  it('Should render with shadow styles', () => {
    const { container } = render(<Button variant='primary' label="Test Button" shadow />);
    
    expect(container.firstChild).toHaveClass('shadow-md');
  });

  it('Should render with hover styles', () => {
    const { container } = render(<Button label="Test Button" variant="primary" />);
    
    expect(container.firstChild).toHaveClass('hover:bg-primary/80 hover:duration-200');
  });

  it('Should render with outlined hover styles', () => {
    const { container } = render(<Button label="Test Button" outlined variant="primary" />);
    
    expect(container.firstChild).toHaveClass('hover:bg-primary hover:duration-200 hover:text-white');
  });
});