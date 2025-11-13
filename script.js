// Default configuration
const defaultConfig = {
    nome_principal: "MAYRA",
    sobre_mim_texto: "Olá, sou Mayra Calegario, tenho 16 anos e estou cursando Desenvolvimento de Sistemas",
    familia_titulo: "Família",
    familia_texto: "A família é a base de tudo. Aqui compartilho momentos especiais e valores que moldaram quem sou hoje.",
    curso_titulo: "Curso",
    curso_texto: "Minha jornada acadêmica e profissional. Descobertas, aprendizados e conquistas que definem meu caminho.",
    esportes_titulo: "Esportes",
    esportes_texto: "Paixão pelo movimento e superação. Os esportes que pratico e como eles transformam minha vida.",
    carros_titulo: "Carros",
    carros_texto: "Velocidade, design e engenharia. Minha paixão por automóveis e as experiências que eles proporcionam.",
    background_color: "#dc2626",
    surface_color: "rgba(255, 255, 255, 0.1)",
    text_color: "#ffffff",
    primary_action_color: "#991b1b",
    secondary_action_color: "rgba(255, 255, 255, 0.2)",
    font_family: "Inter",
    font_size: 16
};

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Element SDK implementation
async function onConfigChange(config) {
    const customFont = config.font_family || defaultConfig.font_family;
    const baseSize = config.font_size || defaultConfig.font_size;
    const baseFontStack = 'system-ui, -apple-system, sans-serif';

    // Update text content
    document.getElementById('nome-principal').textContent = config.nome_principal || defaultConfig.nome_principal;
    document.getElementById('sobre-mim-texto').textContent = config.sobre_mim_texto || defaultConfig.sobre_mim_texto;
    document.getElementById('familia-titulo').textContent = config.familia_titulo || defaultConfig.familia_titulo;
    document.getElementById('familia-texto').textContent = config.familia_texto || defaultConfig.familia_texto;
    document.getElementById('curso-titulo').textContent = config.curso_titulo || defaultConfig.curso_titulo;
    document.getElementById('curso-texto').textContent = config.curso_texto || defaultConfig.curso_texto;
    document.getElementById('esportes-titulo').textContent = config.esportes_titulo || defaultConfig.esportes_titulo;
    document.getElementById('esportes-texto').textContent = config.esportes_texto || defaultConfig.esportes_texto;
    document.getElementById('carros-titulo').textContent = config.carros_titulo || defaultConfig.carros_titulo;
    document.getElementById('carros-texto').textContent = config.carros_texto || defaultConfig.carros_texto;

    // Update colors
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;

    document.body.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${primaryActionColor} 100%)`;
    document.body.style.color = textColor;

    // Update surface colors
    document.querySelectorAll('.section-card').forEach(card => {
        card.style.background = surfaceColor;
    });

    // Update header background
    document.querySelector('header').style.backgroundColor = primaryActionColor + 'e6';

    // Update nav links hover
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = secondaryActionColor;
        });
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Update fonts
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    
    // Update font sizes proportionally
    document.getElementById('nome-principal').style.fontSize = `${baseSize * 1.875}px`;
    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.fontSize = `${baseSize * 1.5}px`;
    });
    document.querySelectorAll('p').forEach(p => {
        p.style.fontSize = `${baseSize}px`;
    });
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ background_color: value });
                    }
                }
            },
            {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                }
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ text_color: value });
                    }
                }
            },
            {
                get: () => config.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ primary_action_color: value });
                    }
                }
            },
            {
                get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ secondary_action_color: value });
                    }
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                if (window.elementSdk) {
                    window.elementSdk.setConfig({ font_family: value });
                }
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                if (window.elementSdk) {
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["nome_principal", config.nome_principal || defaultConfig.nome_principal],
        ["sobre_mim_texto", config.sobre_mim_texto || defaultConfig.sobre_mim_texto],
        ["familia_titulo", config.familia_titulo || defaultConfig.familia_titulo],
        ["familia_texto", config.familia_texto || defaultConfig.familia_texto],
        ["curso_titulo", config.curso_titulo || defaultConfig.curso_titulo],
        ["curso_texto", config.curso_texto || defaultConfig.curso_texto],
        ["esportes_titulo", config.esportes_titulo || defaultConfig.esportes_titulo],
        ["esportes_texto", config.esportes_texto || defaultConfig.esportes_texto],
        ["carros_titulo", config.carros_titulo || defaultConfig.carros_titulo],
        ["carros_texto", config.carros_texto || defaultConfig.carros_texto]
    ]);
}

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}