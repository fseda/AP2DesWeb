import { bindHoverEvents } from "./events";
import { fill, setHeading } from "./utils";

export type Player = {
  id: number;
  elenco: string;
  nome: string;
  posicao: string;
  imagem: string;
  descricao: string;
  nome_completo: string;
  nascimento: string;
  altura: string;
}

export type PlayerType = String;
export const men: PlayerType = "masculino";
export const women: PlayerType = "feminino";
export const all: PlayerType = "all";

export async function getPlayers(playerType: PlayerType): Promise<Player[]> {
  try {
    const response = await fetchPlayers(playerType);
    if (!response.ok) {
      throw new Error(`HTTP error. Status ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function fetchPlayers(playerType: PlayerType): Promise<Response> {
  const baseUrl = 'https://botafogo-atletas.mange.li';
  const response = await fetch(`${baseUrl}/${playerType}`);
  return response
}

export function loadData(players: Player[]) {
  const gridContainer = document.querySelector('.grid-container') as HTMLElement;
  gridContainer.innerHTML = '';

  players.forEach(player => fill(player));
} 

export async function loadInitialData() {
  const players = await getPlayers(all);
  loadData(players);
  setHeading(all);
  bindHoverEvents();
}
