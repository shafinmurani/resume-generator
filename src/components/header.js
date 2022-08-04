import { AppBar, Stack, Typography, Toolbar } from "@mui/material";
import React from "react";
import Form from "./form";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#394955" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Resume Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", delay: 1, duration: 0.5 }}
      >
        <Form />
      </motion.div>
    </div>
  );
}
