import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Auth from "./Pages/Auth";
import { checkAuth } from "./store/slices/authSlice";
import { AppDispatch, RootState } from "./store/Store";
import AuthPageProtection from "./components/shared/AuthPageProtection";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Loading from "./components/shared/Loading";

function App() {
  const {globalLoading } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      dispatch(checkAuth());
  }, []);

  if (globalLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen bg-gradient-to-t from-[#accbee] to-[#e7f0fd] ">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Auth"
          element={
            <AuthPageProtection>
              <Auth />
            </AuthPageProtection>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
