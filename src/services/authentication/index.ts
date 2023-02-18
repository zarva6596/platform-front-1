import { axiosBaseInstance } from '~/api';
import { AuthenticationData } from '~/types/auth';
import Api from '~/services/Api';
class AuthenticationService extends Api {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async login(email: string, password: string, siteId: string) {
    const { data: authenticationData }
      = await axiosBaseInstance.post<AuthenticationData>('auth', {
        userName: email,
        password,
        siteId,
        portal: 'client',
      });

    return authenticationData;
  }

  async registration(siteId: string, email: string, fname: string, lname: string, password: string) {
    const { data: authenticationData } = await axiosBaseInstance.post('myregistration', {
      portal: 'client',
      siteId,
      account: {
        email, fname, lname, password,
      },
    });

    return authenticationData;
  }
}

export default new AuthenticationService('auth');
