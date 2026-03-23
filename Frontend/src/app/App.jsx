import { useEffect } from "react";
import { router } from "./app.routes";
import { RouterProvider } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const App = () => {
  const auth = useAuth();

  // Run after render - jab bhi application render hoga handleGetMe call hoga 
  useEffect(() => {
    auth.handleGetMe();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
