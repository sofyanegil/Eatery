/* eslint-disable no-console */
import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./../sw.js');

    wb.addEventListener('waiting', () => {
      console.log('Service Worker has been installed...');
    });

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service Worker activated!');
      }
    });

    wb.register();
  }
};

export default swRegister;
