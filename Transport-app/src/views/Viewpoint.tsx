
import { Route,Routes } from "react-router-dom"
import MainLayout from "./MainLayout"

import Layout from "./Layout"
import Users from "./Users"

export default function Viewpoint() {
  return (
    <>

    <Layout>
      <Routes>
        <Route path="/Vehicle" element = {<MainLayout/>}/>
        <Route path="/users" element = {<Users/>}/>
        
    
      </Routes>
    
    </Layout>
    </>

  )
}



