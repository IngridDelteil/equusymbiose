import MainContainer from "../components/MainContainer";
import {Grid, List, Stack} from "@mui/material";
import {Fade, Slide} from "react-awesome-reveal";
import ListItemPuce from "../components/ListItemPuce";
import Paragraph from "../components/Paragraph";
import PictureWithCaption from "../components/PictureWithCaption";
import Section from "../components/Section";
import Title from "../components/Title";
// Photos
import banniere from "../pictures/Banniere.jpg";
import decompression1 from "../pictures/Decompression1.jpg";
import decompression4 from "../pictures/Decompression4.jpg";
import decompression2 from "../pictures/Decompression2.jpg";
import decompression3 from "../pictures/Decompression3.jpg";
import thermoPathoDent3 from "../pictures/ThermoPathoDent3.jpg";
import thermoPathoDent4 from "../pictures/ThermoPathoDent4.jpg";

const Decompression = () => {
  return (
    <MainContainer>
      <Fade duration='2000' triggerOnce>
        <Title banniere={banniere} banniereAlt='EQUUSYMBIOSE'>
          Décompression crânienne
        </Title>
      </Fade>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={decompression1}
          pictureAlt='Décompression Crânienne'
          order='row-reverse'
        >
          <Paragraph>
            La plupart des dommages crâniens se produisent lorsque le cheval est
            très jeune, par exemple, quand on lui passe le licol pour la
            première fois et qu'il se débat, quand il tire au renard à
            l'attache, quand il passe sous la mangeoire de sa mère où sous une
            clôture dans un pré. Si vous interrogez google au sujet des
            problèmes crâniens, auto-immunitaires et allergiques, le premier
            remède qui apparaît est la libération du système cranio-sacral.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={decompression4}
          pictureAlt='Décompression Crânienne'
          order='row'
        >
          <Paragraph>
            Jusqu'à l’âge de 8 ans, tous les os et les sutures de la tête du
            cheval sont encore assez souples. S'il se cogne la tête ou subit un
            traumatisme, cela peut provoquer des changements de pression du
            liquide céphalo-rachidien. Ce cheval aura potentiellement des
            problèmes d'ATM (articulation tempo-mandibulaire), nécessitant
            parfois des interventions d'un dentiste équin plus souvent que la
            normale, une instabilité du positionnement de la tête, qui se frotte
            la tête toujours du même côté etc. Ce déséquilibre crânien peut
            également être à l'origine de problèmes allergiques et
            auto-immunitaires.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={decompression2}
          pictureAlt='Décompression Crânienne'
          order='row-reverse'
        >
          <Paragraph>
            Les techniques de l'approche cranio-sacrée visent à relâcher les
            tensions crâniennes dont les symptômes courants sont :
          </Paragraph>
          <List dense>
            <ListItemPuce>asymétrie faciale</ListItemPuce>
            <ListItemPuce>
              mouvements désordonnés de la tête, stéréotypies, ...
            </ListItemPuce>
            <ListItemPuce>difficulté à licoler ou à brider</ListItemPuce>
            <ListItemPuce>écoulements oculaires et nasaux</ListItemPuce>
            <ListItemPuce>problèmes auto-immunitaires</ListItemPuce>
            <ListItemPuce>
              troubles comportementaux "inexplicables" en monte (écarts,
              embarquement...)
            </ListItemPuce>
            <ListItemPuce>
              déséquilibre du sabot d'un côté, le HighLow
            </ListItemPuce>
          </List>
        </Section>
      </Slide>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={decompression3}
          pictureAlt='Décompression Crânienne'
          order='row'
        >
          <Paragraph>
            L'asymétrie faciale peut être notamment la cause de troubles
            comportementaux car en altérant le champ de vision du cheval, elle
            altère sa perception de l'environnement. Les réactions du cheval
            peuvent être des écarts, des demi-tours ou des refus d'avancer
            incompréhensibles pour son cavalier.
          </Paragraph>
          <Paragraph>
            En résumé, les chevaux qui sont affligés d'une compression crânienne
            quelle qu'en soit l'origine, souffrent de maux de tête permanents.
          </Paragraph>
          <Paragraph>
            Un relâchement crânien les libère de ces troubles et rétablit un
            équilibre harmonieux du corps entier améliorant ainsi leur qualité
            de vie.
          </Paragraph>
        </Section>
      </Slide>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <PictureWithCaption
            picture={thermoPathoDent3}
            pictureAlt='thermographie'
          >
            inflammation du sinus droit avant la séance "décompression
            crânienne" d'une jument de 27 ans ayant de gros problèmes
            respiratoires
          </PictureWithCaption>
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureWithCaption
            picture={thermoPathoDent4}
            pictureAlt='thermographie'
          >
            la même jument après la séance qui montre une amélioration
            significative de sa respiration grâce à une vascularisation
            équilibrée et une diminution de l'inflammation
          </PictureWithCaption>
        </Grid>
      </Grid>
      <Fade duration='2000' triggerOnce>
        <Stack
          spacing={2}
          marginTop={4}
          sx={{backgroundColor: "error.main", p: 2}}
        >
          <Paragraph color='background.main'>
            Cette technique est complémentaire aux traitements conventionnels.
            Elle ne remplace pas l'avis vétérinaire.
          </Paragraph>
          <Paragraph color='background.main' fontWeight='700'>
            Il est conseillé de laisser le cheval 48 à 72h au repos après une
            séance ou plus si nécessaire.
          </Paragraph>
        </Stack>
      </Fade>
    </MainContainer>
  );
};

export default Decompression;
