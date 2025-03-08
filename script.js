const partesInfo = {
    nucleo: {
        titulo: "Núcleo",
        imagen: "img/nucleo.png",
        descripcion: "<p><b>Definición:</b><br>Es el centro de control celular que contiene el ADN, el cual almacena la información genética necesaria para la síntesis de proteínas y la regulación de la actividad celular.</p><br><p><b>Estructura:</b></p><ul><li><b>Envoltura nuclear:</b> Es una doble membrana con poros nucleares que regulan el intercambio de sustancias con el citoplasma.</li><li><b>Nucleoplasma:</b> Fluido interno que contiene el ADN y proteínas como las histonas.</li><li><b>Cromatina:</b> ADN asociado con proteínas, que en la división celular se compacta en cromosomas.</li></ul><br><p><b>Funciones:</b></p><ul><li>Controla la expresión génica y la producción de ARN.</li><li>Coordina la división celular mediante la replicación del ADN.</li><li>Regula el ciclo celular mediante proteínas específicas.</li></ul>"
    },
    mitocondria: {
        titulo: "Mitocondria",
        imagen: "img/mitocondria.jpg",
        descripcion: "<p><b>Definición:</b><br>Orgánulos con doble membrana y ADN propio que generan energía.</p><br><p><b>Estructura:</b></p><ul><li><b>Membrana externa:</b> Permite el paso de moléculas pequeñas.</li><li><b>Membrana interna:</b> Forma crestas donde ocurre la respiración celular.</li><li><b>Matriz mitocondrial:</b> Contiene enzimas del ciclo de Krebs.</li></ul><br><p><b>Funciones:</b></p><ul><li>Produce ATP mediante la respiración celular.</li><li>Participa en la regulación de la apoptosis.</li></ul>"
    },
    reticulo: {
        titulo: "Retículo Endoplasmático",
        imagen: "img/reticulo.jpg",
        descripcion: "<p><b>Definición:</b><br>Es una red de membranas sin ribosomas.</p><br><p><b>Funciones:</b></p><ul><li>Sintetiza lípidos, como fosfolípidos y hormonas esteroides.</li><li>Detoxifica sustancias dañinas en células hepáticas.</li><li>Almacena calcio en células musculares, necesario para la contracción muscular.</li></ul>"
    },
    golgi: {
        titulo: "Aparato de Golgi",
        imagen: "img/golgi.jpg",
        descripcion: "<p><b>Definición:</b><br>Conjunto de sacos membranosos apilados que reciben proteínas y lípidos del RER y REL.</p><br><p><b>Funciones:</b></p><ul><li>Modifica proteínas mediante la adición de azúcares o lípidos.</li><li>Clasifica y empaqueta proteínas en vesículas para su transporte.</li><li>Forma lisosomas y otras vesículas especializadas.</li></ul>"
    },
    lisosomas: {
        titulo: "Lisosomas",
        imagen: "img/lisosoma.jpg",
        descripcion: "<p><b>Definición:</b><br>Vesículas que contienen enzimas digestivas como proteasas y lipasas.</p><br><p><b>Funciones:</b></p><ul><li>Degradan materiales ingeridos por endocitosis.</li><li>Reciclan organelos dañados en un proceso llamado autofagia.</li><li>Mantienen el equilibrio celular mediante la digestión de desechos.</li></ul>"
    },
    membrana: {
        titulo: "Membrana Celular",
        imagen: "img/membrana.png",
        descripcion: "<p><b>Definición:</b><br>Es una bicapa lipídica formada principalmente por fosfolípidos, proteínas y colesterol. Actúa como una barrera semipermeable que separa el medio intracelular del extracelular.</p><br><p><b>Estructura:</b></p><ul><li><b>Fosfolípidos:</b> Forman la estructura básica de la membrana, con cabezas hidrofílicas y colas hidrofóbicas.</li><li><b>Proteínas de membrana:</b> Pueden ser integrales (atraviesan la membrana) o periféricas (adheridas a la superficie). Facilitan el transporte, comunicación celular y reconocimiento.</li><li><b>Colesterol:</b> Regula la fluidez de la membrana, haciéndola más estable.</li></ul><br><p><b>Funciones:</b></p><ul><li>Controla la entrada y salida de sustancias mediante transporte pasivo (difusión simple, facilitada y ósmosis) y activo (bombas iónicas y endocitosis).</li><li>Permite la comunicación celular mediante receptores de membrana.</li><li>Contribuye a la adhesión celular y formación de tejidos.</li></ul>"
    }
};

document.getElementById('selectPartes').addEventListener('change', function() {
    const seleccion = this.value;
    if (seleccion) {
        const parte = partesInfo[seleccion];
        document.getElementById('tituloParte').textContent = parte.titulo;
        document.getElementById('descripcionParte').innerHTML = parte.descripcion;
        document.getElementById('imagenCelula').src = parte.imagen;
        document.getElementById('imagenCelula').alt = parte.titulo;
    }
});