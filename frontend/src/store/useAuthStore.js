import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data.user, isCheckingAuth: false });
    } catch (err) {
      console.error("❌ Auth check failed:", err);
      set({ authUser: null, isCheckingAuth: false });
    }
  },


  signup: async (data) => {
    try {
      set({ isSigningUp: true });
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data.user, isSigningUp: false });
      return res.data;
    } catch (err) {
      console.error("❌ Signup failed:", err);
      set({ isSigningUp: false });
      throw err.response?.data || { message: "Signup error" };
    }
  },

  login: async (data) => {
    try {
      set({ isLoggingIn: true });
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data.user, isLoggingIn: false });
      return res.data;
    } catch (err) {
      console.error("❌ Login failed:", err);
      set({ isLoggingIn: false });
      throw err.response?.data || { message: "Login error" };
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
    } catch (err) {
      console.error("❌ Logout failed:", err);
    }
  },
}));
