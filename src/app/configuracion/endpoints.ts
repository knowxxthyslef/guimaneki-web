import { environment } from 'src/environments/environment';

export const API = {
  seguridad: {
    oauth: environment.apiSmnsSeguridad + '/oauth/token',
    config: environment.apiSmnsSeguridad + '/parametros/config'
  }
};
