import React from "react";
import { Button, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pricingCard: {
    padding: 70,
    margin: 50,
    borderColor: "darkorange",
    "&:hover": {
      background: "orange",
      //boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
      boxShadow: "0 0 2em 0px rgba(0, 0, 0, 0.4)",
      transform: "scale(1.01)",
      borderColor: "white",
    },
  },
  pricingButton: {
    marginTop: 20,
    fontSize: 20,
  },
}));

function PricingOption(props) {
  const { pricingCard, pricingButton } = useStyles();
  return (
    <Card className={pricingCard} variant="outlined">
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="h4">{props.price}</Typography>
      <Typography variant="h7">{props.term}</Typography>
      <Typography variant="h6">{props.description}</Typography>
      <Button color="primary" variant="contained" className={pricingButton}>
        {" "}
        Buy Now{" "}
      </Button>
    </Card>
  );
}

export default PricingOption;
