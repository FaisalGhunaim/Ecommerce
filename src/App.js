import Header from "./containers/Header";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductListiing from "./containers/ProductListiing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ProductListiing />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
