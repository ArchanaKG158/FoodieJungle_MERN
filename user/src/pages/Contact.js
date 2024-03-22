import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5,
        ml:10,
        "& h4 ": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"
        },

      }}><Typography variant='h4'>Contact  my restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quam itaque iusto, a quaerat nobis quos id impedit culpa libero architecto doloremque soluta dolorum sint. Sint aperiam possimus ad nam?
        </p>
      </Box>
      <Box  sx={{m:3,width:"600px", ml:10, "@media (max-width:600px)":
      {width:"300px",}
      
      }}>
        <TableContainer  component={Paper}>
             <Table aria-label="contact table">
             <TableHead>
              <TableRow>
                <TableCell  sx={{bgcolor:'black',color:'white'}}  align="center">
                Contact details  
                </TableCell>

              </TableRow>
             </TableHead>
             <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon  sx={{color:'red',pt:1}}/> 1800-00-0000  (tollfree)
                </TableCell>
               
              </TableRow>
              <TableRow>
               
                <TableCell>
                <EmailIcon  sx={{color:'skyblue',pt:1}}/> help@myrest.com
                </TableCell>
               
              </TableRow>
              <TableRow>
               
               <TableCell>
               <CallTwoToneIcon  sx={{color:'skyblue',pt:1}}/>123456789
               </TableCell>
              
             </TableRow>

             </TableBody>
             </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact