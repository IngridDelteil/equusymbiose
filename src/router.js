import {createBrowserRouter} from "react-router-dom";
import App from "./App";
// Pages
import AmpliVet from "./pages/AmpliVet";
import BodyWork from "./pages/Bodywork";
import Contact from "./pages/Contact";
import Decompression from "./pages/Decompression";
import Equilibrage from "./pages/Equilibrage";
import Figue from "./pages/Figue";
import Home from "./pages/Home";
import LectureDuVivant from "./pages/LectureDuVivant";
import LiberationMyofasciale from "./pages/LiberationMyofasciale";
import Massage from "./pages/Massage";
import Mentions from "./pages/Mentions";
import Parcours from "./pages/Parcours";
import Sante from "./pages/Sante";
import ThermographieOutil from "./pages/ThermographieOutil";
import ThermographiePathologies from "./pages/ThermographiePathologies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "amplivet",
        element: <AmpliVet />,
      },
      {
        path: "bodywork",
        element: <BodyWork />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "decompression",
        element: <Decompression />,
      },
      {
        path: "equilibrage",
        element: <Equilibrage />,
      },
      {
        path: "figue",
        element: <Figue />,
      },
      {
        path: "lecture",
        element: <LectureDuVivant />,
      },
      {
        path: "liberation",
        element: <LiberationMyofasciale />,
      },
      {
        path: "massage",
        element: <Massage />,
      },
      {
        path: "mentions",
        element: <Mentions />,
      },
      {
        path: "parcours",
        element: <Parcours />,
      },
      {
        path: "sante",
        element: <Sante />,
      },
      {
        path: "thermographieoutil",
        element: <ThermographieOutil />,
      },
      {
        path: "thermographiepathologies",
        element: <ThermographiePathologies />,
      },
    ],
  },
]);

export default router;
