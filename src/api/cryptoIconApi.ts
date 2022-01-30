const cryptoIconApiUrl = 'https://cryptoicon-api.vercel.app/api/icon/';

/**
 * Fetches the URL where the crypto logo can be found
 * @param sku The SKU of the crypto
 */
export const getCryptoLogoUrl = (sku: string) => `${cryptoIconApiUrl}${sku.toLowerCase()}`;
