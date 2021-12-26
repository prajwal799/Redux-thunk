import { Route, Router, Routes } from "react-router"
import Github from "../pages/Github."
import Login from "../pages/Login"
import Registration from "../pages/Registration"

const AllRouter = () => {
    return(
        <>
        <Routes>

            <Route path="/" element={<Registration/>}>
                
            </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/github" element={<Github/>}></Route>
        </Routes>
       
        </>
    )
}
export default AllRouter