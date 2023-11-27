import { fill, setHeader } from "./utils";

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

export type TeamType = "all" | "masculino" | "feminino";

export async function getPlayers(teamType: TeamType | number): Promise<Player[] | Player> {
  try {
    const response = await fetchPlayers(teamType);
    if (!response.ok) {
      throw new Error(`HTTP error. Status ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    throw new Error("Error fetching player(s)");
  }
}

export async function fetchPlayers(teamType: TeamType | number): Promise<Response> {
  const baseUrl = 'https://botafogo-atletas.mange.li';
  const response = await fetch(`${baseUrl}/${teamType}`);
  return response
}

export function loadData(players: Player[] | Player) {

  if (!Array.isArray(players)) {
    players = [players];
  }

  players.forEach(player => fill(player));
} 

export async function loadTeam(teamType: TeamType) {
  const players = await getPlayers(teamType);
  console.log("load initial data");
  loadData(players);
  setHeader(teamType);
}

export function loadLoginPage(defaultPassword: string) {
  const loginContainer = document.createElement('div');
  const passwordForm = document.createElement('form');
  const passwordField = document.createElement('input');
  const passwordSubmit = document.createElement('button');
  const passwordLabel = document.createElement('label');

  passwordField.type = 'password';
  passwordField.name = 'password';
  passwordField.placeholder = 'Senha';
  passwordField.id = 'password';
  passwordField.className = 'password';
  passwordSubmit.type = 'submit';
  passwordSubmit.innerText = 'Entrar';
  passwordSubmit.className = 'login-button';
  passwordForm.id = 'password-form';
  passwordForm.className = 'password-form';
  passwordLabel.innerText = `Efetue o login para acessar a página (senha: ${defaultPassword})`;
  passwordLabel.htmlFor = 'password';
  loginContainer.id = 'login';
  loginContainer.className = 'login-container';
  
  passwordForm.appendChild(passwordField);
  passwordForm.appendChild(passwordSubmit);
  loginContainer.appendChild(passwordForm);
  loginContainer.appendChild(passwordLabel);
  document.body.appendChild(loginContainer);
}