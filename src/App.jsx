// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext.jsx";
import AppRoutes from "@/Routes.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
