import axios from "axios"

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

const BLOG = [
    {
        text: '¿Cómo integrar Whatsapp en tu empresa?',
        url: 'https://www.pixeladas.es/es/blog/comunicaciones/whatsapp-empresa/'
    },
    {
        text: 'Conoce las mejores Centralitas Virtuales GRATIS',
        url: 'https://www.pixeladas.es/es/blog/comparativas/10-centralitas-virtuales-gratis/'
    },
    {
        text: '¿Cómo puedes conseguir SEMRUSH totalmente gratis?',
        url: 'https://www.pixeladas.es/es/blog/marketing-digital/semrush-gratis/'
    },
    {
        text: 'Review de SEMRUSH 2023',
        url: 'https://www.pixeladas.es/es/blog/reviews/semrush/'
    },
    {
        text: '¿Qué es una centralita VoIP?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-una-centralita-virtual/'
    },
    {
        text: '¿Cual es la diferencia entre SEO y SEM?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/diferencia-seo-y-sem/'
    },
    {
        text: 'Aprende qué significa SEO',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-seo/'
    },
    {
        text: '¿Que significan las siglas VoIP?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-voip/'
    },
    {
        text: 'Funcionalidades extraordinarias de Hubspot',
        url: 'https://www.pixeladas.es/es/blog/crm/funcionalidades-extraordinarias-hubspot/'
    },
    {
        text: 'La mejor review de Cloudtalk 2023',
        url: 'https://www.pixeladas.es/es/blog/reviews/cloudtalk/'
    },
    {
        text: 'La mejor review de Aircall 2023',
        url: 'https://www.pixeladas.es/es/blog/reviews/aircall/'
    },
    {
        text: 'La mejor review de Siteground 2023',
        url: 'https://www.pixeladas.es/es/blog/reviews/siteground/'
    },
    {
        text: '¿Cómo implementar Mailchimp en Wordpress',
        url: 'https://www.pixeladas.es/es/blog/tutoriales/mailchimp-wordpress/'
    },
    {
        text: 'La mejor review de Crocoblock 2023',
        url: 'https://www.pixeladas.es/es/blog/reviews/crocoblock/'
    },
    {
        text: 'Comparativa Aircall vs Cloudtalk vs Zadarma',
        url: 'https://www.pixeladas.es/es/blog/comparativas/aircall-cloudtalk-zadarma/'
    },
    {
        text: 'La mejor review de Zaradma 2023',
        url: 'https://www.pixeladas.es/es/blog/reviews/zadarma/'
    },
    {
        text: '¿Qué es SEMRUSH Sensor?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/semrush-sensor/'
    },
    {
        text: '¿Qué es Mailchimp?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-mailchimp/'
    },
    {
        text: '¿Qué es el SEO On Page',
        url: 'https://www.pixeladas.es/es/blog/definiciones/se-ranking-seo-on-page/'
    },
    {
        text: '¿Para qué sirve Elementor?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-elementor/'
    },
    {
        text: '¿Qué son las landing pages de Mailchimp?',
        url: 'https://www.pixeladas.es/es/blog/tutoriales/mailchimp-landing-page/'
    },
    {
        text: '¿Qué es Semrush?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-semrush/'
    },
    {
        text: '¿Qué es un SEO Manager?',
        url: 'https://www.pixeladas.es/es/blog/definiciones/que-es-un-seo/'
    },
    {
        text: '¿Cómo conseguir Mailchimp gratis?',
        url: 'https://www.pixeladas.es/es/blog/reviews/mailchimp-gratis/'
    },
    {
        text: '¿Cómo integrar Woocommerce con Alipay?',
        url: 'https://www.pixeladas.es/es/blog/tutoriales/woocommerce-alipay/'
    },
    {
        text: '¿Cómo puedes digitalizar tu empresa?',
        url: 'https://www.pixeladas.es/es/blog/tips/como-digitalizar-empresa/'
    },
    
    {
        text: '¿Cómo integrar Typeform y Hubspot?',
        url: 'https://www.pixeladas.es/es/blog/tutoriales/typeform-hubspot/'
    },
    
    {
        text: '¿Cómo puedes integrar Memberpress con Alipay para China?',
        url: 'https://www.pixeladas.es/es/blog/tutoriales/memberpress-alipay/'
    },
    {
        text: 'Los mejores plugins para China para wordpress',
        url: 'https://www.pixeladas.es/es/blog/reviews/china-payments/'
    },
    {
        text: 'Los mejores plugins de Crocoblock',
        url: 'https://www.pixeladas.es/es/blog/reviews/crocoblock-plugins/'
    },
    {
        text: '¿Por qué Astra Theme es el mejor tema para Wordpress?',
        url: 'https://www.pixeladas.es/es/blog/reviews/astra-theme/'
    },
    
    {
        text: '¿Por qué usar Microsoft Clartity para tu WEB?',
        url: 'https://www.pixeladas.es/es/blog/reviews/microsoft-clarity/'
    },
    {
        text: '¿Por qué usar ChatGPT para hacer SEO?',
        url: 'https://www.pixeladas.es/es/blog/reviews/chatgpt-seo/'
    },
    {
        text: '¿Por qué usar ChatGPT para tus campañas SEM de Google ADS?',
        url: 'https://www.pixeladas.es/es/blog/reviews/chatgpt-sem/'
    },
    {
        text: 'Gravity forms, el mejor sistema de formularios para wordpress',
        url: 'https://www.pixeladas.es/es/blog/reviews/gravity-forms/'
    },
    {
        text: 'WPFORMS vs Gravity Forms',
        url: 'https://www.pixeladas.es/es/blog/comparativas/wpforms-vs-gravityforms/'
    },
    {
        text: '¿Qué es Essential Addons for Elementor?',
        url: 'https://www.pixeladas.es/es/blog/reviews/essential-addons/'
    },
    {
        text: 'Comparamos los mejores sistemas de calendarios',
        url: 'https://www.pixeladas.es/es/blog/comparativas/calendly-acuity-dotcal/'
    },
    {
        text: '',
        url: ''
    },
]

async function blog2() {
    const { data } = await axios('https://www.pixeladas.es/wp-json/wp/v2/posts?per_page=100')
    console.log ("LLAMADA A BLOG2")
    console.log (data)
    return data
} 

export {
    SERVICIOS,
    BLOG,
    blog2
}