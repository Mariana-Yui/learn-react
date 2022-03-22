const developmentUrl = 'http://music.mariana-yui.com/api';
const productionUrl = 'http://music.mariana-yui.com/api';
export const baseURL = process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl;
export const timeout = 10000;
