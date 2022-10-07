import { styled } from '@mui/material'

export const ListStyledClean = styled('h2')`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(20, 0)};
`

export const ListStyled = styled('ul')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacing(9)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.spacing(8)};
  }
`

export const ListItemStyled = styled('li')`
  list-style: none;
`

export const FotoStyled = styled('img')`
  width: 100%;
`

export const InformationStyled = styled('div')``

export const NameStyled = styled('h3')`
  margin: 16px 0 0 0;
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`

export const ValueStyled = styled('p')`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
`

export const DescriptionStyled = styled('p')`
  word-break: break-word;
`
