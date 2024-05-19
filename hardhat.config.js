// hardhat.config.js
const { networks } = require('hardhat/config');

module.exports = {
    networks: {
        fuji: {
            url: 'https://api.avax.network/ext/bc/C/rpc',
            chainId: 43114,
            accounts: [YOUR_PRIVATE_KEY],
        },
    },
};
