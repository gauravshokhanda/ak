import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Netflix from "../images/Netflix.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';

const Resume = () => {
  return (
    <div className="main-bg">
      <Grid container>
        <Grid item xs={12} sm={12} md={2}>
          <Box sx={{ m: 2, height: "60px" }}>
            <img
              alt="Netflix"
              src={Netflix}
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
      <Button variant="text" sx={{ color: 'white', fontSize: '10px', textTransform: 'none' ,mr:2  }}>
        <LocalPhoneIcon sx={{ fontSize: 'small', marginRight: '0.5em', color: 'red' }} />
        +917017684236
      </Button>
      <Button variant="text" sx={{ color: 'white', fontSize: '10px', textTransform: 'none' ,mr:2 }}>
        <AddLocationIcon sx={{ fontSize: 'small', marginRight: '0.5em', color: 'red' }} />
        Noida UP
      </Button>
      <Button variant="text" sx={{ color: 'white', fontSize: '10px', textTransform: 'none' ,mr:2 }}>
        <LinkedInIcon sx={{ fontSize: 'small', marginRight: '0.5em', color: 'red' }} />
        LinkedIn
      </Button>
      <Button variant="text" sx={{ color: 'white', fontSize: '10px', textTransform: 'none' ,mr:2 }}>
        <GitHubIcon sx={{ fontSize: 'small', marginRight: '0.5em', color: 'red' }} />
        Github
      </Button>
      <Button variant="text" sx={{ color: 'white', fontSize: '10px', textTransform: 'none' ,mr:2 }}>
        <MailIcon sx={{ fontSize: 'small', marginRight: '0.5em', color: 'red' }} />
        Mail
      </Button>
    </Box>

        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
