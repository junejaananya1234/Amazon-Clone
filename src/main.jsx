import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchProvider } from './Context/Data/SearchContext.jsx'
import { store } from "./redux/Store.js"
import { Provider } from "react-redux"
import { DisplayProvider } from './Context/Data/DisplayContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <SearchProvider>
    <DisplayProvider>
    <App />
    </DisplayProvider>
    </SearchProvider>
    </Provider>
   
   
  
)
