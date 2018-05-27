# gitee-api-token

    取得 gitee token

```ts
import getToken from 'gitee-api-token';

let opt1 = {
	access_token: '之前已經取得的 access_token',
};

let opt2 = {
	username: 'username',
	password: 'password',
};

let opts = Object.assign({

	// 必填
	clientId: 'client_id',
	clientSecret: 'client_secret',

	// 選填(沒有指定時會指定為取得所有權限)
	//scopes: ['user_info', 'projects],
	//scopes: 'user_info projects',

}, opt2);

getToken(opts)
	.then(function (tokenClient)
	{
		console.log(tokenClient);
	})
;
```

```ts
ClientOAuth2Token {
	client:
		ClientOAuth2 {
		options:
		{ clientId: '[secure]',
			clientSecret: '[secure]',
			accessTokenUri: 'https://gitee.com/oauth/token',
			scopes: [Array] },
		request: [Function: request],
	data:
	{ access_token: '[secure]',
		token_type: 'bearer',
		expires_in: 86400,
		refresh_token: '[secure]',
		scope: 'user_info projects pull_requests issues notes keys hook groups gists',
		created_at: 1527410404 },
	tokenType: 'bearer',
		accessToken: '[secure]',
		refreshToken: '[secure]',
		expires: 2018-05-28T08:39:39.539Z }
```
