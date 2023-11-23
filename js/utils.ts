import { Player, PlayerType, all, men } from './data';

export const fill = (player: Player) => {
  const container = document.createElement('div');
  container.className = 'player-card';

  const title = document.createElement('h3');
  title.innerText = player.nome;
  title.className = 'player-name';

  const image = document.createElement('img');
  image.src = player.imagem;
  image.className = 'player-image';

  const description = document.createElement('p');
  description.innerText = player.descricao;
  description.className = 'player-description';

  container.appendChild(title);
  container.appendChild(image);
  container.appendChild(description);

  var gridContainer = document.querySelector('.grid-container');
  if (!gridContainer) {
    gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    document.body.appendChild(gridContainer);
  }

  gridContainer.appendChild(container);
  // document.body.replaceChild(gridContainer, document.querySelector('.grid-container') as HTMLDivElement);
}

export function setHeading(playerType: PlayerType) {
  const select = document.getElementById('playertype-selector') as HTMLSelectElement;
  const h1 = document.getElementById('playertype-heading') as HTMLHeadingElement;
  h1.innerHTML = select.value === all ? 'Todos os jogadores' : select.value === men ? 'Jogadores do time masculino' : 'Jogadoras do time feminino';
}
