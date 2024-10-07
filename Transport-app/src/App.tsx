import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Viewpoint from './views/Viewpoint'
import { ConfigProvider } from 'antd'
import LoginPage from './views/AUTHENTICATION/LoginPage'
import ResetPassword from './views/AUTHENTICATION/ResetPassword'

function App() {
 
  return (
   < ConfigProvider theme={{token:{colorPrimary:'#FF742C'}}}>
        <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Viewpoint/>}/> 
          <Route path="/LoginPage" element={<LoginPage/>}/> 
          <Route path="/ResetPassword" element={<ResetPassword/>}/> 
          
          
          
        </Routes>
        </BrowserRouter>
        </ConfigProvider>
  )
}

export default App
