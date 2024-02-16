import { getRandom } from '@divyanshu013/inspirational-quotes';

export const useRandomInspirationalQuote = () => {
    const randomQuote = getRandom();
    return randomQuote;
};
