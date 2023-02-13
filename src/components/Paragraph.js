import {Typography} from "@mui/material";

const Paragraph = ({
  children,
  alignment = "justify",
  color = "primary.dark",
  fontWeight = "400",
  fontStyle = "normal",
}) => {
  return (
    <Typography
      color={color}
      sx={{textAlign: alignment, fontWeight: fontWeight, fontStyle: fontStyle}}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
