import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"


export const Approuter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={ <AuthRoutes/>}>

            </Route>
        </Routes>
    )
}

export default Approuter
