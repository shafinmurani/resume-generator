import { Typography, TextField, Button, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function Form() {
  function submit() {
    console.log(name);
    console.log(designation);
    console.log(about);
    console.log(experience);
    console.log(dateOfJoin);
    console.log(dateOfLeave);
  }

  const [name, setName] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [experience, setExperience] = React.useState([]);
  const [about, setAbout] = React.useState("");
  const [jMonth, setJMonth] = React.useState("");
  const [jYear, setJYear] = React.useState("");
  const [dateOfJoin, setDateOfJoin] = React.useState("");
  const [achievements, setAchievements] = React.useState([]);
  const [lMonth, setLMonth] = React.useState("");
  const [lYear, setLYear] = React.useState("");
  const [dateOfLeave, setDateOfLeave] = React.useState("");
  const [itter, setItter] = React.useState(1);
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <div
      style={{
        marginTop: "1rem",
        width: "80%",
        marginInline: "auto",
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      <Typography variant="h6" style={{ textAlign: "center" }}>
        About You
      </Typography>
      <TextField
        onChange={(e) => {
          setName(e.target.value);
        }}
        fullWidth
        label="Name"
        color="secondary"
      />
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        fullWidth
        label="Email"
        color="secondary"
      />
      <TextField
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        fullWidth
        label="Phone"
        color="secondary"
      />
      <TextField
        fullWidth
        onChange={(e) => {
          setDesignation(e.target.value);
        }}
        label="Designation"
        color="secondary"
      />
      <TextField
        fullWidth
        onChange={(e) => {
          setAbout(e.target.value);
        }}
        multiline
        maxRows={6}
        minRows={2}
        label="About"
        color="secondary"
      />
      <Divider />
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Work Experience
      </Typography>

      {experience.map((val, key) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "1rem",
            }}
            key={key}
          >
            <TextField
              color="secondary"
              label="Company"
              defaultValue={val.company}
              onChange={(e) => {
                val.company = e.target.value;
              }}
            />
            <TextField
              color="secondary"
              label="Post"
              defaultValue={val.post}
              onChange={(e) => {
                val.post = e.target.value;
              }}
            />
            <TextField
              color="secondary"
              label="Information"
              multiline
              maxRows={5}
              defaultValue={val.info}
              onChange={(e) => {
                val.info = e.target.value;
              }}
            />
            <div style={{ display: "flex", flex: 1, columnGap: "1rem" }}>
              <TextField
                color="secondary"
                label="Month of joining"
                fullWidth
                defaultValue={val.joinDate}
                onChange={(e) => {
                  setJMonth(e.target.value);
                  val.joinDate = e.target.value + " " + jYear;
                }}
              />
              <TextField
                fullWidth
                color="secondary"
                label="Year of Joining"
                // type="number"
                defaultValue={val.joinDate}
                onChange={(e) => {
                  setJYear(e.target.value);
                  val.joinDate = jMonth + " " + e.target.value;
                }}
              />
              <TextField
                fullWidth
                color="secondary"
                label="Date of Joining"
                // type="number"
                disabled
                value={val.joinDate}
              />
            </div>
            <div style={{ display: "flex", flex: 1, columnGap: "1rem" }}>
              <TextField
                color="secondary"
                label="Month of Leave(leave blank for present)"
                fullWidth
                defaultValue={val.joinDate}
                onChange={(e) => {
                  setLMonth(e.target.value);
                  val.exitDate = e.target.value + " " + lYear;
                }}
              />
              <TextField
                fullWidth
                color="secondary"
                label="Year of Leave(leave blank for present)"
                // type="number"
                defaultValue={val.joinDate}
                onChange={(e) => {
                  setLYear(e.target.value);
                  val.exitDate = lMonth + " " + e.target.value;
                }}
              />
              <TextField
                fullWidth
                color="secondary"
                label="Date of Leaving"
                // type="number"
                disabled
                value={val.exitDate}
              />
            </div>
            <Divider />
          </div>
        );
      })}
      <Button
        style={{ alignSelf: "flex-start" }}
        variant="contained"
        color="secondary"
        onClick={() => {
          setExperience((experience) => [
            ...experience,
            {
              id: experience.length,
              company: "",
              post: "",
              info: "",
              joinDate: "",
              exitDate: "Present",
            },
          ]);
          // console.log(experience);
        }}
      >
        Add Experience
      </Button>
      <Divider />
      <div>
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Achievements
        </Typography>

        {achievements.map((val, key) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
              key={key}
            >
              <TextField
                fullWidth
                color="secondary"
                label="Title"
                // type="number"
                defaultValue={val.name}
                onChange={(e) => {
                  val.name = e.target.value;
                }}
              />
              <TextField
                fullWidth
                color="secondary"
                rows={5}
                maxRows={5}
                multiline
                label="Info"
                // type="number"
                defaultValue={val.info}
                onChange={(e) => {
                  val.info = e.target.value;
                }}
              />

              <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            </div>
          );
        })}
        <Button
          style={{ alignSelf: "flex-start" }}
          variant="contained"
          color="secondary"
          onClick={() => {
            setAchievements((achievements) => [
              ...achievements,
              {
                id: achievements.length,
                name: "",
                info: "",
              },
            ]);
            console.log(experience);
          }}
        >
          Add Achievements
        </Button>
      </div>
      <Button
        onClick={() => {
          localStorage.setItem("achieve", JSON.stringify(achievements));
        }}
        variant="contained"
        color="secondary"
        style={{ alignSelf: "flex-end", marginBottom: "2rem" }}
        component={Link}
        to={
          "/resume?name=" +
          name +
          "&desig=" +
          designation +
          "&about=" +
          about +
          "&experience=" +
          JSON.stringify(experience) +
          "&achieve=" +
          JSON.stringify(achievements) +
          "&phone=" +
          phone +
          "&email=" +
          email
        }
      >
        Next
      </Button>
    </div>
  );
}
