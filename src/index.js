import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@rainbow-me/rainbowkit/styles.css';

// import { WagmiConfig, createClient } from 'wagmi'


import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import {polygonMumbai} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: "1epSt_xWrpVeVX1pI_Cw5-CSAbPweH7z" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'FileStorage',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);



reportWebVitals();
