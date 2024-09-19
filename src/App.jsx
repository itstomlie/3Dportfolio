import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/Blogs/BlogList.jsx";
import BlogDetail from "./components/Blogs/BlogDetail";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
