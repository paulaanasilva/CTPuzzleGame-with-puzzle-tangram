
class Poligonos {
  pontos: { x: number, y: number }[] = [];
  posicao: { x: number, y: number }[] = [];
  cor: string = '';
}

export class Mecanica {

  tempoEsperado!: number
  tentativasEsperadas!: number

  mensagemAoPularFase: string;
  mensagemAoSairDoJogo: string;
  mensagemAoReiniciarFase: string;
  enunciadoJogo: string;

  contadorCliques: number = 0;
  contadorGiros: number = 0;

  poligonos: Poligonos[] = [];
  poligonoDestino: { x: number, y: number }[] = [];
  pontosDestino: { x: number, y: number }[] = [];
}

