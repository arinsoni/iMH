import React, { useEffect, useState } from 'react';
import { Box, IconButton, MobileStepper, Typography, boxClasses } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import sample from "../static/images/sample.png"
import nvai from "../static/images/nvai.png"
import logo from "../static/images/logo.png"
import { boxPadding, h2, h3, h4, } from '../theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';

const images = [
  sample,
  nvai,
  logo,
];

const Initiatives = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    // Call handleResize immediately to set the initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length; // The length of your images array

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (


    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: isMobile ? '20px' : '60px',
      }}
    >


      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',

      }} >


        <Box
          sx={{
            width: isMobile ? '100%' : '50%',
            height: '100%',


          }}
        >
          <img
            src={images[activeStep]}
            alt={`Slide ${activeStep}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>





        <Box
          sx={{
            width: isMobile ? '100%' : '30%',
            height: '30%',

            alignSelf: isMobile ? 'flex-start' : 'flex-end'
          }}
        >
          <Box sx={{ paddingBottom: '10px' }}>
            {isMobile ?  <h3 style={{
              fontWeight: '400',
            }}>
              IKEA U.S. takes equity, diversity, and inclusion to the next level
            </h3> :<h1 style={{
              fontWeight: '400',
            }}>
              IKEA U.S. takes equity, diversity, and inclusion to the next level
            </h1> }
            

          </Box>
          <Box sx={{ paddingBottom: '10px' }}>
             {isMobile ?   <h4 style={{
              fontWeight: '400',
            }}>
              To support its ED&I vision, the furniture retailer has launched new policies and mentorship programs that are backed by data and replicable around the world.
            </h4>  :
            <h2 style={{
              fontWeight: '400',
            }}>
              To support its ED&I vision, the furniture retailer has launched new policies and mentorship programs that are backed by data and replicable around the world.
            </h2>
}
          </Box>
          <Box >
            <h4 style={{
              fontWeight: '400',
            }}>
              Read more
            </h4></Box>
        </Box>
      </Box>



      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{
          paddingLeft: '40px',
          paddingTop: boxPadding
        }} >

          <IconButton
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              zIndex: 1,
              color: 'black'
            }}

          >
            <ArrowBackIcon sx={{ fontSize: '3rem' }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              zIndex: 1,
              color: 'black',
            }}
          >
            <EastIcon sx={{ fontSize: '3rem' }} />
          </IconButton>



        </Box>
        <Box sx={{
          paddingTop: boxPadding
        }} >
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              width: '100%',
              background: 'transparent',
              '& .MuiMobileStepper-dot': {
                borderRadius: '0', // this removes the round corners making the dot square
                width: '10px', // width of the square dot
                height: '10px', // height of the square dot
              },
              '& .MuiMobileStepper-dotActive': {
                background: 'primary.main', // Color of the active dot (use your theme's primary color)
              },
            }}
          />


        </Box>

        {/* Progress Indicator */}

      </Box>

    </Box>



  );
};

export default Initiatives;
