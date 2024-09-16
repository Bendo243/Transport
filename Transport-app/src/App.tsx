import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Viewpoint from './views/Viewpoint'
import Users from './views/Users'
import { ConfigProvider } from 'antd'


function App() {
 
  return (
   < ConfigProvider theme={{token:{colorPrimary:'#FF742C'}}}>
        <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Viewpoint/>}/> 
          
          <Route path="/us" element={<Users/>}/> 
          
        </Routes>
        </BrowserRouter>
        </ConfigProvider>
  )
}

export default App
