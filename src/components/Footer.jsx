import React, { useEffect, useState } from 'react'
import '../assets/css/footer.css'
import { Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import axios from 'axios'

const SERVICIOS = [
    {
        text: 'Desarrolladores React y Node JS',
        url: 'https://www.pixeladas.es/es/servicios/desarrolladores-react/'
    },
    {
        text: 'Marketing Digital',
        url: 'https://www.pixeladas.es/es/servicios/marketing-digital/'
    },
    {
        text: 'Servicios SEO y posicionamiento WEB',
        url: 'https://www.pixeladas.es/es/servicios/seo-posicionamiento-web/'
    },
    {
        text: 'SEM',
        url: 'https://www.pixeladas.es/es/servicios/sem-publicidad/'
    },
    {
        text: 'Publicidad y Google ADS',
        url: 'https://www.pixeladas.es/es/servicios/sem-publicidad/'
    },
    {
        text: 'CRM',
        url: 'https://www.pixeladas.es/es/servicios/crm/'
    },
]



const Footer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const consultarApi = async () => {
            const { data } = await axios('https://www.pixeladas.es/wp-json/wp/v2/posts?per_page=100')
            setPosts(data)
        }
        consultarApi()
    }, [])

    return (
        <footer>
            <Container className='footer'>
                {/* <Typography variant='h5' textAlign={'center'} marginY={5}>PIXELADAS</Typography> */}
                <Grid className='enlaces' flexDirection={'row'}
                    divider={<Divider orientation="vertical" flexItem />}
                    container marginY={5}
                >
                    <Grid item md={3} xs={4}>
                        <Typography variant='h6' component={'h3'}>SERVICIOS</Typography>
                        <Grid container spacing={1} marginTop={1.5}>
                            {SERVICIOS.map(servicio => (
                                <Grid item md={12} xs={12}
                                    key={servicio.text}
                                >
                                    <Link href={servicio.url}
                                        target='_blank'
                                        variant='body2'
                                        marginTop={1.5}>
                                        {servicio.text}
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item md={9} xs={8}>
                        <Typography variant='h6' component={'h3'}>BLOG</Typography>
                        <Grid container spacing={1} marginTop={1.5}>
                            {posts.map(post => (
                                <Grid item md={4} xs={6}
                                    key={post.id}
                                >
                                    <Link href={post.link}
                                        target='_blank'
                                        variant='body2'
                                    >
                                        {new DOMParser().parseFromString(`${post.title.rendered}`, 'text/html').body.textContent}
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </footer>
    )
}

export default Footer