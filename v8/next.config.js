/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")([
"@blocto/sdk",
"@project-serum/sol-wallet-adapter",
"@solana/wallet-adapter-base",
"@solana/wallet-adapter-react",
"@solana/wallet-adapter-bitkeep",
"@solana/wallet-adapter-bitpie",
"@solana/wallet-adapter-blocto",
"@solana/wallet-adapter-clover",
"@solana/wallet-adapter-coin98",
"@solana/wallet-adapter-coinhub",
"@solana/wallet-adapter-ledger",
"@solana/wallet-adapter-mathwallet",
"@solana/wallet-adapter-phantom",
"@solana/wallet-adapter-safepal",
"@solana/wallet-adapter-slope",
"@solana/wallet-adapter-solflare",
"@solana/wallet-adapter-sollet",
"@solana/wallet-adapter-solong",
"@solana/wallet-adapter-tokenpocket",
"@solana/wallet-adapter-torus",
"@solana/wallet-adapter-wallets",
]);
/** @type {import('next').NextConfig} */
module.exports= withTM( {webpack5:true,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
})
