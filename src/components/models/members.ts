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
    image: 'images/members/Adiel.jpg',
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
    image: 'images/members/George.jpg',
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
    image: 'images/members/Tsang.jpg',
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
    image: 'images/members/Gabriel.jpg',
    bio: 'Desenvolvedor iOS na Apple Developer Academy, com atuação abrangente no ecossistema Swift — da construção de interfaces com SwiftUI e UIKit à integração de soluções com IA e serviços em nuvem. Como Presidente da LIGIA, lidera a gestão organizacional, a articulação com parceiros institucionais e empresas, além da colaboração em estratégias de projetos e competições. ',
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
    image: 'images/members/Júlia Nunes.jpg',
    bio: 'Júlia Nunes é designer de produto com experiência em sistemas de informação, produção de conteúdo para redes sociais e desenvolvimento de software. Técnica em Eletrônica pelo IFPE e integrante do grupo de mulheres do CIn (Cintia). Como Diretora de Comunicação da LIGIA, coordena a comunicação interna e externa da Liga, cuida da presença digital e contribui para o desenvolvimento de soft skills dos membros.',
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
    image: 'images/members/Rafael.jpg',
    bio: 'Rafael é Diretor de Pesquisa na LIGIA, onde coordena os grupos temáticos e supervisiona os projetos desenvolvidos pelos membros, em colaboração com os professores responsáveis por cada área. Atualmente é Engenheiro de IA e Pesquisador no LuxAI, onde atua no desenvolvimento de soluções com agentes e LLMs. Possui experiência em Processamento de Linguagem Natural e Visão Computacional, com foco na criação de sistemas e aplicações baseados em IA.',
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
    image: 'images/members/Victor Amarante.jpg',
    bio: 'Victor Amarante é AI Engineer, atuando como Data Scientist no CESAR. Possui experiência em Machine Learning e Generative AI, com foco no desenvolvimento de sistemas avançados utilizando AI Agents, LLMs e arquiteturas RAG. Como Diretor de Ensino da LIGIA, lidera trilhas de aprendizado e promove cursos alinhados às áreas de atuação e projetos da Liga.',
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
    image: 'images/members/Vitor Negromonte.jpg',
    bio: 'Vitor Negromonte é cientista de dados e pesquisador de Inteligência Artificial, com ênfase em Processamento de Linguagem Natural (PNL) e IA Generativa. Ele também tem experiência em sistemas baseados em agentes e visão computacional para sistemas embarcados, com forte interesse em TinyML, IA Eficiente, Meta-learning e Knowledge Representation. Como Diretor de Extensão da LIGIA, atua na prospecção de parcerias estratégicas, na organização de eventos de IA e no desenvolvimento de recursos educacionais para a comunidade.',
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
    image: 'images/members/Breno.jpg',
    bio: 'Breno Cavalcanti é Engenheiro de Machine Learning II na Neurotech. Possui experiência em Aprendizado de Máquina, Visão Computacional, Aprendizado por Reforço, Séries Temporais e NLP. Já desenvolveu detectores de fraude em imagens e sistemas de extração de dados a partir de documentos. Como membro da LIGIA, atua como pesquisador em Processamento de Linguagem Natural.',
    social: {
      linkedin: 'https://www.linkedin.com/in/breno-cavalcanti',
      email: 'bmmuc@cin.ufpe.br'
    }
  },
  {
    id: 10,
    name: 'Diana Rocha',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: 'images/members/Diana Rocha.jpg',
    bio: 'Diana Rocha é estudante pesquisadora com experiência em ML e Engenharia de Software. Atualmente, integra um projeto de pesquisa na University of Illinois Urbana-Champaign, trabalhando com otimização de fuzzing. Também contribui para um projeto em parceria com a Tempest Security Intelligence e o Cin-UFPE, desenvolvendo modelos de IA para detecção de anomalias em logs. Possui ainda experiência em NLP em projeto financiado pelo CNPq.',
    social: {
      linkedin: 'https://www.linkedin.com/in/diana-rocha-3a20212a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'drs4@cin.ufpe.br'
    }
  },
  {
    id: 11,
    name: 'Erick Vinícius Cruz',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: 'images/members/Erick Vinicius.jpg',
    bio: 'Erick Vinícius é estudante de Engenharia da Computação na UFPE e membro ativo da LIGIA. Atua em projetos de Visão Computacional, com experiência em reconhecimento facial, detecção de keypoints e classificação de imagens com redes neurais convolucionais. Participa de grupos de estudo sobre Aprendizado por Reforço e contribui em iniciativas práticas e colaborativas da Liga, explorando aplicações de IA com foco em soluções reais.',
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
    image: 'images/members/Fabio Papais.jpg',
    bio: 'Fábio Papais é pesquisador no LuxAI (CIn-Sotex) dentro do time Pato (patologias) na detecção de câncer de pele. Trabalha com modelos de visão (classificação e detecção) e IA generativa utilizando modelos avançados de Difusão. Atualmente faz parte da equipe de Visão Computacional na LIGIA.',
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
    image: 'images/members/Filip.jpg',
    bio: 'Aluno da graduação de Ciência da Computação do CIn UFPE. Foi bolsista de inovação no Projeto CIn/Motorola, onde atuou na área de visão computacional. Possui grande interesse na área de machine learning e métodos bayesianos.',
    social: {
      linkedin: 'https://www.linkedin.com/in/filip-fernandes-72a7a6248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      email: 'fapf@cin.ufpe.br'
    }
  },
  {
    id: 14,
    name: 'Heitor Mendes',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: 'images/members/Heitor.jpg',
    bio: 'Heitor Mendes é Pesquisador em IA e Visão Computacional, atua no Projeto Cin/Motorola como Undergraduate Reseacher. Tem experiência com Fotografia Computacional (Inpainting, SingleView-3D-photography) e IA Generativa (Modelos de Difusão) com ênfase em dispositivos móveis, o que impõe diversas restrições e necessidade de otimização em baixo nível. Como um Pesquisador e Membro do time de Visão Computacional da LIGIA, pesquisa e desenvolve projetos ambiciosos no estado da arte da área.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mendesheitor/',
      email: 'hmp@cin.ufpe.br'
    }
  },
  {
    id: 15,
    name: 'João Victor Lopes',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: 'images/members/João Cardoso.jpg',
    bio: 'João Victor Lopes é um Pesquisador e Desenvolvedor em Inteligência Artificial com foco em Machine Learning. Atualmente, atua em pesquisa na LIGIA - UFPE e no Projeto CIn/Motorola, onde aplica ML para otimizar testes de software e trabalha com MLOps e LLMs.',
    social: {
      linkedin: 'https://www.linkedin.com/in/joao-victor-lopess/',
      email: 'jvcl@cin.ufpe.br'
    }
  },
  {
    id: 16,
    name: 'João Victor Omena',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: 'images/members/João Omena.jpg',
    bio: 'João Victor Omena é estudante de Ciência da Computação na UFPE e desenvolve aplicações de Machine Learning em parceria com o projeto CIn/Motorola. Atua em projetos de classificação automática e análise de falhas, utilizando técnicas de NLP, modelos supervisionados e aprendizado multimodal. É monitor da disciplina de Aprendizagem Profunda e tem forte interesse em aplicações de Inteligência Artificial voltadas à área de segurança.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-victor-omena-a11516259/',
      email: 'jvrco@cin.ufpe.br'
    }
  },
  {
    id: 17,
    name: 'Lucas Dantas',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: 'images/members/Lucas Dantas.jpg',
    bio: 'Lucas Dantas é estudante de Ciência da Computação e desenvolvedor com experiência em automação de testes e desenvolvimento iOS. Atuou como desenvolvedor de testes automatizados entre 2021 e 2023 e, entre 2024 e 2025, como desenvolvedor iOS, com três aplicativos publicados na App Store, incluindo um app com integração de modelos de visão computacional. Também desenvolve projetos em Inteligência Artificial, com foco em Processamento de Linguagem Natural (NLP), tanto em contextos acadêmicos quanto em aplicações jurídicas por meio de sua startup, da qual é cofundador.',
    social: {
      linkedin: 'https://www.linkedin.com/in/lucas-carvalho-computer-science',
      email: 'ldmc@cin.ufpe.br'
    }
  },
  {
    id: 18,
    name: 'Maria Eduarda Farias',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: 'images/members/Maria Eduarda.jpg',
    bio: 'Maria Eduarda é estudante de Ciência da Computação e interessada em pesquisa e desenvolvimento na área de IA. Já colaborou em um projeto de extensão envolvendo o uso de IA no setor automotivo e atualmente atua como estagiária de data science. Como membro da equipe de Machine Learning, procura aprender algo novo sempre e entender como cada conceito pode ser transformado em uma solução criativa para problemas reais.',
    social: {
      linkedin: 'https://www.linkedin.com/in/maria-eduarda-farias-b6435327a/',
      email: 'mefc@cin.ufpe.br'
    }
  },
  {
    id: 19,
    name: 'Mariana Marinho',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: 'images/members/Mariana Marinho.jpg',
    bio: 'Mariana Marinho é pesquisadora aplicações de inteligência artificial na saúde e na sustentabilidade, com foco em dados, acessibilidade e causas públicas. Possui conhecimentos em machine learning, processamento de linguagem natural e desenvolvimento de sistemas inteligentes. Atualmente atua como estagiária em Estratégia e Tecnologia na Globo.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mariana--marinho',
      email: 'mmsa@cin.ufpe.br'
    }
  },
  {
    id: 20,
    name: 'Pedro Fernandes',
    role: 'Membro',
    focus: 'Processamento de Linguagem Natural',
    image: 'images/members/Pedro Fernandes.jpg',
    bio: 'Pedro Fernandes é Software Engineer, com experiência prévia em projetos de Machine Learning. Atua como Head de Desenvolvimento de Software na Vetrum. Trabalhou com LLMs, IAs generativas e desenvolvimento mobile multiplataforma. Membro da equipe de Processamento de Linguagem Natural da LIGIA, participa ativamente dos processos de pesquisa e construção de conhecimento da Liga.',
    social: {
      linkedin: 'https://www.linkedin.com/in/fernandes-barreto',
      email: 'pfbc2@cin.ufpe.br'
    }
  },
  {
    id: 21,
    name: 'Pedro Coêlho',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: 'images/members/Pedro Nascimento.jpg',
    bio: 'Estudante de graduação em Engenharia da Computação no Centro de Informática da UFPE, em mobilidade acadêmica com a Télécom Paris do Institut Polytechnique de Paris. Membro da equipe de Machine Learning da Liga Acadêmica de Inteligência Artificial da UFPE e da equipe de Informação Quântica da Liga Acadêmica de Computação Quântica da UFPE. Realiza pesquisa científica com Redes Neurais e Algoritmos Genéticos para Regressão Simbólica. Medalhista em diversas Olimpíadas do Conhecimento. Domínio em várias áreas da Computação, da Matemática e da Física.',
    social: {
      linkedin: 'https://www.linkedin.com/in/pedro-nascimento-coelho-ba2226297',
      email: 'pnc2@cin.ufpe.br'
    }
  },
  {
    id: 22,
    name: 'Rodrigo Rossiter',
    role: 'Membro',
    focus: 'Visão Computacional',
    image: 'images/members/Rodrigo Rossiter.jpg',
    bio: 'Rodrigo Rossiter é graduando em Ciência da Computação, atuando atualmente com engenheiro de software , com interesse especial em visão computacional. Possui experiência em segmentação de imagens aplicadas a contextos de saúde e integra, na LIGIA, um grupo de estudos dedicado à exploração de técnicas e aplicações da visão computacional.',
    social: {
      linkedin: 'https://www.linkedin.com/in/rodrigo-rossiter-a36b5227a/',
      email: 'rrgf@cin.ufpe.br'
    }
  },
  {
    id: 23,
    name: 'Thomaz Cabral',
    role: 'Membro',
    focus: 'Aprendizado de Máquina',
    image: 'images/members/Thomaz.jpg',
    bio: 'Thomaz Cabral é pesquisador apoiado pela FACEPE na área de clustering, explorando métodos avançados para análise e agrupamento de dados complexos. É também membro da LIGIA, contribuindo para iniciativas e projetos ligados à aprendizado de máquina e ciência de dados.',
    social: {
      linkedin: 'https://linkedin.com/in/thomaz-cabral-020a2127a',
      email: 'tcca@cin.ufpe.br'
    }
  },
  {
    id: 24,
    name: 'Sara Pereira',
    role: 'Membro',
    focus: 'Comunicação',
    image: 'images/members/Sara Simone.jpg',
    bio: 'Sara Pereira é cientista de dados e pesquisadora na área de aprendizado de máquina pelo Centro de Informática da UFPE. Atua como Cientista de Dados Júnior na Deloitte e coordena a LIGIA, a primeira Liga de Inteligência Artificial da universidade, colaborando com iniciativas de ensino, pesquisa e extensão em IA. Com experiência em engenharia de dados, ciência de dados educacional e projetos de inovação, Sara também é palestrante, mentora e defensora ativa da inclusão feminina na tecnologia, integrando o grupo Cintia, buscando constantemente aplicar sua curiosidade e criatividade para gerar impacto social através da tecnologia.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sara-araujo-pereira/',
      email: 'sseap@cin.ufpe.br'
    }
  },
  {
    id: 25,
    name: 'Débora Moura',
    role: 'Membro',
    focus: 'Comunicação',
    image: 'images/members/Débora Moura.jpg',
    bio: 'Débora Moura é Analista de Marketing e Design no IARA Systems e Designer Gráfico na JHMD. Tem experiência em Fotografia, Posicionamento de Marca e Social Media. Além disso, faz parte do time de comunicação da LIGIA, contribuindo com suporte às mídias.',
    social: {
      linkedin: 'https://www.linkedin.com/in/d%C3%A9bora-moura-068030266/',
      email: 'dam7@cin.ufpe.br'
    }
  },
  {
    id: 26,
    name: 'Kaique Bonfim',
    role: 'Membro',
    focus: 'Design',
    image: 'images/members/Kaique Bonfim.jpg',
    bio: 'Kaíque Bonfim é UX/UI Designer e estudante de Sistemas de Informação no CIN UFPE. Tem experiência com design de produtos digitais e IA aplicada ao design. Ex membro do time de comunicação da UFPE Finance (Liga de Mercado Financeiro da UFPE). Atual Líder de Design da Liga Acadêmica de Inteligência Artificial de UFPE.',
    social: {
      linkedin: 'https://www.linkedin.com/in/kaiquebonfim/',
      email: 'ksb3@cin.ufpe.br'
    }
  },
];