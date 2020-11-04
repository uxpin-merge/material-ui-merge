import * as React from "react";
import Grid from "../Grid";
import Button from "../../Button/Button";

export default (
  <Grid container spacing={24} uxpId="1">
    <Grid item xs={3} uxpId="1.1">
      <Button
        uxpId="1.1.1"
        size="medium"
        variant="outlined"
        color="primary"
        fullWidth>
        3 cols
      </Button>
    </Grid>
    <Grid item xs={3} uxpId="1.2">
      <Button
        uxpId="1.2.1"
        size="medium"
        variant="outlined"
        color="primary"
        fullWidth>
        3 cols
      </Button>
    </Grid>
    <Grid item xs={3} uxpId="1.3">
      <Button
        uxpId="1.3.1"
        size="medium"
        variant="outlined"
        color="primary"
        fullWidth>
        3 cols
      </Button>
    </Grid>
    <Grid item xs={3} uxpId="1.4">
      <Button
        uxpId="1.4.1"
        size="medium"
        variant="outlined"
        color="primary"
        fullWidth>
        3 cols
      </Button>
    </Grid>
    <Grid item xs={8} uxpId="1.5">
      <Button
        uxpId="1.5.1"
        size="medium"
        variant="outlined"
        color="primary"
        fullWidth>
        8 cols
      </Button>
    </Grid>
    <Grid item xs={4} uxpId="1.6">
      <Button
        uxpId="1.6.1"
        size="medium"
        variant="outlined"
        color="primary"
        fullWidth>
        4 cols
      </Button>
    </Grid>
  </Grid>
);
