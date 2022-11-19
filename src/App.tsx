import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import ProfileSettings from "./components/settings/ProfileSettings";
import AccountSettings from "./components/settings/AccountSettings";
import PayAndBillSettings from "./components/settings/PayAndBillSettings";
import PasswordSettings from "./components/settings/PasswordSettings";
import Footer from "./components/Footer";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            {/* All protected Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/settings/profile"
              element={
                <ProtectedRoutes>
                  <ProfileSettings />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/settings/account"
              element={
                <ProtectedRoutes>
                  <AccountSettings />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/settings/password"
              element={
                <ProtectedRoutes>
                  <PasswordSettings />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/settings/plan_and_bill"
              element={
                <ProtectedRoutes>
                  <PayAndBillSettings />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
