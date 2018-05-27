"use strict";
/**
 * Created by user on 2018/5/23/023.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ClientOAuth2 = require("client-oauth2");
exports.GITEE_ACCESS_TOKEN_URI = 'https://gitee.com/oauth/token';
exports.GITEE_SCOPES = Object.freeze('user_info projects pull_requests issues notes keys hook groups gists'.split(' '));
function getToken(options) {
    options.accessTokenUri = options.accessTokenUri || exports.GITEE_ACCESS_TOKEN_URI;
    let giteeAuth = new ClientOAuth2({
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        accessTokenUri: options.accessTokenUri,
        scopes: ((options.scopes && typeof options.scopes == 'string') ? options.scopes.split(' ') : ((options.scopes && options.scopes.length) || exports.GITEE_SCOPES)).slice(),
    });
    if (options.access_token) {
        //return giteeAuth.jwt.getToken(options.access_token);
        return Promise.resolve(giteeAuth.createToken(options.access_token, {
            token_type: 'bearer',
        }));
    }
    return giteeAuth.owner.getToken(options.username, options.password);
}
exports.getToken = getToken;
exports.default = getToken;
