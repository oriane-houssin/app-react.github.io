import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Duck from "./Duck.jsx";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/duck" element={<Duck />} />
      </Routes>
    </main>
  );
}
