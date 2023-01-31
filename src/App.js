import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProivder } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProivder>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            {/*-------------------------------------------------------------------------- */}

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />{" "}
                {/**if types random info */}
              </Routes>
            </main>
            {/*--------------------------------------------------------------------------*/}
            <Footer />
          </div>
        </Router>
      </AlertProivder>
    </GithubProvider>
  );
}

export default App;
