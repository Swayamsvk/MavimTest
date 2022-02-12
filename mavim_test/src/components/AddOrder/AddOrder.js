import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@mui/material";

const AddOrder = (props) => {
  const navigate = useNavigate();
  const [addOrder, setAddOrder] = useState({
    Crust: "",
    Flavor: "",
    Size: "",
    Table_No: "",
  });
  const [incomplete, setIncomplete] = useState(false);

  const { Crust, Flavor, Size, Table_No } = addOrder;

  const onChange = (e) =>
    setAddOrder({ ...addOrder, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (Crust === "" || Flavor === "" || Size === "" || Table_No === "") {
      setIncomplete(true);
    } else {
      const Final = {
        Crust: Crust,
        Flavor: Flavor,
        Size: Size,
        Table_No: Table_No,
      };

      axios
        .post("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza", Final)
        .then((res) => {
          navigate("/pizzaorders");
        })
        .catch((error) => console.log(error));
    }
  };
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 350,
    margin: "20px auto",
    backgeoundColor: "black",
  };

  const btnstyle = { margin: "8px 0", fontWeight: "bold" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2 style={{ color: "#0096FF" }}>Add Order</h2>
          {incomplete ? (
            <p style={{ color: "#FF0000" }}>Fill all the blanks.</p>
          ) : (
            <div />
          )}
        </Grid>
        <form onSubmit={onSubmit}>
          <TextField
            type="text"
            placeholder="Crust"
            name="Crust"
            value={Crust}
            onChange={onChange}
            className="field"
            style={{ marginTop: "2%" }}
            fullWidth
          />

          <TextField
            type="text"
            placeholder="Flavor"
            name="Flavor"
            value={Flavor}
            onChange={onChange}
            className="field"
            style={{ marginTop: "2%" }}
            fullWidth
          />

          <TextField
            type="text"
            placeholder="Size"
            name="Size"
            value={Size}
            onChange={onChange}
            className="field"
            style={{ marginTop: "2%" }}
            fullWidth
          />

          <TextField
            type="text"
            placeholder="Table_No"
            name="Table_No"
            value={Table_No}
            onChange={onChange}
            className="field"
            style={{ marginTop: "2%" }}
            fullWidth
          />

          <br />
          <Button
            type="submit"
            value="Add"
            style={btnstyle}
            color="primary"
            variant="contained"
            fullWidth
          >
            Add Order
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddOrder;
