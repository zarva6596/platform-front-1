import { CookieRef } from '#app';
import { useCookie } from '#imports';
import AuthenticationService from '~/services/authentication';

export class Authentication {
  private static COOKIE_ACCESS_TOKEN = 'PLATFORM_ACCESS_TOKEN';
  private static COOKIE_REFRESH_TOKEN = 'PLATFORM_REFRESH_TOKEN';
  private static accessToken: CookieRef<string>;
  private static refreshToken: CookieRef<string>;

  public static init() {
    this.accessToken = useCookie(this.COOKIE_ACCESS_TOKEN, { path: '/' });
    this.refreshToken = useCookie(this.COOKIE_REFRESH_TOKEN, { path: '/' });
  }

  public static async login(login: string, password: string) {
    const { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN } = await AuthenticationService.login(login, password);

    this.setAccessToken(ACCESS_TOKEN);
    this.setRefreshToken(REFRESH_TOKEN);
  }

  public static async updateToken() {
    const { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN } = await AuthenticationService.refreshToken();

    this.setAccessToken(ACCESS_TOKEN);
    this.setRefreshToken(REFRESH_TOKEN);
  }

  public static async registration(username: string, email: string, password: string) {
    try {
      const authenticationData = await AuthenticationService.registration(
        username,
        email,
        password,
      );

      // eslint-disable-next-line no-console
      console.log(authenticationData);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  public static logout() {
    this.accessToken.value = '';
  }

  private static setAccessToken(token: string) {
    this.accessToken.value = token;
  }

  private static setRefreshToken(token: string) {
    this.refreshToken.value = token;
  }

  public static getAccessToken() {
    return this.accessToken.value;
  }

  public static getRefreshToken() {
    return this.refreshToken.value;
  }
}
