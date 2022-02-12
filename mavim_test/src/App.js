import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPizza from "./components/AddPizza/AddPizza";
import Login from "./components/Login/Login";
import PizzaOrders from "./components/PizzaOrders/PizzaOrders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pizzaorders" element={<PizzaOrders />} />
          <Route path="/addpizza" element={<AddPizza />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
