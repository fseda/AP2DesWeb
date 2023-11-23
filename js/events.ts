import { PlayerType, getPlayers, loadData } from "./data";
import { setHeading } from "./utils";

export const bindHoverEvents = () => {
  document.querySelectorAll('.player-card').forEach(card => {
    const description = card.querySelector('.player-description') as HTMLElement;
    
    card.addEventListener('mouseenter', () => {
      description.style.maxHeight = `${description.scrollHeight}px`;
    });

    card.addEventListener('mouseleave', () => {
      description.style.maxHeight = '60px'; 
    });
  });
}

const playerTypeSelector = document.getElementById('playertype-selector') as HTMLSelectElement;
const gridContainer = document.querySelector('.grid-container') as HTMLElement;

playerTypeSelector.addEventListener('change', async (e) => {
  const playerType: PlayerType = playerTypeSelector.value as PlayerType;

  gridContainer.style.opacity = '0';
  
  await new Promise(resolve => setTimeout(resolve, 500));
  const players = await getPlayers(playerType);
  
  loadData(players);
  setHeading(playerType);
  bindHoverEvents();

  gridContainer.style.opacity = '1';
});

