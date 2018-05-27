/**
 * Created by user on 2018/5/23/023.
 */
import * as ClientOAuth2 from 'client-oauth2';
export declare const GITEE_ACCESS_TOKEN_URI = "https://gitee.com/oauth/token";
export declare const GITEE_SCOPES: ReadonlyArray<string>;
export declare function getToken(options: {
    access_token: string;
    clientId: string;
    clientSecret: string;
    accessTokenUri?: string;
    scopes?: string | string[];
}): Promise<ClientOAuth2.Token>;
export declare function getToken(options: {
    username: string;
    password: string;
    clientId: string;
    clientSecret: string;
    accessTokenUri?: string;
    scopes?: string | string[];
}): Promise<ClientOAuth2.Token>;
export declare function getToken(options: ({
    access_token: string;
} | {
    username: string;
    password: string;
}) & {
    clientId: string;
    clientSecret: string;
    accessTokenUri?: string;
    scopes?: string | string[];
}): Promise<ClientOAuth2.Token>;
export default getToken;
