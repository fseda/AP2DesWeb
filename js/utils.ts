import { Player, TeamType } from './data';

export const defaultPassword = 'botafogo';
export const defaultPasswordHash = hex_md5(defaultPassword);

export const fill = (player: Player) => {
  
  const card = document.createElement('article');
  card.className = 'player-card';
  card.dataset.id = player.id.toString();

  const title = document.createElement('h3');
  title.innerText = player.nome;
  title.className = 'player-name';

  const image = document.createElement('img');
  image.src = player.imagem;
  image.className = 'player-image';

  const details = document.createElement('div');
  details.className = 'player-details';

  const team = document.createElement('p');
  team.innerText = `Elenco: ${player.elenco}`;
  team.className = 'player-team';

  const position = document.createElement('p');
  position.innerText = `Posição: ${player.posicao}`;
  position.className = 'player-position';

  const height = document.createElement('p');
  height.innerText = `Altura: ${player.altura}`;
  height.className = 'player-height';

  const cta = document.createElement('a');
  cta.innerText = 'Ver mais';


  details.appendChild(team);
  details.appendChild(position);
  details.appendChild(height);

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(details);

  var gridContainer = document.querySelector('.grid-container');
  if (!gridContainer) {
    gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    document.body.appendChild(gridContainer);
  }

  gridContainer.appendChild(card);
}

export function setHeader(playerType: TeamType) {
  const header = document.createElement('header');

  const teamSelector = document.createElement('select');
  teamSelector.className = 'team-selector';
  const allOption = document.createElement('option');
  const menOption = document.createElement('option');
  const womenOption = document.createElement('option');
  allOption.value = "all";
  allOption.innerText = 'Todos';
  menOption.value = "masculino";
  menOption.innerText = 'Masculino';
  womenOption.value = "feminino";
  womenOption.innerText = 'Feminino';


  const h1 = document.createElement('h1');
  h1.innerHTML = teamSelector.value === "ll" ? 'Todos os jogadores' : teamSelector.value === "masculino" ? 'Jogadores do time masculino' : 'Jogadoras do time feminino';

  const logout = document.createElement('button');
  logout.innerText = 'Sair';
  logout.className = 'logout';
  logout.addEventListener('click', () => {
    localStorage.removeItem('password');
    window.location.href = '/';
  });

  teamSelector.appendChild(allOption);
  teamSelector.appendChild(menOption);
  teamSelector.appendChild(womenOption);

  header.appendChild(teamSelector);
  header.appendChild(h1);
  header.appendChild(logout);

  document.body.appendChild(header);
}

export function handleGetPlayerDetails(e: Event) {
  const player = (e.target as HTMLElement).closest('article');

  if (player) {
    const playerId = player.dataset.id;
    window.location.href = `/player.html?id=${playerId}`;
  } else {
    console.error('Player not found');
  }
}