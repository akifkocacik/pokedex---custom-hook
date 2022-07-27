// COMPONENTS
import { HomePage, PokemonPage } from "./pages";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
