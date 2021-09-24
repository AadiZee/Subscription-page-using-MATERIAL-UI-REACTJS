import React from "react";
import { Container, Typography, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: 50,
  },
}));

function GridItem(props) {
  const { gridItem } = useStyles();
  return (
    <Container align="left" className={gridItem}>
      <Icon>{props.icon}</Icon>
      <Typography variant="h4">{props.title}</Typography>
      <Typography>{props.description}</Typography>
    </Container>
  );
}

export default GridItem;
