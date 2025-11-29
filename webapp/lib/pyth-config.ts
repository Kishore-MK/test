/**
 * Pyth Network Configuration for Base Network
 *
 * Documentation:
 * - Price Feed IDs: https://pyth.network/developers/price-feed-ids
 * - Hermes API: https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes
 * - Base Integration: https://docs.base.org/learn/onchain-app-development/finance/access-real-time-asset-data-pyth-price-feeds
 */

// Pyth contract addresses on Base
export const PYTH_CONTRACT_ADDRESSES = { 
  MONAD_TESTNET: '0xad2B52D2af1a9bD5c561894Cdd84f7505e1CD0B5',
} as const

// Hermes API endpoint (public - consider using a private endpoint in production)
export const HERMES_ENDPOINT = 'https://hermes.pyth.network'

// Token metadata with Pyth price feed IDs
export interface TokenConfig {
  symbol: string
  name: string
  priceFeedId: string
  decimals: number
  logo?: string
}

// Pyth Price Feed IDs (universal across all chains)
export const PYTH_PRICE_FEED_IDS = {
  MON_USD: '0xe786153cc54abd4b0e53b4c246d54d9f8eb3f3b5a34d4fc5a2e9a423b0ba5d6b', 
} as const

// Supported tokens configuration
export const SUPPORTED_TOKENS: Record<string, TokenConfig> = {
  MON:{
    symbol: 'MON',
    name: 'Monad',
    priceFeedId: PYTH_PRICE_FEED_IDS.MON_USD,
    decimals: 18,
  } 
} as const

// Get all supported token symbols
export const SUPPORTED_TOKEN_SYMBOLS = Object.keys(SUPPORTED_TOKENS) as Array<keyof typeof SUPPORTED_TOKENS>

// Get all price feed IDs for bulk fetching
export const ALL_PRICE_FEED_IDS = SUPPORTED_TOKEN_SYMBOLS.map(
  (symbol) => SUPPORTED_TOKENS[symbol].priceFeedId
)
