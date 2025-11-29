
import { ethers } from 'ethers';
import { config } from './src/config';
import PredictionV0ABI from './abi/PredictionV0.json';

async function main() {
    console.log('Checking contract...');
    const provider = new ethers.JsonRpcProvider(config.rpcUrl);
    const address = config.predictionContractAddress;
    console.log(`Address: ${address}`);
    console.log(`RPC: ${config.rpcUrl}`);

    try {
        const code = await provider.getCode(address);
        console.log(`Code length: ${code.length}`);
        if (code === '0x') {
            console.error('ERROR: No code at address!');
        } else {
            console.log('Contract code exists.');
        }

        const contract = new ethers.Contract(address, PredictionV0ABI, provider);

        console.log('Calling currentEpoch()...');
        try {
            const epoch = await contract.currentEpoch();
            console.log(`Current Epoch: ${epoch}`);
        } catch (e) {
            console.error('currentEpoch failed:', e.message);
        }

        console.log('Calling paused()...');
        try {
            const isPaused = await contract.paused();
            console.log(`Paused: ${isPaused}`);
        } catch (e) {
            console.error('paused failed:', e.message);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
