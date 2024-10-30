// scripts/main.js

import { setData, getData } from './pages.js';

document.getElementById('setDataButton').addEventListener('click', async () => {
    const value = document.getElementById('valueInput').value;
    await setData(value);
    clearInput();
});

document.getElementById('getDataButton').addEventListener('click', async () => {
    await getData();
});
