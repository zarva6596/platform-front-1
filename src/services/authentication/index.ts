import { axiosBaseInstance } from '~/api';
import { AuthData } from '~/types/auth';
import Api from '~/services/Api';
import { Authentication } from '~/modules/Authentication';
class AuthenticationService extends Api {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async login(username: string, password: string) {
    const { data: authenticationData } = await axiosBaseInstance.post<AuthData>('auth/login', {
      email: username,
      password,
    });

    return authenticationData;
  }

  async registration(username: string, email: string, password: string) {
    const { data: authenticationData } = await axiosBaseInstance.post('auth/registration', {
      name: username,
      email,
      password,
    });

    return authenticationData;
  }

  async getCurrentUser() {
    const { data } = await this.get('');

    return data;
  }

  async refreshToken() {
    const token = Authentication.getRefreshToken();

    const { data } = await axiosBaseInstance.post<AuthData>('auth/refresh', { token });

    return data;
  }
}

export default new AuthenticationService('auth');
