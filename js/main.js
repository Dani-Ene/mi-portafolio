// ── i18n ──
const translations = {
    en: {
        role: "Web Developer",
        nav_about: "About", nav_experience: "Experience", nav_education: "Education",
        nav_skills: "Skills", nav_projects: "Projects", nav_languages: "Languages", nav_contact: "Contact",
        hero_tag: "Web Developer · DAW Student · Erasmus+ 🇮🇸",
        hero_bio: "Web developer and DAW student from Spain, currently on an Erasmus+ internship in Reykjavík, Iceland — managing and developing two WordPress production websites for the Reykjavík International Film Festival.",
        hero_cta: "Get in touch",
        about_label: "Who I am", about_title: "About Me",
        about_p1: "I'm a detail-oriented and fast-learning web developer who thrives in dynamic environments. I adapt quickly, enjoy solving complex problems, and care deeply about the quality of my work.",
        about_p2: "Currently doing an Erasmus+ internship at the Reykjavík International Film Festival (RIFF) in Iceland, where I manage two live WordPress sites — handling everything from Elementor Pro and custom CSS/JS to plugin management, SEO, and branding.",
        about_p3: "I also have a background in administration, having worked at Onda Cero and Europa FM radio stations in Spain — which gives me a unique mix of technical and organizational skills.",
        detail_location_label: "Currently", detail_location: "Reykjavík, Iceland 🇮🇸",
        detail_study_label: "Studying", detail_open_label: "Status",
        detail_open: "Open to opportunities", detail_base_label: "Based in",
        present: "Present",
        exp_label: "What I've done", exp_title: "Experience",
        exp1_title: "WordPress Developer · Erasmus+",
        exp1_desc: "Managing and developing two production WordPress websites using Elementor Pro, custom CSS/JS, plugin ecosystems, SEO, performance optimization and branding. Built scroll-based timelines, WooCommerce customizations, popup integrations and security hardening.",
        exp2_title: "Administrative Technician",
        exp2_desc: "Advertising management, billing, cash management, supplies and customer service at two major Spanish radio stations.",
        exp3_title: "Administrative Assistant · Internship",
        exp3_desc: "Document archiving, digitization and database management.",
        edu_label: "Where I learned", edu_title: "Education",
        edu1_title: "Higher Degree in Web Application Development",
        edu1_desc: "Full-stack web development: React, Angular, Java Spring Boot, Node.js, databases, cloud deployment and Erasmus+ mobility program.",
        edu2_title: "Mid-level Degree in Administrative Management",
        edu2_desc: "Business administration, accounting, office management and organizational processes.",
        skills_label: "What I work with", skills_title: "Skills",
        proj_label: "What I've built", proj_title: "Projects",
        proj1_type: "Erasmus+ · Live Production",
        proj1_desc: "Two live WordPress websites for the Reykjavík International Film Festival — managed during my Erasmus+ internship in Iceland. Custom CSS/JS, Elementor Pro, WooCommerce, plugin management, SEO and performance optimization.",
        proj1_highlights: "Highlights: scroll-based animated timeline, custom puffin cursor, WooCommerce product page customization, Issuu flipbook popup integration, brute force protection, LiteSpeed cache setup.",
        proj2_type: "TFG · Full-Stack App",
        proj2_desc: "Travel planner web app with React + Node.js + Tailwind CSS and Firebase authentication. Features trip planning, weather integration and points of interest.",
        proj3_type: "Academic · Java",
        proj3_desc: "Web application in Java with Spring Boot MVC architecture and custom API integration.",
        lang_label: "How I communicate", lang_title: "Languages",
        native: "Native",
        contact_label: "Let's talk", contact_title: "Contact",
        contact_text: "I'm always open to new opportunities, collaborations or just a good conversation about web development. Feel free to reach out!",
    },
    es: {
        role: "Desarrolladora Web",
        nav_about: "Sobre mí", nav_experience: "Experiencia", nav_education: "Educación",
        nav_skills: "Habilidades", nav_projects: "Proyectos", nav_languages: "Idiomas", nav_contact: "Contacto",
        hero_tag: "Desarrolladora Web · Estudiante DAW · Erasmus+ 🇮🇸",
        hero_bio: "Desarrolladora web y estudiante de DAW, actualmente en una beca Erasmus+ en Reikiavik, Islandia — gestionando y desarrollando dos sitios WordPress en producción para el Festival Internacional de Cine de Reikiavik.",
        hero_cta: "Contáctame",
        about_label: "Quién soy", about_title: "Sobre mí",
        about_p1: "Soy una persona detallista y con mucha facilidad para aprender, que se adapta rápido a entornos dinámicos. Me gusta resolver problemas complejos y me importa mucho la calidad de mi trabajo.",
        about_p2: "Actualmente realizando una beca Erasmus+ en el Festival Internacional de Cine de Reikiavik (RIFF) en Islandia, donde gestiono dos sitios WordPress en producción — desde Elementor Pro y CSS/JS personalizado hasta gestión de plugins, SEO y branding.",
        about_p3: "También tengo experiencia en administración, habiendo trabajado en las emisoras de radio Onda Cero y Europa FM en España, lo que me da una combinación única de habilidades técnicas y organizativas.",
        detail_location_label: "Actualmente", detail_location: "Reikiavik, Islandia 🇮🇸",
        detail_study_label: "Estudiando", detail_open_label: "Estado",
        detail_open: "En búsqueda de oportunidades", detail_base_label: "Resido en",
        present: "Actualidad",
        exp_label: "Lo que he hecho", exp_title: "Experiencia",
        exp1_title: "Desarrolladora WordPress · Erasmus+",
        exp1_desc: "Gestión y desarrollo de dos sitios WordPress en producción con Elementor Pro, CSS/JS personalizado, ecosistema de plugins, SEO, optimización de rendimiento y branding. Timelines con scroll animado, personalizaciones WooCommerce, integración de popups y seguridad.",
        exp2_title: "Técnico Administrativo",
        exp2_desc: "Gestión de publicidad, facturación, caja, suministros y atención al cliente en dos grandes emisoras de radio españolas.",
        exp3_title: "Auxiliar Administrativo · Prácticas",
        exp3_desc: "Archivo, digitalización de documentos y gestión de bases de datos.",
        edu_label: "Dónde aprendí", edu_title: "Educación",
        edu1_title: "Grado Superior en Desarrollo de Aplicaciones Web",
        edu1_desc: "Desarrollo web full-stack: React, Angular, Java Spring Boot, Node.js, bases de datos, despliegue en cloud y programa de movilidad Erasmus+.",
        edu2_title: "Grado Medio en Gestión Administrativa",
        edu2_desc: "Administración de empresas, contabilidad, gestión de oficina y procesos organizativos.",
        skills_label: "Con qué trabajo", skills_title: "Habilidades",
        proj_label: "Lo que he construido", proj_title: "Proyectos",
        proj1_type: "Erasmus+ · Producción en vivo",
        proj1_desc: "Dos sitios WordPress en producción para el Festival Internacional de Cine de Reikiavik — gestionados durante mi beca Erasmus+ en Islandia. CSS/JS personalizado, Elementor Pro, WooCommerce, plugins, SEO y optimización de rendimiento.",
        proj1_highlights: "Destacados: timeline animado con scroll, cursor de frailecillo personalizado, personalización de productos WooCommerce, integración de flipbook Issuu en popup, protección de fuerza bruta, configuración de LiteSpeed cache.",
        proj2_type: "TFG · App Full-Stack",
        proj2_desc: "Aplicación web de planificación de viajes con React + Node.js + Tailwind CSS y autenticación Firebase. Incluye planificación de rutas, integración del tiempo y puntos de interés.",
        proj3_type: "Académico · Java",
        proj3_desc: "Aplicación web en Java con arquitectura Spring Boot MVC e integración de API personalizada.",
        lang_label: "Cómo me comunico", lang_title: "Idiomas",
        native: "Nativo",
        contact_label: "Hablemos", contact_title: "Contacto",
        contact_text: "Siempre estoy abierta a nuevas oportunidades, colaboraciones o simplemente una buena conversación sobre desarrollo web. ¡No dudes en escribirme!",
    }
};

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.documentElement.lang = lang;
}

// ── Active nav on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar nav a');

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => revealObserver.observe(s));