import {Container} from "@mui/material";

const MainContainer = ({children}) => {
  return (
    <Container
      maxWidth='lg'
      component='main'
      sx={{
        minHeight: "100vh",
        pt: "10rem",
        pb: "4rem",
        border: 1,
        borderColor: "warning.main",
        backgroundColor: "background.paper",
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
