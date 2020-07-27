import md5 from 'md5'

import auth from './auth';
import api from './api';

const pubkey = auth.publicKey;
const prikey = auth.privateKey;
const ts = new Date().getTime();
const hash = md5(ts + prikey + pubkey);

export const loadCharaters = async (limit, offset) => {
  return await api.get(`characters?apikey=${pubkey}&ts=${ts}&hash=${hash}&limit=${limit}&offset=${offset}`);
};

export const loadCharaterByName = async name => {
  return await api.get(`characters?name=${name}&apikey=${pubkey}&ts=${ts}&hash=${hash}`);
}

export const loadCharaterById = async (id) => {
  return await api.get(`characters/${id}?&apikey=${pubkey}&ts=${ts}&hash=${hash}`);
}
