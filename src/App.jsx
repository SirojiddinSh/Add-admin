import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./routes/admin/Admin";
import Users from "./routes/users/Users";
import Admins from "./routes/admins/Admins";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Admin />}>
                    <Route path="users" element={<Users />} />
                    <Route path="admins" element={<Admins />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
