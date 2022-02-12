import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AddPizza.css";
import { useNavigate } from "react-router-dom";

const AddPizza = (props) => {
  const navigate = useNavigate();
  const [addPizza, setAddPizza] = useState({
    Crust: "",
    Flavor: "",
    Size: "",
    Table_No: "",
  });

  const { Crust, Flavor, Size, Table_No } = addPizza;

  const onChange = (e) =>
    setAddPizza({ ...addPizza, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const Final = {
      Crust: Crust,
      Flavor: Flavor,
      Size: Size,
      Table_No: Table_No,
    };

    console.log(Final);

    axios
      .post("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza", Final)
      .then((res) => {
        console.log(res.data);
        navigate("/pizzaorders");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Crust"
        name="Crust"
        value={Crust}
        onChange={onChange}
        className="field"
      />
      <input
        type="text"
        placeholder="Flavor"
        name="Flavor"
        value={Flavor}
        onChange={onChange}
        className="field"
      />
      <input
        type="text"
        placeholder="Size"
        name="Size"
        value={Size}
        onChange={onChange}
        className="field"
      />
      <input
        type="text"
        placeholder="Table_No"
        name="Table_No"
        value={Table_No}
        onChange={onChange}
        className="field"
      />
      <br />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddPizza;
