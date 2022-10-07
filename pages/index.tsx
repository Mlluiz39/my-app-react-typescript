import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/list/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Marcelo Luiz',
      avatar: 'https://github.com/mlluiz39.png',
      description: 'Aulas de programação Full Stack.',
      value: 40,
    },
    {
      id: 2,
      name: 'Pereira Souza',
      avatar: 'https://source.unsplash.com/random',
      description: 'Aulas de programação Full Stack.',
      value: 60,
    },
    {
      id: 3,
      name: 'Marcelo Souza',
      avatar: 'https://picsum.photos/200/300?random=1',
      description: 'Aulas de programação Full Stack.',
      value: 38,
    },
    {
      id: 4,
      name: 'Luiz Pereira',
      avatar: 'https://picsum.photos/200/300?random=2',
      description: 'Aulas de programação Full Stack.',
      value: 50,
    },
  ]

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        width: '90%',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <List teachers={teachers}></List>
    </Box>
  )
}

export default Home
