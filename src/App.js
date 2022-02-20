import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import PlanLayout from "./Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm/CodeConfirm";
import AllowNotificaions from "./pages/AllowNotificaions/AllowNotificaions";
import AppLayout from "./Layouts/AppLayout";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PlanLayout>
              <Welcome />
            </PlanLayout>
          }
        />
        <Route
          path="/invite"
          element={
            <PlanLayout>
              <PhoneConfirmation />
            </PlanLayout>
          }
        />
        <Route
          path="/code_confirm"
          element={
            <PlanLayout>
              <CodeConfirm />
            </PlanLayout>
          }
        />
        <Route
          path="/allow_notification"
          element={
            <PlanLayout>
              <AllowNotificaions />
            </PlanLayout>
          }
        />

        <Route
          path="/home"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />

        <Route
          path="/explore"
          element={
            <AppLayout>
              <Explore />
            </AppLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}
