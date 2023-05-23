import { render, fireEvent, screen } from "@testing-library/react"

import App from './App'

//test block
test('find a text', () => {
    render(<App />)
    
    let myApp=screen.getByTestId("app")
// 
    fireEvent.click
})