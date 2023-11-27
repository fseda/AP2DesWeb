// check if pass is in local storage and if it's valid to load the page

window.onload = () => {
  const passFromLS = getPassFromLS() ?? "";

  if (!checkPassHash(passFromLS)) {
    loadLoginPage();
  } else {
    const id = (new URLSearchParams(window.location.search)).get('id');
    init(id);
  }
}

function loadLoginPage() {
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

  passwordForm.onsubmit = (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById('password').value;
    if (checkPass(passwordInput)) {
      setPass(passwordInput);
      document.getElementById('login')?.remove();
      init();
    } else {
      alert('Senha incorreta');
    }
  };
  
  passwordForm.appendChild(passwordField);
  passwordForm.appendChild(passwordSubmit);
  loginContainer.appendChild(passwordForm);
  loginContainer.appendChild(passwordLabel);
  document.body.appendChild(loginContainer);
}

async function getPlayers(teamType) {
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

function setHeader(playerType) {
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
  
  // Event Listeners
  teamSelector.onchange = async () => {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    const players = await getPlayers(teamSelector.value);
    loadData(players);
    h1.innerHTML = teamSelector.value === "all" ? 'Todos os jogadores' : teamSelector.value === "masculino" ? 'Jogadores do time masculino' : 'Jogadoras do time feminino';
  };

  logout.onclick = () => {
    clearPass();
    window.location.reload();
  };

  teamSelector.appendChild(allOption);
  teamSelector.appendChild(menOption);
  teamSelector.appendChild(womenOption);

  header.appendChild(teamSelector);
  header.appendChild(h1);
  header.appendChild(logout);

  document.body.appendChild(header);
}

async function loadTeam(teamType) {
  const players = await getPlayers(teamType);
  loadData(players);
  setHeader(teamType);
}

const fill = (player) => {
  const card = document.createElement('article');
  card.className = 'player-card';
  card.dataset.id = player.id.toString();
  card.onclick = () => {
    window.location.href = `details.html?id=${player.id}`;
  };

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

function loadData(players) {

  if (!Array.isArray(players)) {
    players = [players];
  }

  players.forEach(player => fill(player));
} 

function init() {
  loadTeam("all");
}