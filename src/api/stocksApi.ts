import response from "../assets/resources/response.json";
import { Stock } from "../types/stock";

/**
 * Fetches the stock summary to display in the {@link Dashboard}
 * @remarks This would normally be handled by a proper API call, but since a response object is provided it will just return it
 * @returns An array of {@link Stock}
 */
export const getStockSummary: () => Stock[] = () => response;
