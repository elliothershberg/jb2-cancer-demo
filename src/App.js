import { makeStyles } from '@material-ui/core/styles'
import icon from './icon.ico'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LinkIcon from '@material-ui/icons/Link'

import LinearView from './LinearView'
import DrawerToc from './DrawerToc'

const useStyles = makeStyles(theme => ({
  icon: {
    width: 48,
    height: 48,
    marginTop: 8,
    marginRight: 12,
  },
  title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  toolbar: {
    background: '#0d233f',
  },
  paperBackground: {
    maxWidth: '800px',
    width: '90%',
    margin: '15px auto',
    padding: 15,
  },
  sectionHeader: {
    marginLeft: 10,
  },
  sectionBody: {
    margin: 10,
    fontSize: 20,
    lineHeight: 1.4,
  },
  linkFooter: {
    textAlign: 'center',
    lineHeight: 2,
  },
  navPath: {
    backgroundColor: '#0d233f',
    color: '#fff',
    padding: 5,
    borderRadius: 8,
  },
  figure: {
    width: '100%',
  },
  clickableImage: {
    border: '2px solid #0d233f',
    display: 'flex',
    alignContent: 'center',
    borderRadius: 4,
    padding: 5,
  },
  unclickableImage: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 5,
  },
  anchor: {},
}))

function Header() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          <img alt="logo" src={icon} className={classes.icon} />
          JBrowse 2 Cancer Demo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

function Introduction() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#introduction"
          name="introduction"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h3">
          Introduction
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            Cancer is fundamentally a genetic disease. Because of this, the
            genomics revolution has had a profound impact on the field of cancer
            biology. The new discipline of cancer genomics has generated data at
            an{' '}
            <a
              href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002195"
              target="_blank"
              rel="noreferrer"
            >
              astronomical scale
            </a>
            . Over the last decade, a large number of scientific consortiums
            have applied short-read sequencing to thousands of cancer samples,
            considerably accelerating our understanding of cancer.
          </p>
          <p>
            In recent years, the speed of data generation has only accelerated,
            and new long-read sequencing technologies have enabled the{' '}
            <a
              href="https://genome.cshlp.org/content/early/2018/06/28/gr.231100.117.abstract"
              target="_blank"
              rel="noreferrer"
            >
              exploration
            </a>{' '}
            of previously inaccessible aspects of cancer genome biology.
            However, these technologies pose new challenges for genomic analysis
            and visualization software. During the development of JBrowse 2, one
            our core goals has been to develop new workflows and{' '}
            <strong>views</strong> to help researchers derive insights ranging
            from the genome scale to the nucleotide scale using diverse
            sequencing technologies and data formats.
          </p>
          <p>
            This demo will use a variety of new powerful features of JBrowse 2
            to analyze the{' '}
            <a
              href="http://schatz-lab.org/publications/SKBR3/"
              target="_blank"
              rel="noreferrer"
            >
              SKBR3
            </a>{' '}
            sequencing data made publicly available by the{' '}
            <a href="http://schatz-lab.org/" target="_blank" rel="noreferrer">
              Schatz Lab
            </a>{' '}
            at Johns Hopkins University. You can follow along by using links
            below which provide access to a demo instance of JBrowse 2 with the
            necessary loaded data, as well as a list of data URLs that you can
            load on your own. Additionally,{' '}
            <strong>
              every image with a blue border can be clicked on to open the
              corresponding demo in JBrowse 2
            </strong>
            .
          </p>
          <p className={classes.linkFooter}>
            <a
              href="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/index.html"
              target="_blank"
              rel="noreferrer"
            >
              JBrowse 2 Cancer Demo Link
            </a>
            <br />
            <a
              href="https://jbrowse.org/genomes/hg19/skbr3/data.txt"
              target="_blank"
              rel="noreferrer"
            >
              SKBR3 Data Resources
            </a>
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function ClickableImage(props) {
  const classes = useStyles()
  return (
    <div className={classes.clickableImage}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img className={classes.figure} src={props.imgSrc} alt={props.imgAlt} />
      </a>
    </div>
  )
}

function UnclickableImage(props) {
  const classes = useStyles()
  return (
    <div className={classes.unclickableImage}>
      <img className={classes.figure} src={props.imgSrc} alt={props.imgAlt} />
    </div>
  )
}

function GlobalView() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#global-view"
          name="global-view"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h3">
          A Global View
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            One of the core benefits of the development of long-read sequencing
            technologies has been the greatly increased accuracy and resolution
            of detecting structural variation. In order to accommodate the
            analysis of structural variation, we have developed the SV
            Inspector. The SV inspector is a combination of two{' '}
            <strong>views</strong>:
          </p>
          <ol>
            <li>
              A Circular view which draws arcs connecting structural variants
              across chromosomes
            </li>
            <li>
              A Spreadsheet view which can be using to dynamically sort and
              filter the data set being visualized
            </li>
          </ol>
          <p>
            The SV inspector can be opened from the menu:{' '}
            <strong className={classes.navPath}>
              File {'-->'} Add {'-->'} SV Inspector
            </strong>
          </p>
          <p>
            Here is the SV Inspector loaded with{' '}
            <a
              href="https://s3.amazonaws.com/jbrowse.org/genomes/hg19/skbr3/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam.sniffles1kb_auto_l8_s5_noalt.new.vcf"
              target="_blank"
              rel="noreferrer"
            >
              SKBR3 Variants
            </a>{' '}
            called from PacBio long-reads data using Sniffles:
          </p>
          <ClickableImage
            link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/index.html?config=test_data%2Fconfig_cancer.json&session=share-tChX293HVJ&password=OX04k"
            imgSrc="skbr3-sv-inspector.png"
            imgAlt="JBrowse 2 SV inspector with SKBR3 data"
          />
          <p>
            Wow! With this view, it is visually apparent that SKBR3 has a
            tremendous amount of structural variation. Chromosome 8 contains the
            largest amount of variation within the SKBR3 genome. The spreadsheet
            can be used to create a filter for all translocations originating
            from chromosome 8. (The column filter controls can be accessed by
            clicking on the column header.) The filter will cause the Circular
            view to dynamically update:
          </p>
          <ClickableImage
            link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/index.html?config=test_data%2Fconfig_cancer.json&session=share-TovuCfqHzh&password=HniKM"
            imgSrc="skbr3-sv-inspector-chr8.png"
            imgAlt="JBrowse 2 SV inspector with SKBR3 data for chr8"
          />
          <p>
            Using the SV inspector, we were able to visually assess structural
            variation on the genome scale. In the next section, we will explore
            new <strong>views</strong> that can help to further analyze the
            structural variation taking place on chromosome 8.
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function DrillingDown() {
  const classes = useStyles()
  // 125027 split detail
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#drilling-down"
          name="drilling-down"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h3">
          Drilling Down
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            While the genome scale <strong>view</strong> of structural variation
            is informative, it is time to drill down to higher resolution, and
            investigate one of these translocations. Clicking on one of the arcs
            on the Circular <strong>view</strong> will open up the split detail{' '}
            <strong>view</strong>:
          </p>
          <ClickableImage
            link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/?config=test_data%2Fconfig_cancer.json&session=share-4j_j0evV7V&password=0G6Mx"
            imgSrc="skbr3-split-detail.png"
            imgAlt="SKBR3 chrom8 chrom17 split detail view"
          />
          <p>
            With this <strong>view</strong> open, next we can toggle linked
            scrolls and behavior across <strong>views</strong> using the button
            in the top left corner, and then open the track for the PacBio
            sequencing reads (splitters only):
          </p>
          <ClickableImage
            link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/?config=test_data%2Fconfig_cancer.json&session=share-kxgcLjxfgE&password=l7tXf"
            imgSrc="skbr3-split-pacbio.png"
            imgAlt="SKBR3 split detail view with PacBio track"
          />
          <p>
            The arcs connect reads across breakpoints. Scrolling down, there is
            an interesting read right by the translocation point that also maps
            to chromosome 17. Clicking on it, the read attributes show that this
            read had supplementary alignments (SA) on chromosome 17. Right
            clicking on the read gives several options:
          </p>
          <UnclickableImage
            imgSrc="skbr3-read-options.png"
            imgAlt="the options for an SKBR3 PacBio read"
          />
          <p>
            Clicking on the "linear read vs. ref" option will open the following{' '}
            <strong>view</strong>:
          </p>
          <ClickableImage
            link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/index.html?config=test_data%2Fconfig_cancer.json&session=share-xA5W0bzORh&password=55UF7"
            imgSrc="skbr3-linear-vs-ref.png"
            imgAlt="A linear vs. ref view of a SKBR3 PacBio read"
          />
          {/* https://en.wikipedia.org/wiki/GSDMB */}
          <p>
            This <strong>view</strong> shows where the read maps onto the
            reference genome. By zooming in and turning on the Gencode
            annotation track, we can see that the read maps to both GSDMB on
            chromosome 17, as well as another gene on chromosome 8:
          </p>
          <ClickableImage
            link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/?config=test_data%2Fconfig_cancer.json&session=share-w5e3cjDnVr&password=Fa4kO"
            imgSrc="skbr3-gene-fusion.png"
            imgAlt="A gene fusion between chrom17 and chrom8 in an skbr3 pacbio read"
          />
          <p>
            Clicking on the gencode annotation on chromosome 8, we see that it
            is TATDN1:
          </p>
          <div className={classes.unclickableImage}>
            <img
              style={{ width: '40%' }}
              src="skbr3-TATDN1-info.png"
              alt="skbr3 TATDN1 info"
            />
          </div>
          <p>
            Wow! Simply by performing visual analysis and leveraging the
            integration between <strong>views</strong> in JBrowse 2, we have
            honed in on an intuitive visualization of one of the reads
            supporting the GSDMB-TATDN1 gene fusion that has been observed in
            the SKBR3 cell line.
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function Sharing() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#sharing"
          name="sharing"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h3">
          Sharing With Collaborators
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            When you discover an important or interest aspect of your data, it
            is important to be able to quickly and easily share what you have
            found with your collaborators. An exciting new aspect of JBrowse 2
            is that you can easily share the entire state of your current
            session including data or tracks you may have loaded with the click
            of a button. Clicking the "Share" button in the top center of
            JBrowse 2 will open the following menu:
          </p>
          <UnclickableImage
            imgSrc="jbrowse-share.png"
            imgAlt="the form to share a JBrowse 2 session"
          />
          <p>
            Behind the scenes, this creates an end-to-end encrypted copy of your
            session that only people with the generated link will have access
            to. This link can be copied to your clipboard, and sent to
            collaborators. They will be able to easily load up the same session
            in their browser by accessing the link.
          </p>
          {/* add "click to tweet" link here */}
          <p>
            To give it a spin, try looking for a <strong>view</strong> that you
            find exciting, and share it with us on Twitter! We would love to see
            your awesome findings!
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function Embed() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#embed"
          name="embed"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h3">
          Embed JBrowse 2 in Your App
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            In contrast to JBrowse 1, JBrowse 2 is designed to have many{' '}
            <strong>views</strong> and features that work together as a robust,
            standalone web application for genomic visualization and analysis.
            However, it is still completely possible to embed JBrowse 2 in your
            own application. We have published a{' '}
            <a
              href="https://github.com/GMOD/jbrowse-components/tree/master/products/jbrowse-react-linear-genome-view"
              target="_blank"
              rel="noreferrer"
            >
              linear genome <strong>view</strong> React component
            </a>{' '}
            which can be configured and embedded directly into a web page. In
            fact, you can see what it looks like when configured with SKBR3 data
            directly below this section. You can navigate to the locations of
            the genes in the browser by clicking on them.
          </p>
          <p>
            Importantly, you don't have to be a React developer to add this
            component to your page. You can{' '}
            <a
              href="https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute"
              target="_blank"
              rel="noreferrer"
            >
              add React in one minute
            </a>{' '}
            to your website, by adding the necessary CDNs along with the JBrowse
            component. We can't wait to see the awesome ways you use this
            component!
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function Conclusion() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#conclusion"
          name="conclusion"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h3">
          Conclusion
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            We have reached the end of this JBrowse 2 demo for cancer genomics!
            Hopefully this has given a taste of how JBrowse 2 can handle a wide
            variety of data types and formats, and provides powerful{' '}
            <strong>views</strong> that can connect disparate information
            together coherently to provide insight. We think that this is one of
            the things that makes JBrowse 2 a really special platform for
            genomics visualization and analysis.
          </p>
          <p>
            If you have questions or ideas about how to use JBrowse 2, please
            get in touch with the developers on our{' '}
            <a
              href="https://gitter.im/GMOD/jbrowse2"
              target="_blank"
              rel="noreferrer"
            >
              Gitter channel.
            </a>
          </p>
          <p style={{ textAlign: 'center', marginTop: '3em' }}>
            🧬 Happy genome browsing! 🧬
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function App() {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <DrawerToc />
      <Paper className={classes.paperBackground} elevation={3}>
        <Introduction />
        <GlobalView />
        <DrillingDown />
        <Sharing />
        <Embed />
        <LinearView />
        <Conclusion />
      </Paper>
    </div>
  )
}

export default App
