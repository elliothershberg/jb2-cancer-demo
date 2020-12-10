import icon from './icon.ico'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

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
    <div>
      <Typography className={classes.sectionHeader} variant="h3">
        Introduction
      </Typography>
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
          . Over the last decade, a large number of scientific consortiums have
          applied short-read sequencing to thousands of cancer samples,
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
          of previously inaccessible aspects of cancer genome biology. However,
          these technologies pose new challenges for genomic analysis and
          visualization software. During the development of JBrowse 2, one our
          core goals has been to develop new workflows and{' '}
          <strong>views</strong> to help researchers derive insights ranging
          from the genome scale to the nucleotide scale using diverse sequencing
          technologies and data formats.
        </p>
        <p>
          This demo will use a variety of new powerful features of JBrowse 2 to
          analyze the{' '}
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
          at Johns Hopkins University. You can follow along by using links below
          which provide access to a demo instance of JBrowse 2 with the
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
    </div>
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

function GlobalView() {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.sectionHeader} variant="h3">
        A Global View
      </Typography>
      <div className={classes.sectionBody}>
        <p>
          One of the core benefits of the development of long-read sequencing
          technologies has been the greatly increased accuracy and resolution of
          detecting structural variation. In order to accommodate the analysis
          of structural variation, we have developed the SV Inspector. The SV
          inspector is a combination of two <strong>views</strong>:
        </p>
        <ol>
          <li>
            A Circos view which draws arcs connecting structural variants across
            chromosomes
          </li>
          <li>
            A Spreadsheet view which can be using to dynamically sort and filter
            the data set being visualized
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
          </a>
        </div>

        <p>
          Wow! With this view, it is visually apparent that SKBR3 has a
          tremendous amount of structural variation. Chromosome 8 contains the
          largest amount of variation within the SKBR3 genome. The spreadsheet
          can be used to create a filter for all translocations originating from
          chromosome 8. (The column filter controls can be accessed by clicking
          on the column header.) The filter will cause the Circos view to
          dynamically update:
        </p>
        <ClickableImage
          link="https://s3.amazonaws.com/jbrowse.org/code/jb2/1322_cancer_genome_demo/index.html?config=test_data%2Fconfig_cancer.json&session=share-TovuCfqHzh&password=HniKM"
          imgSrc="skbr3-sv-inspector-chr8.png"
          imgAlt="JBrowse 2 SV inspector with SKBR3 data for chr8"
        />
          </a>
        </div>
        <p>
          Using the SV inspector, we were able to visually assess structural
          variation on the genome scale. In the next section, we will explore
          new <strong>views</strong> that can help to further analyze the
          structural variation taking place on chromosome 8.
        </p>
      </div>
    </div>
  )
}

function App() {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Paper className={classes.paperBackground} elevation={3}>
        <Introduction />
        <GlobalView />
      </Paper>
    </div>
  )
}

export default App
