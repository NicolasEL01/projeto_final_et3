// models/FichaAvaliacao.ts

export interface Quesito {
  descricao: string;
  tipo: 'Estrela' | 'Coração' | 'Slider';
  peso: number;
}

export interface FichaAvaliacao {
  id: number;
  nome: string;
  data: Date;
  quesitos: Quesito[];
  valorTotal: number;
}

// Dados iniciais para teste
export const fichasAvaliacao: FichaAvaliacao[] = [
  {
    id: 1,
    nome: 'Ficha 1',
    data: new Date('2024-06-14'),
    quesitos: [
      { descricao: 'Quesito 1', tipo: 'Estrela', peso: 1 },
      { descricao: 'Quesito 2', tipo: 'Coração', peso: 2 },
    ],
    valorTotal: 3,
  },
  {
    id: 2,
    nome: 'Ficha 2',
    data: new Date('2024-06-15'),
    quesitos: [
      { descricao: 'Quesito 1', tipo: 'Slider', peso: 1 },
      { descricao: 'Quesito 2', tipo: 'Estrela', peso: 2 },
    ],
    valorTotal: 3,
  },
];
