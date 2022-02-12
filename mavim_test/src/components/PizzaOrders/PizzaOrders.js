import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function PizzaOrders(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const btnstyle = {
    width: "30px",
    height: "20px",
    marginTop: "2%",
    marginBottom: "2%",
    fontWeight: "bold",
    fontSize: 10,
  };

  const maintextstyle = {
    fontSize: 30,
    color: "#0047AB",
    fontWeight: "bold",
  };

  const maincontentstyle = {
    marginLeft: "1%",
    marginTop: "1%",
    marginRight: "1%",
  };

  const secondarytextstyle = {
    fontSize: 30,
    color: "#0047AB",
  };

  const appbarstyle = {
    marginTop: "-10px",
    marginLeft: "-8px",
    marginRight: "-8px",
  };

  useEffect(() => {
    axios
      .get("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza")
      .then((response) => {
        console.log(response.data, "this is the data");
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = () => {
    navigate("/addpizza");
  };
  const logout = () => {
    navigate("/");
  };

  const cancelOrder = (id) => {
    axios
      .delete("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/" + id)
      .then((res) => console.log(res.data));
    setData(data.filter((el) => el.id !== id));
  };

  return (
    <div>
      <div style={appbarstyle}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              align="center"
              sx={{ flexGrow: 1 }}
              style={{ fontWeight: "bold" }}
            >
              Pizza Orders
            </Typography>
            <Button
              color="inherit"
              size="large"
              style={{ fontWeight: "bold" }}
              onClick={() => handleClick(data)}
            >
              Add
            </Button>
            <Button
              color="inherit"
              size="large"
              style={{ fontWeight: "bold" }}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <div style={maincontentstyle}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Size&nbsp;(g)</TableCell>
                <TableCell align="center">Flavour&nbsp;(g)</TableCell>
                <TableCell align="center">Crust&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((curData, id) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {curData.id}
                  </TableCell>
                  <TableCell align="center">{curData.Size}</TableCell>
                  <TableCell align="center">{curData.Flavor}</TableCell>
                  <TableCell align="center">{curData.Crust}</TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    onClick={() => {
                      cancelOrder(curData.id);
                    }}
                  >
                    Cancel
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default PizzaOrders;
