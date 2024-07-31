import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./routes/admin/Admin";
import Users from "./routes/users/Users";
import Admins from "./routes/admins/Admins";

function App() {
    return (
        <>
            {/* {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                data?.map((worker) => (
                    <div>
                        <img src={worker.avatar} alt="" />
                        <h3>{worker.name}</h3>
                        <p>{worker.salary}</p>
                    </div>
                ))
            )} */}
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
