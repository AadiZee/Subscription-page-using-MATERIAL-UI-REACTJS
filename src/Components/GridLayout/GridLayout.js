import React from "react";
import MainGridItem from "./MainGridItem/MainGridItem";
import ProductInformation from "../ProductInformation/ProductInformation";
import Pricing from "../Pricing/Pricing";
import Footer from "../Footer/Footer";
import { Grid } from "@material-ui/core";

function GridLayout() {
  return (
    <Grid container xs={12}>
      <Grid item>
        <MainGridItem />
      </Grid>
      <Grid item>
        <ProductInformation />
      </Grid>
      <Grid item>
        <Pricing />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default GridLayout;
