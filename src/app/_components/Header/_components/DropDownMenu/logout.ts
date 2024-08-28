'use server';

import { revalidate } from '@/lib/gqlClient';
import { cookies } from 'next/headers';

export const Logout = async () => {
	cookies().delete('access-token');
	revalidate('/');
};
