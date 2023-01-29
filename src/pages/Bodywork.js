import {List, Stack} from "@mui/material";
import {Fade, Slide} from "react-awesome-reveal";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import ListItemPuce from "../components/ListItemPuce";
// Photos
import banniere from "../pictures/Banniere.jpg";
import relax1 from "../pictures/Relax1.jpg";
import relax3 from "../pictures/Relax3.jpg";
import relax2 from "../pictures/Relax2.jpg";
import relax4 from "../pictures/Relax4.jpg";

const Bodywork = () => {
  return (
    <MainContainer>
      <Fade duration='2000' triggerOnce>
        <Title banniere={banniere} banniereAlt='EQUUSYMBIOSE'>
          Bodywork équin
        </Title>
      </Fade>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section picture={relax1} pictureAlt='Bodywork' order='row-reverse'>
          <Paragraph>
            Développée aux USA par April Battles sous l'appellation "holistic
            horseworks" (bodywork), elle constitue une approche holistique du
            corps du cheval ayant pour but de le libérer de toute entrave à la
            circulation d'énergie et à optimiser sa locomotion et ses
            performances selon les capacités individuelles.
          </Paragraph>
          <Paragraph>
            Elle s'adresse à tous les chevaux, quelque soit leur âge, leur
            activité, elle n'est pas réservée aux athlètes !
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section picture={relax3} pictureAlt='Bodywork' order='row'>
          <SubTitle>QUE PEUT-ON ATTENDRE DE CETTE TECHNIQUE ?</SubTitle>
          <Paragraph>
            L'objectif du BODYWORK équin est la détente musculo-squelettique, la
            détection et la libération des causes de blocages, un gain en
            souplesse et amplitude et la prévention des blessures.
          </Paragraph>
          <Paragraph>
            Il s'agit d'une approche douce mais très efficace pour améliorer les
            allures, le capital musculaire et agir sur des irrégularités
            locomotrices inexpliquées. Cette détente musculo-squelettique
            favorise la respiration, l'endurance et la puissance grâce à une
            meilleure circulation d'oxygène dans l'organisme.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section picture={relax2} pictureAlt='Bodywork' order='row-reverse'>
          <Paragraph>
            Les mouvements discrets de l’intervenant entraînent un relâchement
            du squelette et un équilibre sain permettant ainsi aux articulations
            et aux sabots une répartition physiologique des charges.
          </Paragraph>
          <Paragraph>
            Cette technique aide aussi à l'équilibrage des chakras et des
            méridiens par les points Ting.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section picture={relax4} pictureAlt='Bodywork' order='row'>
          <SubTitle>
            CETTE APPROCHE ÉNERGÉTIQUE EST UTILE DANS LES CAS SUIVANTS :
          </SubTitle>
          <List dense>
            <ListItemPuce>
              blocages mentaux, émotionnels et énergétiques
            </ListItemPuce>
            <ListItemPuce>
              tensions musculaires au niveau de l'atlas et axis, ainsi que de
              toute l'encolure (muscles tendus, atrophiés)
            </ListItemPuce>
            <ListItemPuce>
              contractions au niveau de l'atlas et axis, ainsi que de toute
              l'encolure (muscles tendus, atrophies)
            </ListItemPuce>
          </List>
          <Paragraph color='error.main' fontWeight='500'>
            et pour dénouer les tensions :
          </Paragraph>
          <List dense>
            <ListItemPuce>du sternum</ListItemPuce>
            <ListItemPuce>du garrot</ListItemPuce>
            <ListItemPuce>des épaules</ListItemPuce>
            <ListItemPuce>du coude</ListItemPuce>
            <ListItemPuce>du diaphragme</ListItemPuce>
            <ListItemPuce>des côtes et du dos</ListItemPuce>
            <ListItemPuce>du bassin</ListItemPuce>
            <ListItemPuce>
              de l'articulation sacro iliaque, du ischion, du pelvis, des
              jarrets
            </ListItemPuce>
            <ListItemPuce>des genoux</ListItemPuce>
          </List>
        </Section>
      </Slide>
      <Fade duration='2000' triggerOnce>
        <Stack spacing={2} sx={{backgroundColor: "error.main", p: 2}}>
          <Paragraph color='background.main'>
            Les séances sont individualisées pour chaque cheval et parfois
            plusieurs séances sont nécessaires selon le niveau de réponse du
            cheval.
          </Paragraph>
          <Paragraph color='background.main'>
            Pour plus d'informations, vous pouvez nous contacter par mail (via
            la page contact du site) ou par téléphone au 0680317012.
          </Paragraph>
          <Paragraph color='background.main'>
            Le BODYWORK équin est complémentaire aux traitements conventionnels.
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

export default Bodywork;
