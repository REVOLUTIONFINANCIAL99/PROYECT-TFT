// scripts/transfer.js

async function transferAsset(receiverAddress, amount) {
    const accounts = await web3.eth.getAccounts();
    // Asumiendo que tienes un contrato de transferencia que maneja las transferencias
    const transferContractAddress = 'DIRECCION_DEL_CONTRATO_DE_TRANSFERENCIA'; // Reemplaza con tu contrato
    const transferContractABI = [ /* ABI del contrato de transferencias aquí */ ];

    const transferContract = new web3.eth.Contract(transferContractABI, transferContractAddress);

    await transferContract.methods.transfer(receiverAddress, amount).send({ from: accounts[0] });
    showTransferResult('Transferencia exitosa');
}

document.getElementById('transferButton').addEventListener('click', async () => {
    const receiverAddress = document.getElementById('receiverAddress').value;
    const amount = document.getElementById('transferAmount').value;

    try {
        await transferAsset(receiverAddress, amount);
    } catch (error) {
        showTransferResult('Error en la transferencia: ' + error.message);
    }
});

function showTransferResult(message) {
    const transferResultDiv = document.getElementById('transferResult');
    transferResultDiv.innerText = message;
}
