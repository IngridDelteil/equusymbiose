import {Fade, Slide} from "react-awesome-reveal";
import {
  Grid,
  List,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ListItemPuce from "../components/ListItemPuce";
import MainContainer from "../components/MainContainer";
import Paragraph from "../components/Paragraph";
import PictureWithCaption from "../components/PictureWithCaption";
import Section from "../components/Section";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
// Photos
import banniere from "../pictures/Banniere.jpg";
import resonance from "../pictures/resonance.jpg";
import renforcementFrequence from "../pictures/renforcement-frequence.jpg";
import teneurEnEau from "../pictures/teneureneau.jpg";

const Equilibrage = () => {
  return (
    <MainContainer>
      <Fade duration='2000' triggerOnce>
        <Title banniere={banniere} banniereAlt='EQUUSYMBIOSE'>
          VETMEDICUM<sup>®</sup>
        </Title>
      </Fade>
      <Stack spacing={2}>
        <SubTitle level={1}>
          QU’EST-CE QUE LA TECHNIQUE PAR CHAMPS DE FRÉQUENCE POUR LES ANIMAUX ?
        </SubTitle>
        <Paragraph>
          En médecine conventionnelle, les modifications chimiques,
          fonctionnelles ou structurelles des organes, des glandes ou d'autres
          tissus sont provoquées par des manipulations physiques (chirurgie,
          massage, etc.) ou par des manipulations biochimiques (médicaments).
          L'approche vibratoire fonctionne avec les vibrations
          électromagnétiques qui constituent la matière physique et qui émet la
          vibration comme le rayonnement solaire permet à la plante la
          fabrication des sucres grâce à la photosynthèse.
        </Paragraph>
        <Paragraph>
          Chaque cellule, molécule, tissu et organe est donc constitué d'énergie
          qui se manifeste sous forme de matière. Cette énergie peut être
          détectée par des oscillations électromagnétiques, qui apparaissent
          dans une ou plusieurs fréquences ou à travers une bande de fréquences
          et qui sont typiques de l'organe ou du tissu (oscillation naturelle).
          Chaque fréquence ou bande de fréquence correspond à une ou plusieurs
          bandes d’absorption dans le spectre électromagnétique.
        </Paragraph>
      </Stack>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={resonance}
          pictureAlt='Effets de résonance'
          order='row'
          pictureBorder={false}
          pictureCaption='Effets de résonance (source Vetmedicum<sup>®</sup>, traduction Equusymbiose)'
        >
          <Stack>
            <Paragraph>
              Avec le Vetmedicum®, l’ensemble des fréquences naturelles
              affaiblies est renforcé. Dans ce processus la fréquence naturelle
              de l’état sain sert de référence pour rétablir un champ de
              fréquence désorganisé, affaibli ou envahi par des fréquences
              parasites.
            </Paragraph>
            <Paragraph>
              Le but est la synchronisation de la vibration perturbée avec sa
              propre vibration saine. C’est ce qu’on appelle la résonance
              constructive.
            </Paragraph>
          </Stack>
        </Section>
      </Slide>
      <Paragraph>
        Cette technologie est parfaitement naturelle pour un physicien même si
        sa description peut sembler pseudo-scientifique pour certains. De
        nombreux médecins et chercheurs l’ont étudiée intensivement et
        méticuleusement depuis plus d'un siècle pour une application médicale
        concrète, comme le Prof. Paul Nogier (Lyon) et l'école Royal Rife, qui
        ont isolé à plusieurs reprises des phénomènes de résonance avec des
        effets curatifs sur les maladies sur certains agents pathogènes. Ce
        phénomène est d’ailleurs utilisé en médecine – par exemple avec les
        appareils de stimulation électrique, avec lesquels les nerfs sont
        stimulés par voie transcutanée à l'aide d'impulsions électriques.
      </Paragraph>
      <Paragraph>
        Il est aussi intéressant de mentionner la thérapie par micro-courants de
        fréquence avec le Healy®, un produit médical reconnu par la médecine
        conventionnelle pour les douleurs chroniques, la fibromyalgie, les
        douleurs squelettiques et la migraine ainsi que pour le traitement de
        soutien des maladies mentales telles que la dépression, l'anxiété et les
        troubles du sommeil associés.
      </Paragraph>
      <Grid container my={4}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <PictureWithCaption
            picture={renforcementFrequence}
            pictureAlt="Renforcement de la fréquence naturelle d'une structure corporelle"
          >
            Renforcement de la fréquence naturelle d'une structure corporelle
            (source Vetmedicum<sup>®</sup>, traduction Equusymbiose)
          </PictureWithCaption>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <SubTitle level={1}>
        PRINCIPE DE FONCTIONNEMENT DE LA TECHNOLOGIE PAR CHAMPS DE FRÉQUENCE
        VETMEDICUM<sup>®</sup>
      </SubTitle>
      <Stack>
        <Paragraph>
          Le Vetmedicum<sup>®</sup> utilise le spectre sonore subliminal qui
          comprend les gammes naturelles d'infrasons (0,2 Hz à 16 Hz) et
          d'ultrasons (16 kHz à 20 kHz), qui sont utilisés, par exemple, par les
          baleines et les éléphants (infrasons) ou les dauphins et les
          chauves-souris (ultrasons) pour la communication.
        </Paragraph>
        <Paragraph>
          L'information de fréquence est principalement transmise par les
          fluides corporels – fluide intracellulaire et extracellulaire. Les
          fluides corporelles totaux chez les mammifères se compose entre 50 et
          75 pour cent. L’eau dans lequel sont dissous sels, molécules, enzymes
          et d’autres agents métaboliques qui vont augmenter la vitesse de
          <Typography component='span' fontWeight={700}>
            {" "}
            propagation du son jusqu'à une valeur de 2000m/s
          </Typography>
          . Pour information la vitesse du son dans l’air est seulement de
          340m/s environ !
        </Paragraph>
      </Stack>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={teneurEnEau}
          pictureAlt="Teneur en eau dans le corps de l'animal"
          order='row'
          pictureBorder={false}
          pictureCaption="Teneur en eau dans le corps de l'animal (source Vetmedicum<sup>®</sup>, traduction Equusymbiose)"
        >
          <Stack>
            <Paragraph>
              Avec la technologie Vetmedicum®, les informations sont transmises
              sans influencer mécaniquement les conditions de tension électrique
              dans l’atome ou la cellule.{" "}
              <Typography component='span' fontWeight={700}>
                La transmission non mécanique des informations est possible à
                l'aide du son car ce sont les fluides corporels qui transportent
                cette information dont le mouvement modifié est perçu par les
                structures corporelles ciblées.
              </Typography>
            </Paragraph>
            <Paragraph>
              Les informations ne sont donc pas transmises à l'aide
              d'électricité ou de magnétisme. Les particules chargées ne
              circulent pas sur un champ de tension comme les électrons
              (électro-médecine) et le spin des électrons n'est pas manipulé à
              l'aide de champs magnétiques (thérapie par champ magnétique).
            </Paragraph>
          </Stack>
        </Section>
      </Slide>
      <SubTitle level={1}>
        DANS QUELS CAS UTILISER LA TECHNIQUE PAR CHAMPS DE FRÉQUENCE ?
      </SubTitle>
      <Stack spacing={2}>
        <Stack>
          <Paragraph>
            La technologie par champ de fréquence Vetmedicum<sup>®</sup> est
            utilisée avec succès dans l'accompagnement des chats, des chiens et
            des chevaux et elle est absolument non invasive !
          </Paragraph>
          <Paragraph>
            La guérison et la régénération des cellules corporelles ciblées
            ainsi qu’un renforcement du système immunitaire par cette thérapie
            sont soutenus par des programmes de champs de fréquence ajustés au
            cas par cas.
          </Paragraph>
        </Stack>
        <Paragraph
          textDecoration='underline'
          fontWeight='500'
          color='error.main'
        >
          D'après les études, les domaines d’applications pour la technologie
          par champ de fréquence englobent :
        </Paragraph>
        <List dense>
          <ListItemPuce>
            troubles osseux, troubles fasciaux et musculaires
          </ListItemPuce>
          <ListItemPuce>
            déficiences du système musculo-squelettique
          </ListItemPuce>
          <ListItemPuce>troubles métaboliques</ListItemPuce>
          <ListItemPuce>pollution environnementale</ListItemPuce>
          <ListItemPuce>charges bactérienne et virale</ListItemPuce>
          <ListItemPuce>
            stress mental et problèmes de comportement
          </ListItemPuce>
        </List>
        <Paragraph
          textDecoration='underline'
          fontWeight='500'
          color='error.main'
        >
          Les vétérinaires allemands utilisent le VETMEDICUM<sup>®</sup> dans
          les cas suivants :
        </Paragraph>
      </Stack>
      <TableContainer component={Paper} sx={{my: 2}}>
        <Table
          sx={{minWidth: 650}}
          aria-label='Propriétés du fascia'
          size='small'
        >
          <TableHead>
            <TableRow>
              <TableCell>TROUBLES PHYSIQUES</TableCell>
              <TableCell>TROUBLES PHYSIOLOGIQUES</TableCell>
              <TableCell>TROUBLES PSYCHIQUES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Stack spacing={2}>
                  <Paragraph alignment='left'>- arthrose</Paragraph>
                  <Paragraph alignment='left'>
                    - distorsion
                    <br />- tendinite
                    <br />- toute lésion du tissu mou
                  </Paragraph>
                  <Paragraph alignment='left'>
                    - névralgie
                    <br />- fonte musculaire
                    <br />- maladies chroniques
                    <br />- douleurs variées (névralgique, arthrosique, aïgue)
                    <br />- EORTH
                    <br />
                    ...
                  </Paragraph>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack spacing={2}>
                  <Paragraph alignment='left'>
                    - colique, Kotwasser, SME...
                    <br />- affections des voies respiratoires (MPOC, RAO...)
                    <br />- système immunitaire
                    <br />- circulation sanguine
                  </Paragraph>
                  <Paragraph alignment='left'>
                    - infection, parasites, lyme...
                  </Paragraph>
                  <Paragraph alignment='left'>
                    - inflammation
                    <br />- régénération du tissu
                    <br />- mastite
                  </Paragraph>
                  <Paragraph alignment='left'>
                    - cystite
                    <br />- allergies
                    <br />- hépatite
                    <br />
                    ...
                  </Paragraph>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack spacing={2}>
                  <Paragraph alignment='left'>- nervosité</Paragraph>
                  <Paragraph alignment='left'>
                    - déséquilibres psychiques
                    <br />- trauma
                    <br />- irritabilité mentale
                    <br />- problèmes comportementaux
                    <br />- affections psychosomatiques
                    <br />- stress
                    <br />
                    ...
                  </Paragraph>
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Paragraph>
        Si votre animal éprouve un de ces troubles, cette approche par champs de
        fréquences soutiendra votre animal. Les séances seront adaptées au cas
        individuel pour bien répondre au besoin du moment.
      </Paragraph>
      <Stack mt={4}>
        <SubTitle level={1}>
          À QUI S'ADRESSE LE VETMEDICUM<sup>®</sup> ?
        </SubTitle>
      </Stack>
      <Stack spacing={2}>
        <Paragraph>
          Cette technique s’adresse à tous les animaux (chien/chat/cheval) quel
          que soit leur âge en entretien et en soutien. Un jeune cheval en
          pleine croissance, en apprentissage, un cheval de sport pour soutenir
          son activité équestre ou accélérer sa remise en état, un cheval de
          loisir, ou aussi un cheval « retraité » pour maintenir et soutenir son
          état... chacun peut bénéficier de façon adaptée à son cas individuel.
        </Paragraph>
        <Paragraph textDecoration='underline'>
          Seules contre-indications :
        </Paragraph>
        <List dense>
          <ListItemPuce>faiblesse majeure passagère</ListItemPuce>
          <ListItemPuce>fièvre</ListItemPuce>
          <ListItemPuce>femelle gestante</ListItemPuce>
        </List>
        <Paragraph>Les implants métalliques ne posent aucun souci.</Paragraph>
      </Stack>
      <Stack mt={4}>
        <SubTitle level={1}>DÉROULEMENT DE MON INTERVENTION</SubTitle>
      </Stack>
      <Stack spacing={2}>
        <Paragraph textDecoration='underline' fontWeight='500'>
          Première étape – les prérequis
        </Paragraph>
        <List dense>
          <ListItemPuce>
            soit en présentiel dans la mesure du possible avec une anamnèse sur
            place
          </ListItemPuce>
          <ListItemPuce>
            soit à distance basé sur un dossier d’analyse prenant en compte la
            globalité et le parcours de votre animal ou
          </ListItemPuce>
          <ListItemPuce>
            soit sur diagnostic précis et préalable d’un professionnel de santé
            compétent
          </ListItemPuce>
        </List>
        <Paragraph textDecoration='underline' fontWeight='500'>
          Deuxième étape – analyse & accompagnement
        </Paragraph>
        <Paragraph>
          Dès que les données sont analysées, je mets en place la base de la
          séance par champ de fréquence individualisée qui peut être à chaque
          moment ajustée en fonction de l’évolution.
          <br />
          Je vous accompagne dans sa mise en œuvre de cette thérapie
          (intervalles, intensité, durée etc.) en tenant compte du retour de vos
          observations (feedback).
        </Paragraph>
        <Paragraph textDecoration='underline' fontWeight='500'>
          Équipement
        </Paragraph>
        <Paragraph>
          Cette méthode nécessite l’utilisation d’un accessoire qui est
          disponible en location ou à l’achat. Dans certains cas comme par
          exemple les troubles « chroniques » un achat sera plus rentable, et
          vous donnera plus de liberté et de réactivité en cas d’un souci
          inattendu qui demande un soin rapidement.
        </Paragraph>
        <Paragraph textDecoration='underline'>
          En fonction du trouble à traiter il existe deux types d’accessoires :
        </Paragraph>
        <List dense>
          <ListItemPuce>
            un tapis thérapeutique
            <br />2 tailles disponibles selon la taille de l’animal (location &
            achat possible)
          </ListItemPuce>
          <ListItemPuce>
            un tapis de selle adapté à différentes disciplines équestres
            (seulement à l’achat)
          </ListItemPuce>
        </List>
      </Stack>
      <Fade duration='2000' triggerOnce>
        <Stack
          spacing={2}
          marginTop={4}
          sx={{backgroundColor: "error.main", p: 2}}
        >
          <Paragraph color='background.main'>
            Cette technique est complémentaire aux traitements conventionnels.
            Elle ne remplace pas l'avis vétérinaire et/ou ostéopathique.
          </Paragraph>
          <Paragraph
            color='background.main'
            fontWeight='700'
            alignment='center'
          >
            N’hésitez pas à me solliciter pour plus de renseignements.
            <br />
            Je me ferai un plaisir de répondre à toutes vos questions.
          </Paragraph>
        </Stack>
      </Fade>
    </MainContainer>
  );
};

export default Equilibrage;
