import React from 'react'
import {render} from '@testing-library/react'

import store from '../src/states/store.js';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";


const AllTheProviders = ({children}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
          </BrowserRouter>
        </Provider>
    )
  }

const customRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options})
  
// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}