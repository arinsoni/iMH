import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const InfoGrid = ({items}) => {
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

  const screenWidth = window.innerWidth;
  return (
    <ul style={{
      margin: 0,
      padding: 0
    }} >
      {items.map((item, index) => (
        <li key={index} style={{ listStyle: 'none' }}>
          <Box
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: 'relative',
              marginRight: isMobile ? '20px' : `${0.03* screenWidth}px`,
              marginLeft: isMobile ? '20px' : `${0.03 * screenWidth}px`,
            }}
          >
            <IconButton sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 10,
            }} >
              <ArrowOutwardIcon />
            </IconButton>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                borderTop: index === 0 ? '1px solid black' : '0px',
                borderBottom: '1px solid black',
                transition: 'border-top 0.3s, border-bottom 0.3s',
                
              }}
            >
              {hoveredIndex === index ? (
                <Box
                  sx={{
                    margin: 0,
                    paddingTop: '10px',
                    paddingBottom: '8px',
                    position: 'relative',
                    width: '20%',
                    maxHeight: '100%',
                    marginLeft: isMobile ? '0px' : `${0.02 * screenWidth}px`,
                  }}
                >
                  <img src={item.imageUrl} alt="" style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: '1s ease-in-out',
                  }} />
                </Box>
              ) : (
                ''
              )}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  transition: 'all 0.3s',
                  transition: 'all 0.3s',marginLeft: isMobile ? '0px' : `${0.02 * screenWidth}px`,

                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '8vw', sm: '8vw', md: '8vw', lg: '8vw', xl: '8vw' },
                    paddingLeft: hoveredIndex === index ? '5px' : '10px',
                    position: 'relative',
                    left: hoveredIndex === index ? '20px' : '-10px', 
                    transition: 'left 1s, padding-left 1s',
                  }}
                >
                  {item.resonanceText}
                </Box>
                <Box
                  sx={{
                    alignSelf: 'flex-end',
                    fontSize: { xs: '2vw', sm: '2vw', md: '1vw', lg: '1vw', xl: '1vw' },
                    paddingRight: '10px',
                    transition: 'font-size 0.3s',
                  }}
                >
                  {item.brandingText}
                </Box>
              </Box>
            </Box>
          </Box>
        </li>
      ))}
    </ul>
  );
};



export default InfoGrid;
