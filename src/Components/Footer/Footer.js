import React from "react";
import {
  Button,
  Card,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Facebook, GitHub, Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  messageForm: {
    margin: 15,
    width: "80%",
  },
  messageButton: {
    width: "100%",
  },
  companyInformation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  footer: {
    padding: theme.spacing(6),
    backgroundColor: "#282828",
    color: "white",
  },
  socialLink: {
    color: "white",
  },
}));

function Footer() {
  const { messageForm, messageButton, companyInformation, footer, socialLink } =
    useStyles();
  return (
    <footer className={footer} justify="center" lg={12}>
      <Grid container justify="center">
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Card>
            <form>
              <TextField label=" Get in touch " className={messageForm} />
            </form>
          </Card>
          <Button variant="contained" color="primary" className={messageButton}>
            Send Message
          </Button>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className={companyInformation}
        >
          <Typography variant="h5">AadiZee</Typography>
          <Typography>
            Building award-winning, affordable online courses since 2009.
          </Typography>
          <Grid item>
            <Icon>
              <a
                href="https://www.facebook.com/aadizee69/"
                target="_blank"
                rel="noreferrer"
                className={socialLink}
              >
                <Facebook />
              </a>
            </Icon>

            <Icon>
              <a
                href="https://www.instagram.com/aadizee/"
                target="_blank"
                rel="noreferrer"
                className={socialLink}
              >
                <Instagram />
              </a>
            </Icon>

            <Icon>
              <a
                href="https://twitter.com/AadiZee"
                target="_blank"
                rel="noreferrer"
                className={socialLink}
              >
                <Twitter />
              </a>
            </Icon>

            <Icon>
              <a
                href="https://github.com/AadiZee"
                target="_blank"
                rel="noreferrer"
                className={socialLink}
              >
                <GitHub />
              </a>
            </Icon>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
