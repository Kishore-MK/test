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
  MONAD_TESTNET: '0x2880aB155794e7179c9eE2e38200202908C17B43',
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
  MON_USD: '0x31491744e2dbf6df7fcf4ac0820d18a609b49076d45066d3568424e62f686cd1', 
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
