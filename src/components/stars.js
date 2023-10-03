import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";

export default function StarRating({ essay }) {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        "& > legend": { mt: 3 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          const request = {
            rating: newValue,
            content: essay
          }
          console.log(request)
          axios.post("/rating/set-rating", request)
            .then(response => {
              window.location.href ='/chat';
            })
            .catch(err => {
              if (err.response) {
                console.log(err.response)
              }
            })
        }}
      />
    </Box>
  );
}