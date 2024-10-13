import { GET_ALL_ANIMES } from './Query';
import { getClientWithoutAuthorization } from '@/lib/gqlClientWithoutAuthorization';

const client = getClientWithoutAuthorization();
export const useFetchAnimes = () => {
	return async (pageParam = 1) => {
		if (!client) throw new Error('ssss');
		try {
			const res = await client?.request(GET_ALL_ANIMES, { page: pageParam });
			return res.allAnimes;
		} catch (e) {
			console.error(e);
		}
	};
};
