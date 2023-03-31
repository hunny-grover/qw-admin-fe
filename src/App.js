import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Auth from './Auth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Portal from './Portal';

const ProtectedRoute = ({ children }) => {
    const { user } = localStorage.getItem("user");
    return !user ? <Navigate to="/auth/signin" /> : children;
};

const theme = createTheme();

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/signin" element={<Auth><SignIn /></Auth>} />
                    <Route path="/auth/signup" element={<Auth><SignUp /></Auth>} />
                    <Route path="/" element={<ProtectedRoute><Portal /></ProtectedRoute>} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
