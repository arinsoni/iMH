import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import nvai from '../static/images/nvai.png';
import { boxPadding, normalText, textPadding } from '../theme';


const Capabilities = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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

  const items = [
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences.',
    },
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences'
    },
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences.',
    },
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences.',
    },
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences'
    },
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences.',
    },
    {
      imageUrl: nvai,
      projectTitle: 'Mentor as an AI Avatar',
      desc: 'Our platform employs AI-driven guidance to offer personalized academic and career advice. It utilizes data analytics to tailor learning paths and provides adaptive recommendations based on the student\'s performance and preferences.',
    },
  ];

  return (
    <div style={{ textAlign: 'center', }}>
      <ul style={{
        margin: 0,
        padding: 0
      }} >
        <Box sx={{
          fontSize: { xs: '3vw', sm: '2vw', md: '2vw', lg: '2vw', xl: '2vw' },
          marginBottom: { xs: '3vw', sm: '2vw', md: '2vw', lg: '2vw', xl: '2vw' },
          paddingTop: boxPadding,
        }}>
          Capabilities
        </Box>

        <Box sx={{
          display: 'grid',
          gap: '20px',
          padding: '20px',
          gridTemplateColumns: {
            xs: 'repeat(auto-fit, minmax(100%, 1fr))', // screens smaller than 600px
            sm: 'repeat(auto-fit, minmax(calc(50% - 20px), 1fr))', // screens larger than 600px and smaller than 1200px
            md: 'repeat(auto-fit, minmax(calc(33% - 20px), 1fr))', // screens larger than 1200px
          }
        }}>      {items.map((item, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            <Box sx={{
              paddingRight: isMobile ? '0' : '60px',
              paddingLeft: isMobile ? '0' : '60px',
              textAlign: 'left',
              height: '100%'
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                height: '70%'
              }}>
                <img
                  src={item.imageUrl}
                  alt=""
                  style={{
                    maxWidth: isMobile ? '100%' : '80%',
                    height: !isMobile ?? '70%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
              <Box sx={{
                fontWeight: '600',
                fontSize: { xs: '3vw', sm: '2vw', md: '1vw', lg: '1vw', xl: '1vw' },
                paddingTop: textPadding,
              }} >
                0{index + 1}
              </Box>
              <Box sx={{
                fontSize: { xs: '3vw', sm: '2vw', md: '1vw', lg: '1vw', xl: '1vw' },
                paddingBottom: textPadding,
                
                paddingTop: '20px',
                fontWeight: '600'
              }} >
                {item.projectTitle}
              </Box>
              <Box sx={{
                fontSize: normalText,
                width: '80%',
                marginRght: '80px'
              }} >
                {item.desc}
              </Box>
            </Box>
          </li>
        ))}
        </Box>
      </ul>
    </div>
  );
};

export default Capabilities;
