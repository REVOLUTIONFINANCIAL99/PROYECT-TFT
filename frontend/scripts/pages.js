// scripts/pages.js
import { tokenizeAsset } from './hydra.js';
import Web3 from 'web3';

// Configuración de Web3 para Ganache
const web3 = new Web3('http://127.0.0.1:8545'); // Cambia a tu nodo Ganache
const contractAddress = 'DIRECCION_DEL_CONTRATO'; // Reemplaza con la dirección del contrato desplegado
const contractABI = [ /* ABI del contrato aquí */ ];
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Función para tokenizar activos usando Hydra
async function handleTokenizeAsset() {
    const receiverAddress = document.getElementById('receiverAddress').value;
    const transferAmount = document.getElementById('transferAmount').value;

    const assetDetails = {
        address: receiverAddress,
        amount: transferAmount
    };

    try {
        await tokenizeAsset(assetDetails);
        showMessage('Activo tokenizado con éxito.');
    } catch (error) {
        console.error('Error al tokenizar el activo:', error);
        showMessage('Error al tokenizar el activo.');
    }
}

// Función para establecer datos en el contrato
async function setData(value) {
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.set(value).send({ from: accounts[0] });
        showMessage('Datos establecidos con éxito.');
    } catch (error) {
        console.error('Error al establecer datos:', error);
        showMessage('Error al establecer datos.');
    }
}

// Función para obtener datos del contrato
async function getData() {
    try {
        const data = await contract.methods.get().call();
        showMessage(`Datos almacenados: ${data}`);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        showMessage('Error al obtener datos.');
    }
}

// Función para mostrar mensajes en la interfaz
function showMessage(message) {
    document.getElementById('transferResult').innerText = message;
}

// Event listeners
document.getElementById('transferButton').addEventListener('click', handleTokenizeAsset);
document.getElementById('setDataButton').addEventListener('click', () => {
    const value = document.getElementById('dataInput').value; // Asegúrate de que exista este input en tu HTML
    setData(value);
});
document.getElementById('getDataButton').addEventListener('click', getData);
