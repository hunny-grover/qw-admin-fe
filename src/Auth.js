import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Navigate } from "react-router-dom";


export default function SignUp(props) {
    const { user } = localStorage.getItem("user");

    return (
        <>
            {user ?
                <Navigate to="/portal" />
            :
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <small>QW</small>
                        </Avatar>
                        {props.children}
                    </Box>
                </Container>
            }
        </>
    );
}