import { Scene } from '../types';

export const scenes: Scene[] = [
  {
    id: 'lumiere-brothers',
    title: "L'Atelier des Frères Lumière",
    description: "Découvrez les origines du cinéma à travers l'atelier historique des inventeurs du cinématographe.",
    backgroundImage: "images/pexels-photo-7991579.jpeg",
    lightPoints: [
      {
        id: 'cinematographe',
        x: 25,
        y: 40,
        title: 'Le Cinématographe',
        description: "Invention révolutionnaire, le cinématographe des frères Lumière permettait de filmer et de projeter des images en mouvement. Breveté en 1895, il combinait caméra, tireuse de copies et projecteur. Sa légèreté et simplicité d'utilisation en ont fait un outil majeur pour les débuts du cinéma mondial.",
        image: "images/pexels-photo-1117132.jpeg"
      },
      {
        id: 'film-reel',
        x: 65,
        y: 60,
        title: 'La Bobine de Film',
        description: "Les premières bobines de film des frères Lumière capturaient des scènes de la vie quotidienne. 'La Sortie de l'Usine Lumière à Lyon', tourné en mars 1895, montrait des ouvriers quittant leur lieu de travail. Ce film, d'une durée de 46 secondes, est considéré comme l'acte de naissance du cinéma.",
        image: "images/pexels-photo-65128.jpeg"
      },
      {
        id: 'brothers-portrait',
        x: 80,
        y: 30,
        title: 'Les Frères Lumière',
        description: "Auguste et Louis Lumière, nés à Besançon et installés à Lyon, étaient à la fois inventeurs, industriels et pionniers du cinéma. En plus du cinématographe, ils ont contribué à des avancées majeures en photographie, radiologie et stéréoscopie. Leur héritage dépasse largement le 7ème art.",
        image: "images/pexels-photo-3062541.jpeg"
      }
    ]
  },
  {
    id: 'first-projection',
    title: 'La Première Projection Publique (1895)',
    description: "Le moment historique où Lyon a illuminé le monde du cinéma avec la première projection publique payante.",
    backgroundImage: "images/pexels-photo-7234256.jpeg",
    lightPoints: [
      {
        id: 'projector',
        x: 30,
        y: 45,
        title: 'Le Projecteur',
        description: "Le 28 décembre 1895, au Salon Indien du Grand Café à Paris, eut lieu la première projection publique payante. Le projecteur utilisé était un cinématographe Lumière, opérant à la main. Cette séance historique marque la naissance commerciale du cinéma.",
        image: "images/pexels-photo-3709369.jpeg",
      },
      {
        id: 'audience-chair',
        x: 60,
        y: 70,
        title: "La Chaise d'Époque",
        description: "Les 33 spectateurs présents lors de la projection ont découvert des images mouvantes pour la première fois. L’arrivée du train en gare de La Ciotat aurait provoqué des cris et des mouvements de panique, preuve de l'impact émotionnel de ce nouveau média.",
        image: "images/pexels-photo-5662857.jpg",
      },
      {
        id: 'film-strip',
        x: 80,
        y: 35,
        title: 'La Pellicule',
        description: "Les courts-métrages des Lumière étaient réalisés sur une pellicule 35 mm perforée, un standard encore utilisé aujourd'hui. Leur contenu simple – repas, scènes de rue, ouvriers – représentait un regard neuf sur le quotidien.",
        image: "images/pexels-photo-2873486.jpeg"
      }
    ]
  },
  {
    id: 'lyon-architecture',
    title: "L'Architecture Lyonnaise la Nuit",
    description: "Explorez la beauté nocturne de Lyon, où les lumières subliment le patrimoine architectural de la ville.",
    backgroundImage: "images/pexels-photo-14679216.jpeg",
    lightPoints: [
      {
        id: 'basilica',
        x: 40,
        y: 30,
        title: 'La Basilique de Fourvière',
        description: "Construite entre 1872 et 1896, la basilique de Fourvière est un joyau de l'architecture religieuse lyonnaise. Sa mise en lumière nocturne, inaugurée dans les années 1980, accentue ses reliefs néo-byzantins et fait d’elle un phare visuel au cœur de la ville.",
        image: "images/free-photo-of-lumiere-nuit-architecture-ville.jpeg"
      },
      {
        id: 'saone-quays',
        x: 70,
        y: 60,
        title: 'Les Quais de Saône',
        description: "Les quais de Saône, restaurés et éclairés selon un concept artistique depuis 1996, proposent un parcours lumineux qui lie poésie et urbanisme. Cette transformation participe à la redécouverte du centre-ville par ses habitants et visiteurs.",
        image: "images/pexels-photo-3973638.jpeg"
      },
      {
        id: 'lantern',
        x: 20,
        y: 70,
        title: "L'Évolution de l'Éclairage Urbain",
        description: "Lyon est pionnière dans la conception d’un éclairage respectueux de l’environnement et du patrimoine. Les anciennes lanternes à gaz ont été remplacées par des dispositifs LED économes, tout en conservant un esthétisme adapté aux lieux.",
        image: "images/pexels-photo-531474.jpeg"
      }
    ]
  },
  {
    id: 'light-festival',
    title: 'La Fête des Lumières',
    description: "Une célébration annuelle qui transforme Lyon en une galerie d'art lumineux à ciel ouvert.",
    backgroundImage: "images/pexels-photo-1697221.jpg",
    lightPoints: [
      {
        id: 'light-installation',
        x: 35,
        y: 45,
        title: 'Les Œuvres Lumineuses',
        description: "Chaque année, des artistes du monde entier investissent les rues de Lyon avec des œuvres lumineuses immersives. Ces installations transforment les bâtiments, places et ponts en spectacles visuels, mêlant art, science et technologie.",
        image: "images/pexels-photo-6087671.jpeg"
      },
      {
        id: 'candle',
        x: 65,
        y: 25,
        title: 'Les Origines de la Fête',
        description: "Le 8 décembre 1852, une illumination improvisée des fenêtres lyonnaises a marqué la première Fête des Lumières. Depuis, cette tradition s’est perpétuée, devenant un rendez-vous culturel et spirituel unique au monde.",
        image: "images/pexels-photo-278581.jpeg"
      },
      {
        id: 'crowd',
        x: 75,
        y: 70,
        title: 'Impact Culturel et Touristique',
        description: "La Fête des Lumières attire chaque année plus de deux millions de visiteurs, générant un important rayonnement international. Ce succès a inspiré des festivals similaires à Berlin, Shanghai ou encore Sydney.",
        image: "images/pexels-photo-1154189.jpeg"
      }
    ]
  },
  {
    id: 'bright-future',
    title: "L'Avenir Lumineux de Lyon",
    description: "Explorez comment Lyon continue d'innover et d'inspirer à travers ses projets lumineux pour l'avenir.",
    backgroundImage: "images/pexels-photo-7130471.jpg",
    lightPoints: [
      {
        id: 'led-tech',
        x: 30,
        y: 40,
        title: 'Innovations Technologiques',
        description: "Lyon expérimente des solutions d'éclairage LED intelligentes, capables de s'adapter à la luminosité ambiante et à la présence humaine. Ces dispositifs permettent d'allier sécurité, esthétique et économies d'énergie.",
        image: "images/pexels-photo-577514.jpeg"
      },
      {
        id: 'city-plan',
        x: 60,
        y: 60,
        title: "Projets d'Urbanisme Lumineux",
        description: "Le Plan Lumière, lancé en 1989, est un projet urbain visionnaire qui continue d'évoluer. Il vise désormais à intégrer les enjeux de durabilité et de bien-être, en adaptant l'éclairage à la faune nocturne et au rythme circadien humain.",
        image: "images/pexels-photo-316093.jpeg"
      },
      {
        id: 'inspiration-star',
        x: 75,
        y: 30,
        title: "Lyon, Ville d'Inspiration",
        description: "Modèle reconnu mondialement, Lyon partage son savoir-faire en éclairage urbain via des collaborations internationales. Elle est souvent sollicitée comme ville pilote pour des projets expérimentaux de lumière intelligente.",
        image: "images/pexels-photo-1274260.jpeg"
      }
    ]
  }
];
