import React from "react";
import PricingOption from "./PricingOption/PricingOption";
import { Container, Typography, Grid } from "@material-ui/core";

function Pricing() {
  return (
    <Container xs={12}>
      <Typography variant="h2" xs={12}>
        Pricing
      </Typography>
      <Grid container>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <PricingOption
            title="Monthly"
            price="$19"
            term="/ month"
            description="On sale now"
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <PricingOption
            title="Yearly"
            price="$199"
            term="/ year"
            description="Save 80% today"
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <PricingOption
            title="Lifetime"
            price="$9,999"
            term="/ life"
            description="On sale now"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pricing;
