import { AppBar, Stack, Typography, Toolbar } from "@mui/material";
import React from "react";
import Form from "./form";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Resume from "./resume";
export default function Header() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#394955" }}>
        <Toolbar>
          <BrowserRouter>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              style={{ flex: 1, color: "white", textDecoration: "none" }}
            >
              Resume Generator
            </Typography>
          </BrowserRouter>
        </Toolbar>
      </AppBar>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", delay: 1, duration: 0.5 }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </div>
  );
}
