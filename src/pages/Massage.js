import {useNavigate} from "react-router-dom";
import {Grid, Link, List, Stack} from "@mui/material";
import {Fade, Slide} from "react-awesome-reveal";
import ListItemPuce from "../components/ListItemPuce";
import MainContainer from "../components/MainContainer";
import Paragraph from "../components/Paragraph";
import PictureWithCaption from "../components/PictureWithCaption";
import Section from "../components/Section";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
// Photos
import banniere from "../pictures/Banniere.jpg";
import thermoTherapie1 from "../pictures/ThermoTherapie1.png";
import thermoTherapie2 from "../pictures/ThermoTherapie2.jpg";
import thermoTherapie3 from "../pictures/ThermoTherapie3.jpg";
import masso1 from "../pictures/Masso1.jpg";
import masso2 from "../pictures/Masso2.png";
import masso3 from "../pictures/Masso3.jpg";

const Massage = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => () => {
    navigate(link);
  };
  return (
    <MainContainer>
      <Fade duration='2000' triggerOnce>
        <Title banniere={banniere} banniereAlt='EQUUSYMBIOSE'>
          Thermo & Masso
        </Title>
      </Fade>
      <Stack spacing={2}>
        <Paragraph>
          Dans sa recherche d'amélioration du bien être du cheval, EQUUSYMBIOSE
          vous propose l'EPIONY et le padd de massage EQUILIBRIUM en complément
          des séances en Bodywork. L'EPIONY ET l'EQUILIBRIUM peuvent être
          individuellement associé lors d'une même séance pour apporter leurs
          bénéfices en même temps.
        </Paragraph>
        <SubTitle level={1}>EPIONY</SubTitle>
      </Stack>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={thermoTherapie1}
          pictureAlt='Epiony'
          pictureBorder={false}
          order='row-reverse'
        >
          <Stack spacing={2}>
            <SubTitle level={2}>LES AVANTAGES DE L'APPROCHE THERMIQUE</SubTitle>
            <List>
              <ListItemPuce>
                Selon les constats de la maison, le padd thermique d’EPIONY
                dilate les vaisseaux sanguins des muscles.
                <br />
                Ce processus augmente le flux d’oxygène et de nutriments vers
                les muscles, aidant à guérir les tissus endommagés et à
                augmenter l’élimination du dioxyde de carbone et des déchets
                métaboliques.
              </ListItemPuce>
              <ListItemPuce>
                La chaleur stimule les récepteurs sensoriels de la peau, ce qui
                signifie que l’application de chaleur sur n’importe quelle
                partie du corps diminuera la transmission des signaux douloureux
                au cerveau et soulagera partiellement l’inconfort.
              </ListItemPuce>
              <ListItemPuce>
                L'EPIONY diminue la raideur, augmente la flexibilité et améliore
                la sensation générale de confort.
                <br />
                Surtout dans la zone dorsale de la selle et la zone du garrot
                des chevaux.
              </ListItemPuce>
            </List>
          </Stack>
        </Section>
      </Slide>
      <Paragraph>
        L'EPIONY est excellent pour aider la relaxation et réduire le stress du
        cheval. Les chevaux apprécient le contact agréable du tissu en
        similicuir ultra-doux et léger, associé à un matériau d’isolation
        résistant à la chaleur qui permet de retenir et refléter la chaleur sur
        les muscles pour les apaiser et les détendre tout en diffusant une
        chaleur progressive.
      </Paragraph>
      <Grid container spacing={4} marginTop={2}>
        <Grid item xs={12} md={6}>
          <PictureWithCaption
            picture={thermoTherapie2}
            pictureAlt='Thermothérapie Epiony'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureWithCaption
            picture={thermoTherapie3}
            pictureAlt='Thermothérapie Epiony'
          />
        </Grid>
      </Grid>
      <Stack spacing={2} marginTop={4}>
        <SubTitle level={2}>
          CETTE APPROCHE THERMIQUE EST BÉNÉFIQUE POUR
        </SubTitle>
        <List dense>
          <Slide delay='30' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              les jeunes chevaux au travail (débourrage...)
            </ListItemPuce>
          </Slide>
          <Slide delay='40' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              les chevaux de compétition (sauts, dressage, endurance...)
            </ListItemPuce>
          </Slide>
          <Slide delay='50' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              les chevaux de loisir (balade, randonnées...)
            </ListItemPuce>
          </Slide>
          <Slide delay='60' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              les détentes musculaires en vue d’une reprise de leur activité
            </ListItemPuce>
          </Slide>
          <Slide delay='70' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>les transitions aux pieds nus</ListItemPuce>
          </Slide>
          <Slide delay='80' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>les chevaux vieillissants</ListItemPuce>
          </Slide>
          <Slide delay='90' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>le confort physique et mental du cheval</ListItemPuce>
          </Slide>
        </List>
        <SubTitle level={2}>DURÉE D'UNE SÉANCE</SubTitle>
        <Paragraph>
          entre 1/2 heure et 1 heure selon les besoins individuels du cheval
        </Paragraph>
        <Link
          underline='always'
          variant='subtitle1'
          component='a'
          sx={{
            cursor: "pointer",
            "&:hover": {color: "error.main"},
          }}
          onClick={navigateTo("/contact")}
        >
          Demander plus d'informations
        </Link>
        <SubTitle level={1}>MASSAGE DE LA CHAINE DORSALE</SubTitle>
        <SubTitle level={2}>LES BÉNÉFICES DE L’EQUILIBRIUM</SubTitle>
        <Paragraph>
          Ce padd de massage permet de réduire les raideurs au dos causées par
          des blessures et/ou des blocages chroniques à long terme. Elle
          augmente l'apport sanguin aux muscles affectés et aide à éliminer
          l'accumulation de toxines dans les tissus.
        </Paragraph>
        <Paragraph>
          La tension musculaire est souvent l'une des raisons les plus courantes
          d'une mauvaise performance. En améliorant la relaxation musculaire et
          la souplesse du dos, les effets négatifs des tensions musculaires
          peuvent être réduits. Les muscles détendus permettent une souplesse de
          mouvement ce qui est particulièrement important pour les chevaux de
          dressage ou de sauts d'obstacles.
        </Paragraph>
        <SubTitle level={2}>QUELQUES NOTIONS D'ANATOMIE</SubTitle>
      </Stack>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={masso1}
          pictureAlt='Anatomie'
          pictureBorder={false}
          order='row'
        >
          <Stack spacing={2}>
            <Paragraph>
              Il faut visualiser le dos du cheval comme un pont entre l'avant et
              l'arrière main. Les connexions se font par de nombreuses liaisons
              musculaires et ligamenteuses.
            </Paragraph>
            <Paragraph>
              Une expérience bien connue menée dans des universités montre
              qu'une carcasse de cheval tient debout grâce aux systèmes
              ligamentaires. En plus du squelette, à savoir les os, les muscles
              et le support du tissu conjonctif, il existe des grands systèmes
              fasciaux qui traversent toute la musculature. Les paquets
              musculaires sont entourés par les fascias et entre eux se trouvent
              des plaques de tissu conjonctif épaisses, fermes et dures qui sont
              attachées au système squelettique. Les muscles s'attachent non
              seulement aux os, mais dans une large mesure à ces plaques de
              tissu conjonctif (également appelées gros fascias). Lorsqu'un
              muscle tire sur le fascia, il tire indirectement sur l'os. Presque
              tout le tronc est tenu et mobilisé par les fascias !
            </Paragraph>
            <Paragraph>
              Des muscles sains glissent sans effort entre ces plaques de tissu
              conjonctif. Les fascias donnent aux muscles le soutien nécessaire
              pour déployer toute leur force. Cependant, lorsque le tissu est
              surchargé, le liquide visqueux entre le muscle et le fascia se
              modifie pour s’agglomérer (perte de fluidité). Par conséquent, les
              muscles ne peuvent plus glisser en douceur. L'élasticité et la
              capacité à contracter (développement de la force) sont alors
              limitées.
              <br />
              Le manque d'exercice est l'une des causes principales des lésions
              musculo-squelettiques. Non seulement le stress mais aussi
              l'immobilité peuvent "coller" les fascias (perte d'élasticité). Le
              tissu vivant forme du liquide lymphatique et si le flux
              lymphatique ne se fait pas correctement, il va se coaguler dans
              les fascias.
              <br />
              Afin d'éviter d'augmenter les irritations des tissus musculaires
              déjà contractés, une thérapie douce est conseillée pour détendre
              les tissus. Il est préférable d'éviter les étirements musculaires
              et les manipulations articulaires.
            </Paragraph>
          </Stack>
        </Section>
      </Slide>
      <Paragraph fontStyle='italic' fontWeight='500'>
        Le padd de massage EQUILIBRIUM et l’approche thermique par l’EPIONY
        aident les muscles à se détendre. C'est ainsi que la tension dans
        l'articulation diminue, l'influx nerveux (nociception) vers le système
        nerveux central se calme et que les muscles puissent se relâcher.
      </Paragraph>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={masso2}
          pictureAlt='Equilibrium'
          pictureBorder={false}
          order='row-reverse'
        >
          <Stack spacing={2}>
            <SubTitle level={2}>
              COMMENT SE DÉROULE UNE SÉANCE AVEC L’EQUILIBRIUM?
            </SubTitle>
            <Paragraph>
              Le tapis de massage Equilibrium offre trois réglages d'intensité
              différents qui peuvent être facilement sélectionnés. Cela permet
              de choisir l'intensité du massage en fonction des besoins de votre
              cheval. Chaque programme comporte trois types différents de
              massage (pulsations, vibrations, massage léger) pour garantir que
              tous les muscles sont travaillés de trois manières différentes.
              <br />
              Chaque session dure 30 min, mais peut être arrêtée, modifiée ou
              prolongée manuellement à tout moment.
            </Paragraph>
          </Stack>
        </Section>
      </Slide>
      <Stack spacing={2}>
        <SubTitle level={2}>
          Le padd de massage Equilibrium est bénéfique pour les chevaux avant de
          monter, après avoir monté ou un jour de repos. Voici quelques
          scénarios :
        </SubTitle>
        <List dense>
          <Slide delay='30' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              pour un cheval au box (quel que soit la raison) pour maintenir une
              bonne circulation sanguine
            </ListItemPuce>
          </Slide>
          <Slide delay='40' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              avant le travail dans le cadre de l’échauffement
            </ListItemPuce>
          </Slide>
          <Slide delay='50' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              après l’effort pour soutenir la récupération
            </ListItemPuce>
          </Slide>
          <Slide delay='60' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              apporter une détente après un concours, un transport...
            </ListItemPuce>
          </Slide>
          <Slide delay='70' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>comme entretien général</ListItemPuce>
          </Slide>
          <Slide delay='80' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              offrir à tout moment un traitement gratifiant
            </ListItemPuce>
          </Slide>
        </List>
        <SubTitle level={2}>ESSAIS CLINIQUES</SubTitle>
      </Stack>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={masso3}
          pictureAlt='Equilibrium'
          pictureBorder={false}
          s
          order='row-reverse'
        >
          <Stack>
            <Paragraph>
              Selon les études dans le cadre de son engagement en recherche et
              développement, l'Equilibrium Therapy Massage Pad a été testé par
              le Myerscough College de Lancashire au Royaume-Uni.
            </Paragraph>
            <Paragraph>
              Les chevaux sujets des essais étaient mesurés sur des signes de
              stress et évalués en termes de flexibilité et de souplesse du dos.
              La fréquence cardiaque a également été contrôlée. Il a été
              démontré que la fréquence cardiaque était réduite et que les
              chevaux maintenaient un état de relaxation pendant la thérapie.
            </Paragraph>
            <Paragraph>
              Les résultats de ces essaies cliniques ont montré que le padd de
              massages offre des avantages significatifs pour les chevaux au
              travail, améliorant la souplesse du dos et favorisant le
              relâchement musculaire après l'effort ainsi qu'une augmentation de
              la longueur de la foulée.
            </Paragraph>
            <Paragraph textDecoration='underline'>
              Flexibilité améliorée
            </Paragraph>
            <Paragraph>
              Le padd de massage aide à promouvoir la flexibilité des tissus
              musculaires sains, des fascias et des autres fibres des tissus
              mous. Les effets du massage sur la flexibilité peuvent être
              mesurés pour déterminer la quantité de flexion vers le haut ou
              vers le bas du dos des chevaux.
            </Paragraph>
            <Paragraph textDecoration='underline'>Longueur de foulée</Paragraph>
            <Paragraph>
              L'essai a montré que la longueur des foulées des chevaux traités a
              augmenté de 12 cm au cours de la période du test, alors que le
              groupe témoin a montré peu d'amélioration. Les propriétaires de
              chevaux savent qu'un petit changement dans la longueur de la
              foulée peut faire une grande différence dans la façon que le
              cheval avance.
            </Paragraph>
          </Stack>
        </Section>
      </Slide>
      <Stack spacing={2}>
        <SubTitle level={2}>DURÉE D'UNE SÉANCE</SubTitle>
        <Paragraph>
          entre 1/2 heure et 1 heure selon les besoins individuels du cheval
        </Paragraph>
        <Link
          underline='always'
          variant='subtitle1'
          component='a'
          sx={{
            cursor: "pointer",
            "&:hover": {color: "error.main"},
          }}
          onClick={navigateTo("/contact")}
        >
          Demander plus d'informations
        </Link>
      </Stack>
      <Fade duration='2000' triggerOnce>
        <Stack
          spacing={2}
          marginTop={4}
          sx={{backgroundColor: "error.main", p: 2}}
        >
          <Paragraph
            color='background.main'
            fontWeight='500'
            fontStyle='italic'
          >
            Bien entendu, il est conseillé de vérifier si la selle est adaptée
            et que les aplombs sont corrects, que le poids du cavalier ne
            représente pas une surcharge pour le cheval. La nutrition joue
            également un rôle. Plusieurs facteurs entrent en compte si on vise
            la bonne santé de son partenaire le cheval. EQUUSYMBIOSE vous aide à
            mieux comprendre vos observations et vous offre une symbiose
            bénéfique du corps, de l'esprit et de l'âme de votre cheval.
          </Paragraph>
          <Paragraph color='background.main'>
            Ces techniques ne se substituent aucunement aux suivis vétérinaires
            et/ou ostéopathiques.
          </Paragraph>
        </Stack>
      </Fade>
    </MainContainer>
  );
};

export default Massage;
