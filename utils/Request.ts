'use client';

import base64 from 'base-64';
import axios, { type AxiosResponse, type AxiosError } from 'axios';

// interfaces
export interface IResponse {
  data: {
    title?: string;
    results?: any;
  };
  status?: number;
}

export interface IRequest {
  url: string;
  method: string;
  postData?: any;
}

// variables
const auth = {
  username: 'username',
  password: 'password',
};

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

/**
 * Genera la URL base para las peticiones a la API.
 *
 * @return {string} La URL base.
 */
const buildUrl = (): string => {
  return 'https://website-api.com';
};

/**
 * Parsea un string JSON a un objeto JavaScript.
 *
 * @param {string} value - El string en formato JSON a parsear.
 * @return {any} El objeto resultante del parseo.
 */
const parseResults = (value: string): any => {
  const parse = JSON.parse(value);

  return parse;
};

/**
 * Realiza una solicitud HTTP a la API y devuelve la respuesta.
 *
 * @param {IRequest} parameters - Los parámetros de la solicitud.
 * @return {Promise<IResponse>} La respuesta de la API.
 */
const getResponse = async (parameters: IRequest): Promise<IResponse> => {
  let response: AxiosResponse<any, any>;

  const url = `${buildUrl()}/${parameters.url}`;

  const headers = { Authorization: `Basic ${createAuth}` };

  try {
    if (parameters.method === 'GET') {
      response = await axios.get(url, { headers, timeout: 15000 });
    } else if (parameters.method === 'POST') {
      response = await axios.post(url, parameters.postData, { headers, timeout: 15000 });
    } else {
      throw new Error('Método HTTP no válido. Usa GET o POST.');
    }

    const d: IResponse = {
      data: response.data,
      status: response.status,
    };

    return d;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError;

      const responseText: string = err.request?.responseText;

      let parsedResults;

      if (responseText !== '') {
        parsedResults = parseResults(responseText);
      } else {
        parsedResults = { title: err.message };
      }

      const d: IResponse = {
        data: parsedResults,
        status: err.response?.status,
      };

      return d;
    }

    const err = error as Error;

    const d: IResponse = {
      data: {
        title: err.message,
      },
      status: 0,
    };

    return d;
  }
};

const Request = {
  getResponse,
};

export default Request;
