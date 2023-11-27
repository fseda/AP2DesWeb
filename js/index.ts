import { loadLoginPage, loadTeam } from './data';
import { hex_md5 } from './md5';

window.onload = () => {
  const defaultPassword = 'botafogo';
  const defaultPasswordHash = hex_md5(defaultPassword);

  const storedPasswordHash = localStorage.getItem('password');
  console.log(defaultPasswordHash, storedPasswordHash)

  if (storedPasswordHash === defaultPasswordHash) {
    document.getElementById('login')?.remove();
    init();
  } else {
    loadLoginPage(defaultPassword);
    document.getElementById('password-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const passwordInput = document.getElementById('password') as HTMLInputElement;
      const passwordHash = hex_md5(passwordInput.value);
      if (passwordHash === defaultPasswordHash) {
        localStorage.setItem('password', passwordHash);
        document.getElementById('login')?.remove();
        init();
      } else {
        alert('Senha incorreta');
      }
    });
  }

  
}

const init = () => {
  loadTeam("all")
}