import {Typography} from "@mui/material";

const SubTitle = ({children}) => {
  return (
    <Typography
      component='h2'
      variant='h6'
      color='secondary.main'
      sx={{
        textTransform: "uppercase",
        fontWeight: 500,
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
};

export default SubTitle;
