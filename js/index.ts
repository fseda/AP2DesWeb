import { loadInitialData } from './data';
import { bindHoverEvents } from './events';

loadInitialData().then(() => {
  bindHoverEvents();
  console.log('Initial data loaded');
}).catch(e => {
  console.error(e);
});
