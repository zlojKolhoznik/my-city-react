import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Olexandria from "./Olexandria";
import Sights from "./Sights";
import Photos from "./Photos";
import BigImage from "./BigImage";
import AddPhoto from "./AddPhoto";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/olexandria" element={<Olexandria />} />
                <Route path="/sights" element={<Sights />} />
                <Route path="/photos" element={<Photos />}>
                    <Route path=":id" element={<BigImage />} />
                </Route>
                <Route path="/add-photo" element={<AddPhoto />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;

