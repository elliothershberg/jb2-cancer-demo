import React from 'react'
import 'fontsource-roboto'
import {
  createViewState,
  createJBrowseTheme,
  JBrowseLinearGenomeView,
  ThemeProvider,
} from '@jbrowse/react-linear-genome-view'

const theme = createJBrowseTheme()

const assembly = {
  name: 'hg19',
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'GRCh37-ReferenceSequenceTrack',
    adapter: {
      type: 'BgzipFastaAdapter',
      fastaLocation: {
        uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz',
      },
      faiLocation: {
        uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.fai',
      },
      gziLocation: {
        uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.gzi',
      },
    },
  },
  aliases: ['GRCh37'],
  refNameAliases: {
    adapter: {
      type: 'RefNameAliasAdapter',
      location: {
        uri:
          'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/hg19_aliases.txt',
      },
    },
  },
}

const tracks = [
  {
    type: 'FeatureTrack',
    trackId: 'ncbi_gff_hg19',
    name: 'NCBI RefSeq (GFF3Tabix)',
    assemblyNames: ['hg19'],
    category: ['Annotation'],
    metadata: {
      source: 'https://www.ncbi.nlm.nih.gov/genome/guide/human/',
      dateaccessed: '12/03/2020',
    },
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/ncbi_refseq/GRCh37_latest_genomic.sort.gff.gz',
      },
      index: {
        location: {
          uri:
            'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/ncbi_refseq/GRCh37_latest_genomic.sort.gff.gz.tbi',
        },
      },
    },
  },
  // {
  //   "type": "AlignmentsTrack",
  //   "trackId": "ngmlr",
  //   "name": "SKBR3 pacbio (NGMLR)",
  //   "assemblyNames": ["hg19"],
  //   "category": ["SKBR3"],
  //   "adapter": {
  //     "type": "BamAdapter",
  //     "bamLocation": {
  //       "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/hg19/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam"
  //     },
  //     "index": {
  //       "location": {
  //         "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/hg19/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam.bai"
  //       }
  //     }
  //   }
  // },
]

const defaultSession = {
  name: 'My session',
  view: {
    id: 'linearGenomeView',
    type: 'LinearGenomeView',
    tracks: [
      {
        type: 'ReferenceSequenceTrack',
        configuration: 'GRCh37-ReferenceSequenceTrack',
        displays: [
          {
            type: 'LinearReferenceSequenceDisplay',
            configuration:
              'GRCh37-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
          },
        ],
      },
      // {
      //   type: 'FeatureTrack',
      //   configuration: 'ncbi_gff_hg19',
      //   displays: [
      //     {
      //       type: 'LinearBasicDisplay',
      //       configuration: 'ncbi_gff_hg19-LinearBasicDisplay',
      //     },
      //   ],
      // },
    ],
  },
}

function LinearView() {
  const state = createViewState({
    assembly,
    tracks,
    location: '10:29,838,737..29,838,819',
    defaultSession,
  })
  return (
    <ThemeProvider theme={theme}>
      <JBrowseLinearGenomeView viewState={state} />
    </ThemeProvider>
  )
}

export default LinearView
