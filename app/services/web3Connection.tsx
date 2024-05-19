import Web3 from 'web3';
import contractAbi from '../MonthlyLogContract.json';
import {LogPayload} from "~/models/LogPayload";


// Connect to Avalanche C-Chain node
const web3 = new Web3('https://api.avax-test.network/ext/bc/C/rpc');
const contractAddress = '0xA08B0Fd467314F2Bb7b3d2742741D28660531f3c'; // Replace with your deployed contract address
const contract = new web3.eth.Contract(contractAbi, contractAddress);


export const createLogApp = async (message: string) => {
    try {
        const accounts = "0x30c1B451101695E37e95fAf4DB35aa8B16496148";
        const privateKey = "0x8c0a933f390fb983322f722bb9a8285245195596d21a911ca8715d07fba94f7f"; // Replace with your private key

        const transaction = contract.methods.createLog(message).encodeABI();

        const tx = {
            from: accounts,
            to: contractAddress,
            data: transaction,
            gas: 200000,
            gasPrice: await web3.eth.getGasPrice()

        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        return 'Log created successfully';
    } catch (error: any) {
        return 'Error creating log: ' + error.message;
    }
}


export const getAllLogsApp = async () => {
    try {
        const logsPayload: LogPayload[] = [];
        const logs: string[] = await contract.methods.getAllLogs().call();
        if (logs.length === 0) {
            return logsPayload;
        }
        logs.forEach((log: any) => {
            logsPayload.push({
                idLog: log.idLog.toString(),
                message: log.message,
                date: (new Date(Number(log.date / BigInt(1000)))).toISOString().replace('T', ' ').replace('Z', ''),
                idOwner: log.idOwner.toString()
            });
        });

        return logsPayload;

    } catch (error: any) {
        return 'Error getting logs: ' + error.message;
    }
}


export const getLogByIdApp = async (id: number) => {
    try {
        const log = await contract.methods.getLogById(id).call();
        return log;
    } catch (error: any) {
        return 'Error getting log: ' + error.message;
    }
}

