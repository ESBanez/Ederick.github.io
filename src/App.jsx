import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Skills from "./pages/Skills";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";

import CurriculumVitae from "./pages/settings/CurriculumVitae";
import Profile from "./pages/settings/Profile";
import Projects from "./pages/settings/Projects";



import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#040D12', // Replace '#f00' with your desired color value
    },
  },
})


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <br/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
