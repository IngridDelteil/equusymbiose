import {
  List,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {Fade, Slide} from "react-awesome-reveal";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import ListItemPuce from "../components/ListItemPuce";
// Photos
import banniere from "../pictures/Banniere.jpg";
import libMyo2 from "../pictures/LibMyo2.jpg";
import libMyo1 from "../pictures/LibMyo1.jpg";
import libCrane1 from "../pictures/LibCrane1.jpg";
import libCrane2 from "../pictures/LibCrane2.jpg";

const LiberationMyofasciale = () => {
  return (
    <MainContainer>
      <Fade duration='2000' triggerOnce>
        <Title banniere={banniere} banniereAlt='EQUUSYMBIOSE'>
          LIBÉRATION MYOFASCIALE & CRANIO-SACRALE
        </Title>
      </Fade>
      <Paragraph>
        EQUUSYMBIOSE évalue le cheval entier pour les zones musculaires
        contractées, l'équilibre des sabots et ce que le corps dit.
      </Paragraph>
      <Paragraph>Nous nous posons plusieurs questions:</Paragraph>
      <List>
        <Slide delay='30' direction='right' duration='2000' triggerOnce>
          <ListItemPuce>
            Pourquoi le cheval n'est-il pas en aussi bonne santé qu'il pourrait
            l'être lorsque nous testons sa vitalité?
          </ListItemPuce>
        </Slide>
        <Slide delay='40' direction='right' duration='2000' triggerOnce>
          {" "}
          <ListItemPuce>
            Pourquoi présente-t-il des tensions musculaires?
          </ListItemPuce>
        </Slide>
        <Slide delay='50' direction='right' duration='2000' triggerOnce>
          <ListItemPuce>
            Pourquoi les sabots sont-ils déséquilibrés?
          </ListItemPuce>
        </Slide>
        <Slide delay='60' direction='right' duration='2000' triggerOnce>
          <ListItemPuce>Pourquoi le cheval a-t-il des problèmes?</ListItemPuce>
        </Slide>
        <Slide delay='70' direction='right' duration='2000' triggerOnce>
          <ListItemPuce>
            Que pouvons-nous faire d’autre pour aider le corps du cheval à
            retrouver 100% de sa santé et de sa vitalité?
          </ListItemPuce>
        </Slide>
      </List>
      <Stack spacing={2} marginTop={1}>
        <SubTitle level={2}>Le Principe de Base</SubTitle>
        <Paragraph>
          Tous les vivants ont la capacité d'auto-guérison. Les techniques que
          nous déployons dans la séance visent à aider le cheval à améliorer sa
          capacité d'auto-guérison en permettant au flux énergétique de circuler
          librement.
        </Paragraph>
        <SubTitle level={2}>Qu'est-ce que la kinésiologie appliquée?</SubTitle>
        <Paragraph>
          C'est l'étude de la mécanique du mouvement du corps; l'étude de la
          façon dont les muscles agissent et se coordonnent pour déplacer le
          corps. La kinésiologie traite des mécanismes physiologiques,
          biomécaniques et psychologiques du mouvement en utilisant différentes
          techniques.
        </Paragraph>
        <Paragraph>
          La technique clé en kinésiologie utilisée par EQUUSYMBIOSE est le
          "code émotionnel" (Emotion Code, Dr. Nelson Bradley). Cet outil permet
          de détecter et corriger divers déséquilibres corporels qui peuvent
          être liés au stress, à la nutrition, aux blocages, etc.
          <br />
          La séance vise à dénouer individuellement les blocages détectés afin
          de ramener le corps à son équilibre.
        </Paragraph>
        <SubTitle level={3}>
          Techniques de libération myofasciale et craniosacrale :
        </SubTitle>
        <List>
          <Slide delay='30' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>la digipression</ListItemPuce>
          </Slide>
          <Slide delay='40' direction='right' duration='2000' triggerOnce>
            {" "}
            <ListItemPuce>l'application d'huiles essentielles</ListItemPuce>
          </Slide>
          <Slide delay='50' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              soutien et équilibrage nutritionnel par des plantes médicinales
            </ListItemPuce>
          </Slide>
          <Slide delay='60' direction='right' duration='2000' triggerOnce>
            <ListItemPuce>
              applications topiques (Spas sur la région garrot-dorsale-sacrum
              avec des HE de Dottera)
            </ListItemPuce>
          </Slide>
        </List>
        <Paragraph fontStyle='italic' fontWeight='500'>
          Cette approche vise à améliorer la santé et le bien-être d’un individu
          en stimulant son propre potentiel de guérison. Elle fonctionne selon
          le principe que le corps, l’esprit et l’âme sont connectés et que,
          grâce à leur équilibre, la santé peut être restaurée par la capacité
          du corps d'auto-guérison.
        </Paragraph>
        <SubTitle level={2}>
          Qu'est-ce que le fascia et la mobilisation myofasciale?
        </SubTitle>
        <Paragraph>
          Imaginons que notre corps soit enveloppé dans une pellicule plastique.
          Lorsque nous tirons sur une partie de cette pellicule, elle comprimera
          ailleurs.
          <br />
          Si nous tirons assez fort, l'enveloppe peut même se déchirer aux
          endroits où les tensions sont les plus fortes.
        </Paragraph>
        <Paragraph>
          Le fascia est un tissu fibreux qui couvre, sépare et soutient tous les
          muscles et groupes de muscles. Ce tissu a trois propriétés, chacune
          ayant sa propre fonction :
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
              <TableCell>PROPRIÉTÉS</TableCell>
              <TableCell>FONCTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>collagène</TableCell>
              <TableCell>
                protège contre la surextension, évite donc les lésions,
                déchirures...
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>élastine</TableCell>
              <TableCell>
                apporte de l'élasticité (les tendons permettant de déplacer les
                os)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>complexe gel polysaccharide</TableCell>
              <TableCell>lubrifiante, amortisseur</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} marginTop={1}>
        <Paragraph>
          Le fascia a une apparence similaire à celle d'une toile d'araignée ou
          d'un pull. L'aspect le plus intéressant du système fascial est qu'il
          ne s'agit pas simplement d'un système de couvertures séparées. C'est
          en fait une structure continue qui existe de la tête aux pieds sans
          interruption tant qu'il y a du muscle.
        </Paragraph>
        <Paragraph fontStyle='italic' fontWeight='500'>
          Le fascia fournit une structure, un soutien et une protection au
          corps.
        </Paragraph>
        <Paragraph>
          Les traumatismes, les réponses inflammatoires et/ou les interventions
          chirurgicales créent des restrictions myofasciales qui peuvent
          produire des tractions d'environ 150 kg par cm2 sur des structures
          sensibles à la douleur. Ces restrictions n'apparaissent pas dans la
          plupart des tests standard (radiographies, myélogrammes,
          tomodensitométrie, électromyographie, etc.). Un pourcentage élevé de
          personnes et de chevaux souffrant de douleurs et/ou d'un manque de
          mouvement peuvent avoir des problèmes de fascia qui ne sont pas
          diagnostiqués par la médecine conventionnelle.
        </Paragraph>
      </Stack>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={libMyo2}
          pictureAlt='Libération Myofasciale'
          order='row-reverse'
        >
          <SubTitle>LIBÉRATION MYOFASCIALE</SubTitle>
          <Paragraph>
            La libération myofasciale est une technique en trois dimensions,
            appliquant une pression uniforme dans le système fascial. C'est une
            technique interactive qui nécessite un retour d'information du
            corps.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={libMyo1}
          pictureAlt='Libération Myofasciale'
          order='row'
        >
          <Paragraph>
            La séance nécessite de la patience et de l'écoute pour permettre la
            libération myofasciale et atteindre tous les composants de
            l'aponévrose. C'est ainsi qu'on obtient un résultat plus permanent
            et une restauration de la longueur et de l'intégrité de ce tissu.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='right' duration='2000' triggerOnce>
        <Section
          picture={libCrane1}
          pictureAlt='Libération Cranio-Sacrale'
          order='row-reverse'
        >
          <SubTitle>LIBÉRATION CRANIO-SACRALE</SubTitle>
          <Paragraph>
            Le système cranio-sacral est constitué de la dure mère, une membrane
            fibreuse qui contient le liquide céphalo-rachidien (LCR) qui entoure
            le cerveau et qui va jusqu'au sacrum. Le système cranio-sacral joue
            un rôle essentiel dans le fonctionnement du système nerveux central.
          </Paragraph>
          <Paragraph>
            La dure-mère est le lien entre les os crâniens et sacrés et est donc
            au centre de la thérapie cranio-sacrale. Les restrictions le long de
            la dure-mère entraînent des restrictions dans tout le système
            fascial et le corps.
          </Paragraph>
        </Section>
      </Slide>
      <Slide direction='left' duration='2000' triggerOnce>
        <Section
          picture={libCrane2}
          pictureAlt='Libération Cranio-Sacrale'
          order='row'
        >
          <Stack spacing={2}>
            <Paragraph>
              Le système cranio-sacral joue un rôle essentiel dans le maintien
              de l'environnement dans lequel fonctionne le système nerveux
              central.
            </Paragraph>
            <Paragraph>
              Le cerveau et la colonne vertébrale sont complètement enfermés
              dans la dure-mère, qui est ensuite remplie de liquide
              céphalo-rachidien (LCR). Le LCR est continuellement
              réapprovisionné sur une période de 24 heures. Ensemble, ces deux
              éléments protègent et nourrissent le cerveau et la mœlle épinière.
            </Paragraph>
          </Stack>
        </Section>
      </Slide>
      <Paragraph fontStyle='italic' fontWeight='500'>
        L'approche cranio-sacrale libère les tissus dans et autour du système
        cranio-sacral (le cerveau, la colonne vertébrale et les structures
        environnantes) pour améliorer le flux de liquide céphalo-rachidien. Le
        LCR nourrit, protège et nettoie le système nerveux central et améliore
        la conductivité nerveuse. Un flux amélioré fournit au corps les
        ressources qui lui permettent de mieux fonctionner et, si nécessaire, de
        se soigner lui-même et de restaurer les fonctions dans un état mieux
        équilibré.
      </Paragraph>
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

export default LiberationMyofasciale;
