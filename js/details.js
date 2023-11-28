window.onload = async () => {

  const passFromLS = getPassFromLS() ?? "";
  if (!checkPassHash(passFromLS)) {
    loadNotAuthenticated();
  }
  else {
    const id = new URLSearchParams(window.location.search).get('id');
    await init(id);
  }
}

const init = async (id) => {
  if (!isNum(id)) {
    loadNotFound();
  } else {
    const player = await getPlayer(id);
    if (!player) {
      loadNotFound();
      return;
    }

    loadDetails(player);
  }
}

const backBtnEvt = () => {
  const backBtn = document.getElementById('backBtn');
  backBtn.onclick = () => {
    window.location.href = '/index.html';
  }
}

const createBackBtn = () => {
  const backBtn = document.createElement('button');
  backBtn.id = 'backBtn';
  backBtn.innerText = 'Voltar';
  backBtn.onclick = () => {
    window.location.href = '/index.html';
  }
  return backBtn;

}

const loadNotAuthenticated = () => {
  const notAuthenticated = document.createElement('div');
  notAuthenticated.id = 'notAuthenticated';
  notAuthenticated.className = 'container';
  
  const notAuthenticatedText = document.createElement('p');
  notAuthenticatedText.className = 'info-text';
  notAuthenticatedText.innerText = `Você não está autorizado a acessar esta página, volte para a página inicial e efetue o login.`;
  
  const backBtn = createBackBtn();
  
  notAuthenticated.appendChild(notAuthenticatedText);
  notAuthenticated.appendChild(backBtn);
  document.body.appendChild(notAuthenticated);

}

const loadNotFound = () => {
  const notFound = document.createElement('div');
  notFound.id = 'notFound';
  notFound.className = 'container';

  const notFoundText = document.createElement('p');
  notFoundText.className = 'info-text';
  notFoundText.innerText = `Jogador(a) não encontrado(a)`;

  const backBtn = createBackBtn();

  notFound.appendChild(notFoundText);
  notFound.appendChild(backBtn);
  document.body.appendChild(notFound);
}

const loadDetails = player => {
  const container = document.createElement('div');
  // container.id = 'details';
  container.className = 'details-page';

  const playerContainer = document.createElement('div');
  playerContainer.id = 'playerContainer';
  playerContainer.className = 'player-container';

  const details = document.createElement('div');
  details.className = 'player-details';

  const playerImg = document.createElement('img');
  playerImg.src = player.imagem;

  const squad = document.createElement('p');
  squad.innerHTML = `<strong>Elenco</strong>: ${player.elenco}`;

  const description = document.createElement('p');
  description.innerHTML = `${player.descricao}`;

  const height = document.createElement('p');
  height.innerHTML = `<strong>Altura</strong>: ${player.altura}`;

  const birthdate = document.createElement('p');
  birthdate.innerHTML = `<strong>Data de nascimento:</strong> ${player.nascimento}`;

  const name = document.createElement('p');
  name.innerHTML = `<strong>Nome</strong>: ${player.nome_completo}`;

  const position = document.createElement('p');
  position.innerHTML = `<strong>Posição</strong>: ${player.posicao}`;


  const backBtn = createBackBtn();

  details.appendChild(name);
  details.appendChild(position);
  details.appendChild(birthdate);
  details.appendChild(height);
  details.appendChild(squad);
  details.appendChild(description);

  playerContainer.appendChild(playerImg);
  playerContainer.appendChild(details);
  
  container.appendChild(playerContainer);
  container.appendChild(backBtn);
  document.body.appendChild(container);
}

let isNum = val => /^\d+$/.test(val);