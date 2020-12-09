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
    maxWidth: '1200px',
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
          core goals has been to develop new <strong>workflows</strong> and{' '}
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
          necessary loaded data, as well as a list of data URLs that you can load
          on your own.
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

function App() {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Paper className={classes.paperBackground} elevation={3}>
        <Introduction />
      </Paper>
    </div>
  )
}

export default App
