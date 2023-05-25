import Search from '@/app/components/navbar/Search'

import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Search component',()=>{

  test('render',()=>{
    render(<Search/>)
    const divElement1 = screen.getByText(/Anywhere/i);
    const divElement2 = screen.getByText(/Any Week/i);
    const divElement3 = screen.getByText(/Add Guest/i);
    expect(divElement1).toBeInTheDocument()
    expect(divElement2).toBeInTheDocument()
    expect(divElement3).toBeInTheDocument()
  })
})