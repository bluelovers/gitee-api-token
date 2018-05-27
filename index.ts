/**
 * Created by user on 2018/5/23/023.
 */

import * as ClientOAuth2 from 'client-oauth2';

export const GITEE_ACCESS_TOKEN_URI = 'https://gitee.com/oauth/token';
export const GITEE_SCOPES = Object.freeze('user_info projects pull_requests issues notes keys hook groups gists'.split(' '));

export function getToken(options: {
	access_token: string,

	clientId: string,
	clientSecret: string,

	accessTokenUri?: string,

	scopes?: string | string[],
}): Promise<ClientOAuth2.Token>
export function getToken(options: {
	username: string,
	password: string,

	clientId: string,
	clientSecret: string,

	accessTokenUri?: string,

	scopes?: string | string[],
}): Promise<ClientOAuth2.Token>
export function getToken(options: ({
	access_token: string;
} | {
	username: string,
	password: string,
}) & {
	clientId: string,
	clientSecret: string,

	accessTokenUri?: string,

	scopes?: string | string[],
}): Promise<ClientOAuth2.Token>
export function getToken(options: {

	username?: string,
	password?: string,

	access_token?: string,

	clientId: string,
	clientSecret: string,

	accessTokenUri?: string,

	scopes?: string | string[],
}): Promise<ClientOAuth2.Token>
{
	options.accessTokenUri = options.accessTokenUri || GITEE_ACCESS_TOKEN_URI;

	let giteeAuth = new ClientOAuth2({
		clientId: options.clientId,
		clientSecret: options.clientSecret,
		accessTokenUri: options.accessTokenUri,
		scopes: ((options.scopes && typeof options.scopes == 'string') ? options.scopes.split(' ') : ((options.scopes && options.scopes.length) || GITEE_SCOPES) as string[]).slice(),
	});

	if (options.access_token)
	{
		//return giteeAuth.jwt.getToken(options.access_token);

		return Promise.resolve(giteeAuth.createToken(options.access_token, {
			token_type: 'bearer',
		}));
	}

	return giteeAuth.owner.getToken(options.username, options.password);
}

export default getToken
