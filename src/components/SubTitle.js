import {Typography} from "@mui/material";

const SubTitle = ({children, level = 1}) => {
  switch (level) {
    case 2: {
      return (
        <Typography
          component='h3'
          variant='subtitle1'
          color='error.main'
          sx={{
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {children}
        </Typography>
      );
    }
    case 3: {
      return (
        <Typography
          component='h3'
          variant='body2'
          color='error.main'
          sx={{
            textTransform: "uppercase",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          {children}
        </Typography>
      );
    }
    case 1:
    default: {
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
    }
  }
};

export default SubTitle;
