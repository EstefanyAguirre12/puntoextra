import { describe } from 'vitest'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => { 
  test('should render', () => {
    render(<App />);
  });
  it('should have title "Mi DUI es valido?"', () => { 
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Mi DUI es valido?')
  })
  it('should have an input text', () => { 
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('should have a button with text "Validar"', () => {
    render(<App />);
    expect(screen.getByRole('button')).toHaveTextContent('Validar')
  })
  it('should have a placeholder with text "000000000"', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', '000000000')
  })
})
