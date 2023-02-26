import {Typography} from "@mui/material";

const Paragraph = ({
  children,
  alignment = "justify",
  color = "primary.dark",
  fontWeight = "400",
  fontStyle = "normal",
  textDecoration = "none",
}) => {
  return (
    <Typography
      color={color}
      sx={{
        textAlign: alignment,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        textDecoration: textDecoration,
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
