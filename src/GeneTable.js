import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import Typography from '@material-ui/core/Typography'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  tableHeader: {
    textAlign: 'center',
    margin: 5,
  },
  table: {
    width: '80%',
    margin: '0 auto',
    marginBottom: 15,
  },
})

function createData(geneA, geneALoc, geneB, geneBLoc) {
  return { geneA, geneALoc, geneB, geneBLoc }
}

const rows = [
  createData(
    'KLHDC2',
    'chr14:50,234,326-50,249,909',
    'SNTB1',
    'chr8:121,547,985-121,825,513',
  ),
  createData(
    'CYTH1',
    'chr17:76,670,130-76,778,379',
    'EIF3H',
    'chr8:117,654,369-117,779,164',
  ),
  createData(
    'CPNE1',
    'chr20:34,213,953-34,252,878',
    'PREX1',
    'chr20:47,240,790-47,444,420',
  ),
  createData(
    'GSDMB',
    'chr17:38,060,848-38,076,107',
    'TATDN1',
    'chr8:125,500,726-125,551,699',
  ),
  createData(
    'LINC00536',
    'chr8:116,962,736-117,337,297',
    'PVT1',
    'chr8:128,806,779-129,113,499',
  ),
]

export default function GeneTable(props) {
  const classes = useStyles()

  const locButton = (gene, loc) => (
    <Button variant="contained" onClick={() => console.log(props.navTo(loc))}>
      {gene}
    </Button>
  )

  return (
    <>
      <Typography className={classes.tableHeader} variant="h5">
        Table of SKBR3 Gene Fusions (
        <a
          href="https://genome.cshlp.org/content/early/2018/06/28/gr.231100.117.abstract"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
        )
      </Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="gene fusion table">
          <TableHead>
            <TableRow>
              <TableCell>Gene A</TableCell>
              <TableCell>Gene B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.geneA}>
                <TableCell>{locButton(row.geneA, row.geneALoc)}</TableCell>
                <TableCell>{locButton(row.geneB, row.geneBLoc)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
