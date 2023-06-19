import { useState } from 'react'
import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import NoticiasProvider from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';
import Footer from './components/Footer';
import 'normalize.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3'>Buscador de noticias</Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item lg={4} md={6} xs={12}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />

      </Container>

      <Footer />
    </NoticiasProvider>
  )
}

export default App
