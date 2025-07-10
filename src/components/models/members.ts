export interface Member {
  id: number;
  name: string;
  role: string;
  focus: 'Natural Language Processing' | 'Machine Learning' | 'Computer Vision' | 'Communication' | 'Design' | 'Visão Computacional' | 'Processamento de Linguagem Natural' | 'Aprendizado de Máquina' | 'Comunicação';
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
    portfolio?: string;
    github?: string;
  };
}

export const members: Member[] = [
  {
    id: 1,
    name: 'Prof. Adiel Filho',
    role: 'Coordenador',
    focus: 'Aprendizado de Máquina',
    image: 'https://portal.cin.ufpe.br/wp-content/uploads/2024/04/Adiel-Filho.jpg',
    bio: 'Prof. Associado (CIn-UFPE), Doutor em Eng. de Gestão/Produção (UFPE). Pesquisador (INCT-IAIA, IARA) e visitante (Coimbra, Southampton, Poznan). Prêmio EURO EJOR 2019. Foco: Análise de Decisão, IA, Preferências, Analytics e Pesquisa Operacional.',
    social: {
      linkedin: 'https://www.linkedin.com/in/adiel-t-de-almeida-filho-7aa3b75/',
      email: 'adielfilho@cin.ufpe.br'
    }
  },
  {
    id: 2,
    name: 'Prof. George Cavalcanti',
    role: 'Coordenador',
    focus: 'Processamento de Linguagem Natural',
    image: 'https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-3.png',
    bio: 'Professor Titular e Coordenador de Pesquisa (CIn-UFPE). Membro: Academia Pernambucana de Ciências, IEEE (sênior) e LIVIA (ETS, Canadá). Pesquisa: Aprendizado de Máquina, Visão Computacional (sistemas classificadores, meta-aprendizado, etc.) e Processamento de Linguagem Natural.',
    social: {
      linkedin: 'https://www.linkedin.com/in/george-dc-cavalcanti-b9485018/',
      email: 'gdcc@cin.ufpe.br'
    }
  },
  {
    id: 3,
    name: 'Prof. Tsang Ing Ren',
    role: 'Coordenador',
    focus: 'Visão Computacional',
    image: 'https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-15.png',
    bio: 'Prof. Associado (CIn-UFPE), Doutor em Visão Computacional/Física (Univ. Antuérpia). Membro IEEE. Pesquisa: Visão Computacional, Aprendizado de Máquina (incluindo Deep Learning), Processamento de Imagens e Fotografia Computacional.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ing-ren-tsang-6551371/',
      email: 'tir@cin.ufpe.br'
    }
  },
  {
    id: 4,
    name: 'Gabriel Matias',
    role: 'Diretor Executivo',
    focus: 'Processamento de Linguagem Natural',
    image: 'https://vp2uploads.s3.amazonaws.com/18443/67/palestrantes/2e9dbab80cd8acb736e018b10df5cea1b474845a.png',
    bio: 'Rodrigo is a machine learning researcher with a focus on deep learning and neural networks. He works on developing AI models for healthcare applications.',
    social: {
      linkedin: 'https://www.linkedin.com/in/gabriel-wa-matias-a9913a210/',
      email: ''
    }
  },
  {
    id: 5,
    name: 'Júlia Nunes',
    role: 'Diretora de Comunicação',
    focus: 'Comunicação',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFMvP9Y2auaNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691979336862?e=1747267200&v=beta&t=KXipcBUzlceX7GBhz3iwO18uzmWVxEMcTaKd8t-gCuw',
    bio: 'Julia is a natural language processing researcher with a focus on text generation and summarization. She leads the communications team in developing content for the community.',
    social: {
      linkedin: 'https://www.linkedin.com/in/j%C3%BAlia-nunes-29406927b/',
      email: 'jnas2@cin.ufpe.br'
    }
  },
  {
    id: 6,
    name: 'Rafael Barros',
    role: 'Diretor de Pesquisa',
    focus: 'Visão Computacional',
    image: 'https://vp2uploads.s3.amazonaws.com/18443/67/palestrantes/2dbf1bb13fda0a50184eef48a58c6eefb220e14d.png',
    bio: 'Rafa Panda',
    social: {
      linkedin: 'https://www.linkedin.com/in/rafael-barros-b4034b244/',
      email: 'rsb7@cin.ufpe.br'
    }
  },
  {
    id: 7,
    name: 'Victor Amarante',
    role: 'Diretor de Ensino',
    focus: 'Aprendizado de Máquina',
    image: 'vafs.jpg',
    bio: 'Victor Amarante é Engenheiro de Software com foco em IA, atuando como Data Scientist no CESAR. Tem experiência em Machine Learning e IA Generativa, desenvolvendo sistemas avançados com LLMs, RAG e AI Agents. Como Diretor de Ensino da LIGIA, acompanha os alunos nas trilhas de aprendizado, promovendo cursos alinhados às áreas de atuação e projetos da Liga.',
    social: {
      linkedin: 'https://www.linkedin.com/in/vamarante/',
      email: 'vafs@cin.ufpe.br'
    }
  },
  {
    id: 8,
    name: 'Vitor Negromonte',
    role: 'Diretor de Extensão',
    focus: 'Visão Computacional',
    image: 'vnco.JPG',
    bio: 'Vitor Negromonte é um pesquisador de visão computacional com foco em detecção de objetos e segmentação de imagens, com interesse em IA em sistemas embarcados. Como Diretor de Extensão da LIGIA, ele promove parcerias, organiza eventos de IA e desenvolve recursos educacionais para a comunidade.',
    social: {
      linkedin: 'https://linkedin.com/in/vitornegromonte',
      email: 'vnco@cin.ufpe.br',
      instagram: 'https://www.instagram.com/vitor.ncabral/',
      portfolio: 'https://vitornegromonte.github.io/',
      github: 'http://github.com/vitornegromonte/'
    }
  },
  {
    id: 9,
    name: 'Breno Cavalcanti',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/breno-cavalcanti',
      email: 'bmmuc@cin.ufpe.br'
    }
  },
  {
    id: 10,
    name: 'Diana Silva',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/diana-rocha-3a20212a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'drs4@cin.ufpe.br'
    }
  },
  {
    id: 11,
    name: 'Erick Cruz',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://linkedin.com/in/erick-vinicius-rebouças-cruz',
      email: 'evrc@cin.ufpe.br'
    }
  },
  {
    id: 12,
    name: 'Fábio Papais',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/fabiopapais/',
      email: 'flfp@cin.ufpe.br'
    }
  },
  {
    id: 13,
    name: 'Filip Fernandes',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/filip-fernandes-72a7a6248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      email: 'fapf@cin.ufpe.br'
    }
  },
  {
    id: 14,
    name: 'Frederick Lopes',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/frederick-lopes-a02220202/',
      email: 'fal5@cin.ufpe.br'
    }
  },
  {
    id: 15,
    name: 'Heitor Pereira',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/mendesheitor/',
      email: 'hmp@cin.ufpe.br'
    }
  },
  {
    id: 16,
    name: 'João Victor Lopes',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/joao-victor-lopess/',
      email: 'jvcl@cin.ufpe.br'
    }
  },
  {
    id: 17,
    name: 'João Victor Omena',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-victor-omena-a11516259/',
      email: 'jvrco@cin.ufpe.br'
    }
  },
  {
    id: 18,
    name: 'Lucas Carvalho',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/lucas-carvalho-computer-science',
      email: 'ldmc@cin.ufpe.br'
    }
  },
  {
    id: 19,
    name: 'Maria Eduarda Chagas',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/maria-eduarda-farias-b6435327a/',
      email: 'mefc@cin.ufpe.br'
    }
  },
  {
    id: 20,
    name: 'Mariana Marinho',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/mariana--marinho',
      email: 'mmsa@cin.ufpe.br'
    }
  },
  {
    id: 21,
    name: 'Pedro Costa',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/fernandes-barreto',
      email: 'pfbc2@cin.ufpe.br'
    }
  },
  {
    id: 22,
    name: 'Pedro Coêlho',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/pedro-nascimento-coelho-ba2226297',
      email: 'pnc2@cin.ufpe.br'
    }
  },
  {
    id: 23,
    name: 'Rodrigo Rossiter',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/rodrigo-rossiter-a36b5227a/',
      email: 'rrgf@cin.ufpe.br'
    }
  },
  {
    id: 24,
    name: 'Thomaz Araújo',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://linkedin.com/in/thomaz-cabral-020a2127a',
      email: 'tcca@cin.ufpe.br'
    }
  },
  {
    id: 25,
    name: 'Sara Pereira',
    role: 'Membro',
    focus: 'Comunicação',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/sara-araujo-pereira/',
      email: 'sseap@cin.ufpe.br'
    }
  },
  {
    id: 26,
    name: 'Débora Moura',
    role: 'Membro',
    focus: 'Comunicação',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/d%C3%A9bora-moura-068030266/',
      email: 'dam7@cin.ufpe.br'
    }
  },
  {
    id: 27,
    name: 'Kaique Bonfim',
    role: 'Membro',
    focus: 'Design',
    image: '',
    bio: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/kaiquebonfim/',
      email: 'ksb3@cin.ufpe.br'
    }
  },
];