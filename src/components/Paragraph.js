import {Typography} from "@mui/material";

const Paragraph = ({
  children,
  alignment = "justify",
  color = "primary.dark",
  fontWeight = "400",
}) => {
  return (
    <Typography
      color={color}
      sx={{textAlign: alignment, fontWeight: fontWeight}}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
