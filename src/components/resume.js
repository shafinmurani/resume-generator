import { Typography, Button, Divider } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const downloadPdfDocument = (rootElementId) => {
  const input = document.getElementById(rootElementId);
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    saveAs(imgData, "resume.png"); // Put your image url here.
  });
};
export default function Resume() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  const desig = new URLSearchParams(search).get("desig");
  const about = new URLSearchParams(search).get("about");
  const experience = JSON.parse(new URLSearchParams(search).get("experience"));
  const achieve = JSON.parse(localStorage.getItem("achieve"));
  const phone = new URLSearchParams(search).get("phone");
  const email = new URLSearchParams(search).get("email");
  return (
    <div style={{ paddingBottom: "3rem" }}>
      <div
        id="download"
        style={{
          width: "80%",
          marginInline: "auto",
          marginTop: "1rem",
          backgroundColor: "white",
          minHeight: "100vh",
          padding: "1rem",
          whiteSpace: "pre-line",
        }}
      >
        <div
          style={{
            width: "80%",
            marginInline: "auto",
            paddingTop: "2rem",
            paddingBottom: "4rem",
          }}
        >
          <Typography variant="h5">{name}</Typography>
          <Typography variant="button" component="a" href={"tel:" + phone}>
            {phone}
          </Typography>
          <br />
          <Typography variant="button" component="a" href={"mailto:" + email}>
            {email}
          </Typography>
          <br />
          <Typography variant="caption1" fontWeight={100}>
            {desig}
          </Typography>
          <Typography variant="body2" fontWeight={100}>
            {about}
          </Typography>
          <Divider style={{ marginTop: "2rem", marginBottom: "2rem" }} />
          <div>
            <Typography variant="h5" style={{ marginBottom: "1rem" }}>
              Work Experience
            </Typography>
            {experience.map((val, key) => {
              return (
                <div>
                  <Typography>{val.company}</Typography>
                  <Typography variant="caption1" fontWeight={100}>
                    {val.post}
                  </Typography>
                  <Typography variant="body2" fontWeight={100}>
                    {val.joinDate} - {val.exitDate}
                  </Typography>
                  <Typography variant="body2">{val.info}</Typography>
                </div>
              );
            })}
          </div>
          <Divider style={{ marginTop: "2rem", marginBottom: "2rem" }} />
          <div>
            <Typography variant="h5" style={{ marginBottom: "1rem" }}>
              Achievements
            </Typography>
            {achieve.map((val, key) => {
              return (
                <div>
                  <Typography variant="h6">{val.name}</Typography>

                  <Typography variant="body2">{val.info}</Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Button
        style={{ marginTop: "1rem", display: "block", marginInline: "auto" }}
        onClick={() => {
          downloadPdfDocument("download");
        }}
        variant="contained"
      >
        Download as png
      </Button>
    </div>
  );
}
