export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'conference' | 'workshop' | 'hackathon';
  image: string;
  description: string;
  capacity: number;
  registrationLink: string;
  schedule?: {
    time: string;
    activity: string;
  }[];
  speakers?: {
    name: string;
    role: string;
    image: string;
  }[];
  highlights: string[];
}

export const oldEvents: Event[] = [
  {
    id: 1,
    title: "Lançamento da Ligia",
    date: "12 de Fevereiro, 2025",
    time: "16:30 - 18:00 ",
    location: "Anfiteatro do CIn - UFPE",
    type: "conference",
    image: "images/events/lancamento.JPG",
    description: "No dia 12 de fevereiro você terá a oportunidade de se conectar aos membros que compõem a Ligia - Liga Acadêmica de Inteligência Artificial, e conhecer mais sobre a iniciativa.",
    capacity: 100,
    registrationLink: "https://www.sympla.com.br/evento/lancamento-da-ligia-ufpe/2814892?_gl=1*ikmdk2*_gcl_au*MTc5OTI1NzI2Ni4xNzQ3NzQ3ODAz*_ga*Njc0MjgxMDU5LjE3NDc3NDc4MDY.*_ga_KXH10SQTZF*czE3NTIxMzU2NjkkbzUkZzEkdDE3NTIxMzU3NTckajU5JGwwJGgxMTAyNDAzMTMx",
    speakers: [
      {
        name: "Prof. Tsang Ing Ren",
        role: "Prof. Associado (CIn-UFPE)",
        image: "https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-15.png"
      },
      {
        name: "Prof. George Cavalcanti",
        role: "Professor Titular e Coordenador de Pesquisa (CIn-UFPE)",
        image: "https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-3.png"
      },
      {
        name: "Prof. Adiel Filho",
        role: "Prof. Associado (CIn-UFPE)",
        image: "https://portal.cin.ufpe.br/wp-content/uploads/2024/04/Adiel-Filho.jpg"
      },
      {
        name: "Gabriel Matias",
        role: "Diretor Executivo da Ligia",
        image: "https://vp2uploads.s3.amazonaws.com/18443/67/palestrantes/2e9dbab80cd8acb736e018b10df5cea1b474845a.png"
      },
      {
        name: "Júlia Nunes",
        role: "Diretora de Comunicação da Ligia",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
      },
      {
        name: "Vitor Negromonte",
        role: "Diretor de Extensão da Ligia",
        image: "images/members/vnco.JPG"
      },
      {
        name: "Rafael Barros",
        role: "Diretor de Pesquisa da Ligia",
        image: "https://vp2uploads.s3.amazonaws.com/18443/67/palestrantes/2dbf1bb13fda0a50184eef48a58c6eefb220e14d.png"
      },
      {
        name: "Victor Amarante",
        role: "Diretor de Ensino da Ligia",
        image: "images/members/vafs.jpg"
      }
    ],
    highlights: [
      "Apresentação oficial da Ligia",
      "Conexão com os membros fundadores",
      "Exploração das áreas de atuação da liga",
      "Convite à comunidade acadêmica para se juntar à iniciativa"
    ]
  },
  {
    id: 2,
    title: "Uso de Inteligência Artificial na Detecção de Fake News",
    date: "4 de Junho, 2025",
    time: "16:00 - 17:00",
    location: "Anfiteatro do CIn - UFPE",
    type: "conference",
    image: "images/events/fake_news.jpg",
    description: "Nesta primeira edição, teremos a honra de receber o professor George Darmiton, coordenador do curso de Inteligência Artificial da UFPE e um dos fundadores da LIGIA. Ele apresentará uma palestra sobre suas pesquisas no grupo CoDes, com foco na aplicação de técnicas de Inteligência Artificial para a detecção de fake news.",
    capacity: 100,
    registrationLink: "https://www.sympla.com.br/evento/uso-de-inteligencia-artificial-na-deteccao-de-fake-news-ligia/2970586?_gl=1*1vxhq79*_gcl_au*MTc5OTI1NzI2Ni4xNzQ3NzQ3ODAz*_ga*Njc0MjgxMDU5LjE3NDc3NDc4MDY.*_ga_KXH10SQTZF*czE3NTIxMzU2NjkkbzUkZzEkdDE3NTIxMzU4MTgkajYwJGwwJGgxMTAyNDAzMTMx",
    speakers: [
      {
        name: "Prof. George Cavalcanti",
        role: "Professor Titular e Coordenador de Pesquisa (CIn-UFPE)",
        image: "https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-3.png"
      }
    ],
    highlights: [
      "Oportunidade de aprendizado com um pesquisador ativo",
      "Integração entre teoria, pesquisa e comunidade",
    ]
  }
];

export const nextEvents: Event[] = [
  {
    id: 3,
    title: "Workshop - Inteligência Artificial: da curiosidade à criação",
    date: "28 de julho, 2025 - 01 de agosto, 2025",
    time: "A definir",
    location: "UFPE",
    type: "workshop",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description: "A inteligência artificial já faz parte do nosso dia a dia, mas você sabe como ela funciona? Nesta oficina, vamos descomplicar esse tema com atividades interativas e criativas! Você vai entender como a IA aprende e como ela pode criar textos, imagens e músicas -- tudo de forma acessível, sem precisar programar.",
    capacity: 20,
    registrationLink: "https://plataforma.clubesdecienciabrasil.com.br/management/dashboard/",
    highlights: [
      "Imersão científica",
      "Clubes interativos",
      "Conexão com a comunidade acadêmica",
      "Mentoria personalizada"
    ]
  }
];