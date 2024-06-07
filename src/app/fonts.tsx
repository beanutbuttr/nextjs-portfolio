import { Scada } from 'next/font/google'
import { Mulish } from 'next/font/google'

const scadaBody = Scada({
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: ['normal'], // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin']
})

const scadaTitle = Scada({
  weight: '700', // if single weight, otherwise you use array like [400, 500, 700],
  style: ['italic'], // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin']
})

const mulishTitle = Mulish({
  weight: '300',
  style: ['normal'],
  subsets: ['latin']
})

const mulishBody = Mulish({
  weight: '200',
  style: ['normal'],
  subsets: ['latin']
})
export {scadaBody, scadaTitle, mulishBody, mulishTitle}