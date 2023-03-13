import { HASURA_ADMIN_KEY } from '$env/static/private';
import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';

const hasuraAdminKey = (HASURA_ADMIN_KEY as string) || null;
const publicGraphQLEndpoint = (PUBLIC_GRAPHQL_ENDPOINT as string) || null;

export const getHasuraUrqlOptions: () => object | null = () => {
	if (hasuraAdminKey && publicGraphQLEndpoint) {
		return {
			// the graphql url
			url: publicGraphQLEndpoint,
			// fetchOptions for authentication, Hasura
			fetchOptions: {
				credentials: 'include',
				headers: {
					'content-type': 'application/json',
					'x-hasura-admin-secret': hasuraAdminKey,
				},
			},
			// default request policy
			requestPolicy: 'cache-and-network',
		};
	}

	return null;
};
