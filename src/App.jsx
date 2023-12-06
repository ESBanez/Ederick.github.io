import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Skills from "./pages/Skills";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

import CurriculumVitae from "./pages/settings/CurriculumVitae";
import MyTeam from "./pages/settings/Profile";
import Projects from "./pages/settings/Projects";
import "./sass/App.scss";

import { ThemeProvider, createTheme } from '@mui/material/styles';
// import BeginTour from "./components/BeginTour";

const theme = createTheme({
  palette: {
    primary: {
      main: '#040D12', // Replace '#f00' with your desired color value
    },
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Navbar />
          {/* <BeginTour /> */}
          <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
                <Route path="/MyTeam" element={<MyTeam />} />
                <Route path="/projects" element={<Projects />} />
                <Route component={NotFound} /> {/* A catch-all route */}
              </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;