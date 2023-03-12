import {Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const PictureWithCaption = ({picture, pictureAlt, children}) => {
  const theme = useTheme();
  return (
    <Stack>
      <img
        src={picture}
        alt={pictureAlt}
        width='100%'
        style={{
          border: 2,
          borderStyle: "solid",
          borderColor: theme.palette.error.main,
          boxSizing: "border-box",
        }}
      />
      <Typography component='caption' variant='caption' color='error.main'>
        {children}
      </Typography>
    </Stack>
  );
};

export default PictureWithCaption;
