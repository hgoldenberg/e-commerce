const { Categories } = require("./models/index");
const Product = require("./models/product");

//-----------------------------CATEGORIAS-------------------------
const Accion = Categories.create({
  tipo: "Accion",
});
const Aventura = Categories.create({
  tipo: "Aventura",
});
const Deportes = Categories.create({
  tipo: "Deportes",
});
const Infantiles = Categories.create({
  tipo: "Infantiles",
});

//-----------------------------PRODUCTOS-------------------------

const ghostOfTsuhima = Product.create({
  name: "ghost of tsushima",
  price: 1050,
  cantidad: 0,
  stock: 100,
  description:
    "A finales del siglo XIII, el imperio mongol ha acabado con naciones enteras en su campaña de conquista del este. La isla de Tsushima es todo lo que queda entre el Japón continental y un enorme flota de invasión mongola liderada por el despiadado e ingenioso general Khotun Khan. Mientras la isla arde tras la primera oleada de asalto de los mongoles, el guerrero samurái Jin Sakai emerge como uno de los últimos supervivientes de su clan. Está decidido a hacer lo que sea necesario y a cualquier precio para proteger a su gente y recuperar su hogar. Debe desprenderse de las tradiciones que lo han formado como guerrero para forjar un nuevo camino, el camino del Fantasma, y librar una guerra poco convencional por la libertad de Tsushima.",
  imageUno:
    "https://dixgamer.com/wp-content/uploads/2020/06/ghost-of-tsushima-20203517513223_1-330x420.jpg",
  imageDos:
    "https://as.com/meristation/imagenes/2019/12/15/noticias/1576420902_859512_1576421107_noticia_normal.jpg",
});

const pes = Product.create({
  name: "e-football pes 2020",
  price: 1332,
  cantidad: 0,
  stock: 100,
  description:
    "Demuestra tu valía sobre el césped. Vuelve al terreno de juego con el regreso de la auténtica franquicia de fútbol de Konami en PS4. Con Lionel Messi, la superestrella mundial y delantero del F. C. Barcelona, en portada, eFootball PES 2020 presenta nuevas técnicas de regate dinámico y de primer toque, y mejoras en la física del balón, todo desarrollado con la estrecha colaboración del centrocampista español de talla mundial Andrés Iniesta. Y con el modo Liga Master completamente renovado, puedes llevar a tu equipo al éxito con un mercado de traspasos mejorado y más realista y un nuevo sistema de diálogos interactivos que ofrece aún más control sobre el progreso de la historia.",
  imageUno:
    "https://d26lpennugtm8s.cloudfront.net/stores/427/682/products/pes-20201-f38edf6d6f93ae4e2a15619952313656-640-0.jpg",
  imageDos:
    "https://juegosuruguay.com/wp-content/uploads/2019/11/Efootball-Pro-evolution-soccer-Pes-2020-MK11-Fifa-20-COD-MW-Days-Gone-NFS-Heat-juegosuruguay-5.jpg",
});

const Resident = Product.create({
  name: "resident evil 3",
  price: 1807,
  cantidad: 0,
  stock: 100,
  description:
    "Revive la terrorífica caída de Raccoon City en una impresionante versión alternativa del clásico de terror y supervivencia de 1999. En las horas de pesadilla previas y posteriores a los eventos de Resident Evil 2, solo tú puedes ayudar a la oficial de S.T.A.R.S. Jill Valentine a sobrevivir y escapar de una ciudad asolada por el brote de un virus espeluznante Pero los zombis no son la única amenaza ahí fuera. Nemesis T-type, la imponente y casi indestructible arma biológica, también está a la caza. Esta monstruosidad brutal utiliza un arsenal de armas de gran potencia para perseguirte sin descanso por Raccoon City; ningún lugar es realmente seguro.Gracias a una presentación de vanguardia y una jugabilidad de acción y aventura renovada, Resident Evil 3 actualiza el inolvidable final de la historia de Raccoon City de un modo explosivo. ",

  imageUno:
    "https://d26lpennugtm8s.cloudfront.net/stores/082/436/products/re3-remake11-2a96ea4010fa55b81815760773367606-640-0.jpg",
  imageDos:
    "https://depor.com/resizer/kkPXaoLA4nKtdAAtkUXH9Mgz6X4=/1200x800/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UYQQHBLN75GJNLEGZBUVAO4DJY.jpg",
});

const wwe = Product.create({
  name: "wwe 2k18",
  price: 1522,
  cantidad: 0,
  stock: 100,
  description:
    "Súbete al ring con tus superestrellas favoritas en esta última entrega de la famosa serie de 2K.Por primera vez en la serie, podrás crear un Mi Jugador masculino y femenino en Tag Matches mixtos y en el modo Mi Carrera, donde se podrá disfrutar de una experiencia narrativa llena de giros, sorpresas y cinemáticas dobladas por las superestrellas más famosas de la WWE. Ponte en la piel de las Four Horsewomen y disfruta del modo Women's Evolution en el nuevo Showcase 2K, con peleas basadas en objetivos, cinemáticas y viñetas de estilo documental.",
  imageUno:
    "https://http2.mlstatic.com/wwe-2k18-ps4-digital-D_NQ_NP_747549-MLA29405261801_022019-F.jpg",
  imageDos: "https://i.ytimg.com/vi/6iqznZxOogc/maxresdefault.jpg",
});

const godOfWar = Product.create({
  name: "god of war",
  price: 1141,
  cantidad: 0,
  stock: 100,
  description:
    "Controla tu ira. Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora en los dominios de las deidades y los monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir, además de enseñar a su hijo a hacerlo también… e impedir que cometa los mismos errores sangrientos que el Fantasma de Esparta. Este impactante replanteamiento de God of War combina los elementos característicos de la icónica serie (el combate brutal, las luchas épicas entre dioses y una escala impresionante) con una narración intensa y emotiva que vuelve a definir el mundo de Kratos. ",

  imageUno:
    "https://http2.mlstatic.com/god-of-war-ps4-2018-digital-espanol-jugas-en-tu-usuario-D_NQ_NP_718581-MLA28723898001_112018-F.jpg",
  imageDos:
    "https://www.roastbrief.com.mx/wp-content/uploads/2018/08/IMG_6321-780x405.jpg",
});
const needForSpeed = Product.create({
  name: "need for speed payback",
  price: 1046,
  cantidad: 0,
  stock: 100,
  description:
    "Vive este exitazo con carreras cargadas de acción. Need for Speed, one of the world’s bestselling video game franchises, returns with a vengeance in the new action-driving blockbuster, Need for Speed Payback. Ambientado en los bajos fondos del valle Fortune, tu equipo se separó debido a una traición y ahora vuelve a unirse para buscar venganza. Acaba con La Casa, un despiadado cártel que controla los casinos y a los criminales y policías de la ciudad. En este corrupto paraíso del azar, las apuestas son altas y La Casa siempre gana. Juega un amplio abanico de eventos con Tyler, el piloto; Mac, el artista, y Jess, la especialista del escape. Cada piloto deberá participar en carreras, misiones y desafíos para ganarse el respeto de los bajos fondos del valle y competir en la carrera definitiva para acabar con La Casa.",
  imageUno:
    "https://dixgamer.com/wp-content/uploads/2018/01/need-for-speed-payback-2.png",
  imageDos:
    "https://microsofters.com/wp-content/uploads/2018/06/need-for-speed-payback-e3-2017-043.jpg",
});

const callOfDuty = Product.create({
  name: "call of duty ww2",
  price: 2100,
  cantidad: 0,
  stock: 100,
  description:
    "Sumérgete en una cruda e intensa nueva versión de la serie Modern Warfare. Desarrollado por Infinity Ward, el estudio creador original de la serie Modern Warfare, esta nueva entrega te zambulle en una sangrienta campaña de historia individual que va más allá y marca un nuevo rumbo para la franquicia. Participa en vertiginosas operaciones encubiertas junto a un variado elenco de operadores especialistas internacionales y revolucionarios, abriéndote paso a través de lugares emblemáticos de Europa y zonas inestables de Oriente Medio.",
  imageUno:
    "https://dixgamer.com/wp-content/uploads/2017/07/call-of-duty-ww2-3.png",
  imageDos: "https://i.blogs.es/292653/duty0/1366_2000.jpg",
});

const sims = Product.create({
  name: "the sims 4",
  price: 666,
  cantidad: 0,
  stock: 100,
  description:
    "Expresa tu creatividad. Deja volar tu imaginación mientras personalizas el distintivo aspecto y la personalidad de tus Sims, experimenta con su sentido de la moda o cambia su peinado y define las ambiciones que, en definitiva, les darán forma. Desarrolla sus relaciones, busca nuevas trayectorias profesionales y controla los momentos más entretenidos e importantes de sus vidas. Construye sin esfuerzo la casa perfecta con el nuevo 'Modo construir' basado en habitaciones, con el que puedes escoger tus diseños y decoraciones favoritos. Explora bonitos mundos con entornos únicos y viaja a diferentes vecindarios en los que podrás visitar los locales de la zona y conocer a otros Sims interesantes. Siéntete poderoso y libre, diviértete y juega a la vida.",
  imageUno:
    "https://http2.mlstatic.com/the-sims-4-ps4-fisico-nuevo-xstation--D_NQ_NP_793238-MLA32778212187_112019-F.jpg",
  imageDos:
    "https://http2.mlstatic.com/the-sims-4-ps4-oferta-digital-original-en-minutos-2-D_NQ_NP_664203-MLA32980327486_112019-F.jpg",
});

const MortalCombat = Product.create({
  name: "mortal kombat x",
  price: 1000,
  cantidad: 0,
  stock: 100,
  description:
    "En una batalla mundial por alcanzar la supremacía, cada movimiento que ejecutes ante un enemigo en Mortal Kombat tiene su trascendencia. Bienvenido a Mortal Kombat X, la entrega más desafiante de la célebre saga, en la que te espera una larga y brutal competición online contra los jugadores de PlayStation Network. Elige entre varias versiones de cada personaje, en consonancia con tus tácticas y estilo de lucha, y descubre una historia completamente nueva que presenta a luchadores tan ilustres como Sub-Zero o Scorpion listos para el combate. ¡Acaba con él!",
  imageUno:
    "https://i11b.3djuegos.com/juegos/11039/mortal_kombat_x/fotos/ficha/mortal_kombat_x-2543177.jpg",
  imageDos:
    "https://lh3.googleusercontent.com/proxy/Ft-kPZYXzNthRMs8DTIfTrabImmSwu3E0toL6EFCSJnsAufuiOEr8Ojh4DJXtLmLWKI7tNh0-9NlSdvhv-3YCPZpJhF7hkb3ammUHPhukvDKfMcVVh4a3w5wIOZJCk6wk_gwOB3WJpAS0s1hIazz7DapLrLhbAU",
});

const NBA = Product.create({
  name: "nba 2k20",
  price: 1920,
  cantidad: 0,
  stock: 100,
  description:
    "NBA 2K regresa en una nueva temporada de competición pura y dura, con la inclusión de nuevos modos, nuevas maneras de competir y las mayores superestrellas del deporte. Juégatelo todo y defiende aquello en lo que crees en el nuevo modo MyCAREER, que incluye temas de actualidad, personajes baloncestísticos reales como la vida misma y un elenco de primera categoría. Domina MyTEAM, el juego de cartas coleccionables de NBA 2K, con objetivos diarios, subidas de nivel de las cartas, eventos de tiempo limitado y muchos más premios. Mantén el contacto con la comunidad mediante los códigos de vestuario, clasificaciones, consejos del desarrollador, el equipo de la semana y mucho más. Lleva tus habilidades al siguiente nivel con un motor de movimiento mejorado, estilos de juego distintivos, controles de lanzamiento avanzados y un nuevo sistema de regate. Entra en la cancha con los 12 equipos de la WNBA y las más de 140 jugadoras, con animaciones, estilos de juego y gráficos diseñados en exclusiva para la competición femenina.",
  imageUno:
    "https://mlee6yi4u4gb.i.optimole.com/wl0pJw-rS8hYIvz/w:auto/h:auto/q:55/https://juegosdigitales.org/wp-content/uploads/2019/07/comprar-nba-2k20-ps4-digital-argentina.jpg",
  imageDos:
    "https://store-images.s-microsoft.com/image/apps.39370.13893532245614132.349b81ac-84df-4a0f-90fc-4faeba0f6369.c43c8d93-7eab-430c-83e8-a629450d4806?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg",
});
const Gta = Product.create({
  name: "gta v",
  price: 754,
  cantidad: 0,
  stock: 100,
  description:
    "Bienvenidos a Los Santos. Adéntrate en la vida de tres criminales muy diferentes: Michael, Franklin y Trevor, que se jugarán todo en una serie de atrevidos y peligrosos golpes con los que podrían tener la vida resuelta. Explora el asombroso mundo de Los Santos y el Condado de Blaine en la experiencia definitiva de Grand Theft Auto V, que incluye una serie de mejoras técnicas tanto para jugadores veteranos como para recién llegados. Además de una mayor distancia de gráficos y una mejor resolución, los jugadores también disfrutarán de nuevas incorporaciones y mejoras, como: Nuevas armas, vehículos y actividades, Vida salvaje adicional, Tráfico más denso, Nuevo sistema de follaje, Daño mejorado y efectos meteorológicos, y mucho más.",
  imageUno:
    "https://d26lpennugtm8s.cloudfront.net/stores/082/436/products/gta-v-premium-edition-ps4-fisico-d_nq_np_630465-mla31582264508_072019-f1-523c4ea142d9a2bc2815774828545066-1024-1024.jpg",
  imageDos:
    "https://phantom-elmundo.unidadeditorial.es/19b8ade749eb6ca78e51ee6d656a0f31/crop/0x123/1920x1403/resize/746/f/jpg/assets/multimedia/imagenes/2020/05/14/15894675954242.jpg",
});

const Assassins = Product.create({
  name: "assassins creed 4 black flag",
  price: 1721,
  cantidad: 0,
  stock: 100,
  description:
    "Ponte en la piel del asesino Connor y da caza a tus enemigos a lo largo de un extenso mundo abierto y realista en una lucha por garantizar la libertad de tu pueblo. Utiliza tus letales habilidades en una violenta misión que te llevará de las caóticas calles de la ciudad hasta los sangrientos campos de batalla en las profundidades de la naturaleza estadounidense y más allá. En tu viaje visitarás ubicaciones icónicas, conocerás a héroes reales de la historia de Estados Unidos y participarás en una conspiración para asesinar a todos los que suponen una amenaza para la libertad. Assassin's Creed III Remastered también incluye versiones remasterizadas de todo el DLC original (las misiones de Benedict Arnold, el paquete Secretos Pack y La Tiranía del Rey Washington) junto con el juego independiente Assassin's Creed Liberation. ",
  imageUno:
    "https://uphobbies.com/wp-content/uploads/2020/02/Assassins-Creed-IV-Black-Flag.jpg",
  imageDos:
    "https://steamcdn-a.akamaihd.net/steam/apps/260470/ss_c2ad7f22e27b8ffab2a896e543a82fc8f6e9a1a7.1920x1080.jpg?t=1455812806",
});

Promise.all([
  ghostOfTsuhima,
  pes,
  Resident,
  wwe,
  godOfWar,
  needForSpeed,
  callOfDuty,
  sims,
  MortalCombat,
  NBA,
  Gta,
  Assassins,
  Accion,
  Aventura,
  Deportes,
  Infantiles,
]).then(
  ([
    ghostOfTsuhima,
    pes,
    Resident,
    wwe,
    godOfWar,
    needForSpeed,
    callOfDuty,
    sims,
    MortalCombat,
    NBA,
    Gta,
    Assassins,
    Accion,
    Aventura,
    Deportes,
    Infantiles,
  ]) => {
    ghostOfTsuhima.addCategories([Accion, Aventura]);
    pes.addCategories([Deportes]);
    Resident.addCategories([Accion]);
    wwe.addCategories([Deportes, Accion]);
    godOfWar.addCategories([Accion, Aventura]);
    needForSpeed.addCategories([Aventura, Infantiles]);
    callOfDuty.addCategories([Accion]);
    sims.addCategories([Infantiles]);
    MortalCombat.addCategories([Accion]);
    NBA.addCategories([Deportes]);
    Gta.addCategories([Aventura]);
    Assassins.addCategories([Accion]);
  }
);
