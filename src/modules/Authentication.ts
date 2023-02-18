import { CookieRef } from '#app';
import { LocationQueryValue } from 'vue-router';
import { useCookie } from '#imports';
import AuthenticationService from '~/services/authentication';
import { AuthenticationData } from '~/types/auth';

export class Authentication {
  private static COOKIE_ACCESS_TOKEN = 'CASE_CLOUD_TOKEN';
  private static COOKIE_USER_DATA = 'CASE_CLOUD_USER_DATA';
  private static COOKIE_USER_EMAIL = 'COOKIE_USER_EMAIL';
  private static COOKIE_SITE_ID = 'COOKIE_SITE_ID';

  private static accessToken: CookieRef<string>;
  private static userData: CookieRef<Omit<AuthenticationData, 'token'>>;
  private static userEmail: CookieRef<string>;

  private static siteId: CookieRef<LocationQueryValue>;

  public static init() {
    this.userData = useCookie(this.COOKIE_USER_DATA, { path: '/' });
    this.accessToken = useCookie(this.COOKIE_ACCESS_TOKEN, { path: '/' });
    this.userEmail = useCookie(this.COOKIE_USER_EMAIL, { path: '/' });
    this.siteId = useCookie(this.COOKIE_SITE_ID, { path: '/' });
  }

  public static async login(email: string, password: string, siteId: string) {
    const authenticationData = await AuthenticationService.login(
      email,
      password,
      siteId,
    );

    this.updateAuthenticationData(authenticationData);
    this.setUserEmail(email);
  }

  public static async registration(siteId: string, email: string, fname: string, lname: string, password: string) {
    try {
      const authenticationData = await AuthenticationService.registration(
        siteId,
        email,
        fname,
        lname,
        password,
      );

      this.updateAuthenticationData(authenticationData);
      this.setUserEmail(email);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  public static updateAuthenticationData({ token, ...authenticationData }: AuthenticationData) {
    this.setAccessToken(token);
    this.setUserData(authenticationData);
  }

  public static logout() {
    this.accessToken.value = '';
  }

  private static setAccessToken(token: string) {
    this.accessToken.value = token;
  }

  private static setUserData(data: Omit<AuthenticationData, 'token'>) {
    this.userData.value = data;
  }

  private static setUserEmail(data: string) {
    this.userEmail.value = data;
  }

  public static setSiteId(data: string) {
    this.siteId.value = data;
  }

  public static getAccessToken() {
    return this.accessToken.value;
  }

  public static getUserData() {
    return this.userData.value;
  }

  public static getUserEmail() {
    return this.userEmail.value;
  }

  public static getSiteId() {
    return this.siteId.value;
  }
}
