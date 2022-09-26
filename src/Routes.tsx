import Page  from "./paginas/Page" 
import Login from "./paginas/Login"
import { BrowserRouter as Router,
         Routes,
         Route } from "react-router-dom";

export function AppRoutes() {
    return (
        <Router> 
           <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/login" 
                element={
                <Page />
                // <h1>Teste</h1>
                } />
           </Routes>
        </Router>
    )
}