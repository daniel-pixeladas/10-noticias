import React, { useEffect, useState } from 'react'
import '../assets/css/footer.css'
import { Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import { BLOG, SERVICIOS, blog2 } from '../constants/Webconstants'
import axios from 'axios'



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