import * as React from 'react';
import Box from '@mui/material/Box';
import MediaCard from '../UI/MediaCard';


export default function ResponsiveGrid() {
  return (
    <Box sx={{ width: '80vw',height: '80vh' ,margin: '10px'}}>
      <MediaCard/>
    </Box>
  );
}
