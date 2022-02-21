import React, { useContext } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { LoginContext } from "./Contexts/LoginContext";

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6} style={{ display: "grid" }}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            placeholder="Username"
            style={{ marginTop: 24 }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Password"
            required
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{ marginTop: 24 }}
            onClick={() => {
              // if (setUsername.trim().length === 0) return;
              setShowProfile(true);
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
