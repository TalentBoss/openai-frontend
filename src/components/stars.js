import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function StarRating() {
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
          window.location.href = '/chat';
        }}
      />
    </Box>
  );
}