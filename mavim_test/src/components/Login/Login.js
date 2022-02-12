import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#DCDCDC";
  }, []);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (username === "test" && password === "test") {
      navigate("/pizzaorders");
    } else {
      setError(true);
    }
  };

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
    backgeoundColor: "black",
  };

  const btnstyle = { margin: "8px 0", fontWeight: "bold" };

  const appbarstyle = {
    marginTop: "-10px",
    marginLeft: "-8px",
    marginRight: "-8px",
  };

  return (
    <Grid>
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
              Login
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2 style={{ color: "#0096FF" }}>Sign In</h2>
          {error ? (
            <p style={{ color: "#FF0000" }}>Incorrect Details</p>
          ) : (
            <div />
          )}
        </Grid>

        <form onSubmit={onSubmit}>
          <TextField
            placeholder="User Name"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            style={{ marginTop: "2%" }}
            fullWidth
            required
          />

          <TextField
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            style={{ marginTop: "2%" }}
            fullWidth
          />

          <Button
            value="Login"
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
