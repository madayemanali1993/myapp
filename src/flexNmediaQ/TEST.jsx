import { Box, InputLabel ,TextField} from "@mui/material";
import React from "react";
import './teststyle.css';

function TEST()
{
//  const styles = {
//     container: {
//       padding: '20px',
//       backgroundColor: 'lightblue',
//       width:'50vw',
//       height:'100vh' ,
//       border:'1px solid red',
//     },
//<div style={styles.container}>
//   };
    return(
        <Box className='container'>
        <Box id ='Box1'  className='box1'>
        <InputLabel>Name</InputLabel>
        <TextField  />
        <InputLabel>Age</InputLabel>
        <TextField />
        </Box>
        <Box id ='Box1' className='box2'>
        <InputLabel>Address</InputLabel>
        <div className="continer"></div>
        {/* .item*7 */}
        
        <TextField/>
        </Box>
        </Box>
        )
    
}
export default TEST;