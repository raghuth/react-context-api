import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LoginContext } from "./Contexts/LoginContext";

function Profile() {
  const { username } = useContext(LoginContext);
  return (
    <>
      <Grid container justifyContent="center">
        <h1>Profile</h1>
        <h1>Username : {username}</h1>
      </Grid>
    </>
  );
}

export default Profile;
