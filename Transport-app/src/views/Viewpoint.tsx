
import { Route,Routes } from "react-router-dom"
import MainLayout from "./MainLayout"
import Layout from "./Layout"
import Users from "./Users/User"
import LoadingBaysTable from "./Loading Bay/loadingBays"
import TripHistory from "./Driver/DriverTrip"
import Claims from "./Claims/Claims"

export default function Viewpoint() {
  return (
    <>

    <Layout>
      <Routes>
        <Route path="/Vehicle" element = {<MainLayout/>}/>
        <Route path="/users" element = {<Users/>}/>
        <Route path="/loadingBay" element = {<LoadingBaysTable/>}/>
        <Route path="/DriverTrip" element = {<TripHistory/>}/>
        <Route path="/Claim" element = {<Claims/>}/>
       
        
    
      </Routes>
    
    </Layout>
    </>

  )
}



