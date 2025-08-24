import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Signuppage from "./Pages/signuppage";
import Loginpage from "./Pages/Loginpage";
import Settingpage from "./Pages/Settingpage";
import Profilepage from "./Pages/Profilepage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

const App = () => {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);  

  console.log("Auth User:", authUser);
  if (isCheckingAuth && !authUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ?<Homepage /> : <Navigate to = "/login" />} />
        <Route path="/signup" element={!authUser ?<Signuppage /> : <Navigate to="/"/>} />
        <Route path="/login" element={!authUser ? <Loginpage /> : <Navigate to= "/"/>} />
        <Route path="/settings" element={<Settingpage />} />
        <Route path="/profile" element={authUser ? <Profilepage /> : <Navigate to ="/login"/> } />
      </Routes>
    </div>
  );
};

export default App;
