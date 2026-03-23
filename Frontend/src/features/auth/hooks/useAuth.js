import { useDispatch } from "react-redux";
import { Register, Login, getMe } from "../services/auth.api"; // Backend Api Calls
import { setUser, setLoading, setError } from "../services/auth.slice"; // State manage karne ke liye

export function useAuth() {
  // disptach matlab jho event hai usko trigger karna and uski state change karna
  const dispatch = useDispatch();

  async function handleRegister({ email, username, password }) {
    try {
      dispatch(setLoading(true));
      // Register api call
      const data = await Register({ email, username, password });
    } catch (error) {
      dispatch(
        setError(error.response?.data?.message || "Registration Failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleLogin({ email, password }) {
    try {
      dispatch(setLoading(true));
      // Login Api call and jho bhi user login karega uska data setUser me jayega
      const data = await Login({ email, password });
      dispatch(setUser(data.user));
    } catch (error) {
      dispatch(setError(error.response?.data?.message || "Login Failed"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleGetMe() {
    try {
      dispatch(setLoading(true));
      // getMe Api call
      const data = await getMe();
      dispatch(setUser(data.user));
    } catch (error) {
      dispatch(
        setError(error.response?.data?.message || "Unauthorized Access "),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }

  // Jho useAuth function hai vo return karta hai jho bhi function uske aandar create hue honge
  return { handleGetMe, handleLogin, handleRegister };
}
