const bitcoinjs = require('bitgo-utxo-lib');
const networks = require('./networks');

bitcoinjs.networks.komodo = networks.komodo;
bitcoinjs.networks.equaliser = networks.equaliser;

module.exports = bitcoinjs;
