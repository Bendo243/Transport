import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Viewpoint from './views/Viewpoint'

import { ConfigProvider } from 'antd'


function App() {
 
  return (
   < ConfigProvider theme={{token:{colorPrimary:'#FF742C'}}}>
        <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Viewpoint/>}/> 
          
          
          
        </Routes>
        </BrowserRouter>
        </ConfigProvider>
  )
}

export default App
