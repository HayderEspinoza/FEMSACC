import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { environment } from '../utils';

export class Http {
  readonly instance;

  constructor(url: string = environment.baseUrl) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 40000,
      headers: {
        Accept: 'application/json',
      },
    });

    this.handleResponse();
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }

  private handleResponse(): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return Promise.resolve(response.data);
      },
      function (error) {
        return Promise.reject(error.response);
      },
    );
  }
}
