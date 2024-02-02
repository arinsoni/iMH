import React from "react"
import Projects from "./Pages/Projects";
import Capabilities from "./Components/Capabilities";
import Work from "./Pages/Work";
import { Box } from "@mui/material";
import { boxPadding } from "./theme";
import Initiatives from "./Pages/Initiatives";

const HomePage = () => {
  return(
    <>
    <Projects/>
    <Capabilities/>
    <Box sx={{ 
      padding: boxPadding
    }} >

    </Box>
    <Work/>
    <Initiatives/>
    </>
  );
}

export default HomePage