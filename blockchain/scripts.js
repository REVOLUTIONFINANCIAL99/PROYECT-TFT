// scripts.js
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Asegúrate de que tu nodo esté corriendo

const contractAddress = 'DIRECCION_DEL_CONTRATO'; // Reemplaza con la dirección del contrato desplegado
const contractABI = [ /* ABI del contrato aquí */ ];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function setData(value) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.set(value).send({ from: accounts[0] });
}

async function getData() {
    const data = await contract.methods.get().call();
    console.log('Stored Data:', data);
}

// Ejemplo de uso
setData(42).then(() => getData());
async function setData(value) {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.set(value).send({ from: accounts[0] });
        console.log(`Value ${value} set successfully.`);
    } catch (error) {
        console.error('Error setting data:', error);
    }
}

async function getData() {
    try {
        const data = await contract.methods.get().call();
        console.log('Stored Data:', data);
    } catch (error) {
        console.error('Error getting data:', error);
    }
}
