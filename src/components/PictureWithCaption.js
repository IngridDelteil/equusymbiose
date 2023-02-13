import {Stack} from "@mui/material";
import Paragraph from "./Paragraph";
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
      <Paragraph alignment='center' fontStyle='italic' color='error.main'>
        {children}
      </Paragraph>
    </Stack>
  );
};

export default PictureWithCaption;
