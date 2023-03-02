import { gql } from '@urql/svelte';

const GET_USERS = gql`
	query {
		user {
			id
			name
		}
	}
`;

export default GET_USERS;
