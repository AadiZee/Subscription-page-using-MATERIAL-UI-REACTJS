import React from "react";
import {
  Container,
  Card,
  Typography,
  Button,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300,
  },
  mainItem: {
    padding: theme.spacing(8),
    textAlign: "left",
  },
  mainContainer: {
    paddingTop: 120,
    paddingBottom: 120,
    backgroundColor: "darkorange",
  },
  imageCard: {
    margin: 40,
  },
}));

function MainGridItem() {
  const { cardMedia, mainItem, mainContainer, imageCard } = useStyles();
  return (
    <Container className={mainContainer}>
      <Card>
        <Grid container>
          <Grid item md={6} className={mainItem}>
            <Typography variant="h1">Unlimited Subscription</Typography>
            <Typography>2,000 hours of online courses.</Typography>
            <Button color="primary" variant="contained">
              SIGN UP
            </Button>
          </Grid>
          <Grid item md={6}>
            <Card className={imageCard}>
              <CardMedia
                className={cardMedia}
                image="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default MainGridItem;
