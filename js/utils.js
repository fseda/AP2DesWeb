const defaultPassword = 'botafogo';
const defaultPasswordHash = hex_md5(defaultPassword);
const baseUrl = 'https://botafogo-atletas.mange.li';

const checkPass = (pass) => {
  return hashPass(pass) === defaultPasswordHash;
}

const checkPassHash = (passHash) => {
  return passHash === defaultPasswordHash;
}

const setPass = (pass) => {
  localStorage.setItem('password', hashPass(pass));
}

const clearPass = () => {
  localStorage.removeItem('password');
}

const getPassFromLS = () => {
  return localStorage.getItem('password');
}

const hashPass = (pass) => {
  return hex_md5(pass);
}

const getPlayer = async (id) => {
  const res = await getPlayers(id);
  if (res === `Não há atleta com o id ${id}.`) {
    return null;
  }
  return res
}

async function getPlayers(param) {
  try {
    const response = await fetchPlayers(param);
    if (!response.ok) {
      throw new Error(`HTTP error. Status ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    throw new Error("Error fetching player(s)");
  }
}

async function fetchPlayers(param) {
  const response = await fetch(`${baseUrl}/${param}`);
  return response
}
