import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import nvai from '../static/images/nvai.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InfoGrid from "../Components/InfoGrid";
import { h2 } from "../theme";


const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const items = [
    {
      imageUrl: nvai,
      resonanceText: 'NV.Ai Motion',
      brandingText: 'Branding Line 1',
    },
    {
      imageUrl: nvai,
      resonanceText: 'Resonance',
      brandingText: 'Branding Line 2',
    },
    {
      imageUrl: nvai,
      resonanceText: 'Physics wallah',
      brandingText: 'Branding Line 2',
    }
  ];

  const screenWidth = window.innerWidth;

  return (
    <>
      <Box sx={{
        fontSize: h2,
        marginLeft: isMobile ? '20px' : `${0.03 * screenWidth}px`,
        marginBottom: { xs: '3vw', sm: '2vw', md: '2vw', lg: '2vw', xl: '2vw' }
      }} >
        Selected Projects
      </Box>
      <InfoGrid items={items} />

    </>

  );
};



export default Projects;
