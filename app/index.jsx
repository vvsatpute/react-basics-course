import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Nav =  React.lazy(() => import("./components/Nav"));
const Popular = React.lazy(() => import("./components/Popular"));
const Battle  = React.lazy(() => import("./components/Battle"));

const App = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : "light");
    }
    return (


        <Router>
            <div className={theme}>
                <div className="container">
                    <Nav theme={theme} toggleTheme={toggleTheme}/>
                    <React.Suspense>
                        <Routes>
                            <Route path="/" element={<Popular/>}/>
                            <Route path="/battle" element={<Battle/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        </Router>
    );
};

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);
