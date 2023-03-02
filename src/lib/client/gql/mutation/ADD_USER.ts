import { gql } from '@urql/svelte';

const ADD_USER: any = gql`
	mutation (
		$email: citext
		$name: String
		$avatar: String
		$oauth: String
		$token: String
		$verified: Boolean
	) {
		insert_user(
			objects: {
				email: $email
				name: $name
				avatar: $avatar
				oauth: $oauth
				token: $token
				verified: $verified
			}
		) {
			returning {
				id
				email
			}
		}
	}
`;
export default ADD_USER;
