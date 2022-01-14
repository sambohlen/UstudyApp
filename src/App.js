import React from "react";
import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import './App.css'

import MobileNavbar from "./Components/MobileNavbar";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/404page";

import Dash from "./Views/Dash";
import Edit from "./Views/Edit";
import Join from "./Views/Join";
import Login from "./Views/Login";
import Timer from "./Views/Timer";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import CreateProject from "./Views/CreateProject";



//Navbar Responsiveness
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileNavbar /> : <Navbar />
}; 

function App() {


  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
        <UserAuthContextProvider>
         <Routes>   
          <Route 
           path="/" 
           element={
            <ProtectedRoute>
              <Dash/>
            </ProtectedRoute>
           } 
          />
          <Route 
           path="/dash" 
           element={
            <ProtectedRoute>
              <Dash/>
            </ProtectedRoute>
           } 
          />
          <Route 
           path="/createproject" 
           element={
            <ProtectedRoute>
              <CreateProject/>
            </ProtectedRoute>
           } 
          />
          <Route 
           path="/edit" 
           element={
            <ProtectedRoute>
              <Edit/>
            </ProtectedRoute>
           } 
          />
          <Route 
           path='/timer' 
           element={
            <ProtectedRoute>
            <Timer />
          </ProtectedRoute>
          }
          />
          <Route 
          path='/login' 
          element={<Login/>} 
          />
          <Route 
          path='/join' 
          element={<Join/>} 
          />
          <Route 
          path="*"
          element={<NotFound />}
          />
         </Routes>
        </UserAuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
