import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                textAlign: 'center',
                p: 2,
                "& h4 ": {
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: "2rem"
                },
                "& p": {
                    textAlign: "justify"
                },
                "@media(max-width:600px)":{
                    mt:0,
                    "& h4 ": {
                       
                        my: 2,
                        fontSize: "1.5rem"
                    },
                }
                
            }}>
                <Typography variant='h4'>

                    Welcome To my Restaurant
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quam itaque iusto, a quaerat nobis quos id impedit culpa libero architecto doloremque soluta dolorum sint. Sint aperiam possimus ad nam?
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quam itaque iusto, a quaerat nobis quos id impedit culpa libero architecto doloremque soluta dolorum sint. Sint aperiam possimus ad nam?
                </p>
            </Box>
        </Layout>
    )
}

export default About