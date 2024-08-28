import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import SessionWrapper from './SessionWrapper';
import GraphQLProvider from './GraphQLProvider/GraphQlProvider';
import QueryProvider from './QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { cookies } from 'next/headers';
import { GoogleOAuthProvider } from '@react-oauth/google';
const Provider = async ({ children }: { children: React.ReactNode }) => {
	const token = cookies().get('access-token')?.value || '';
	return (
		<SessionWrapper>
			<GraphQLProvider token={token}>
				<QueryProvider>
					<ReactQueryDevtools initialIsOpen={false} />
					<GoogleOAuthProvider clientId={process.env.GOOGLE_OAUTH_CLIENT_ID as unknown as string}>
						<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
							{children}
						</ThemeProvider>
					</GoogleOAuthProvider>
				</QueryProvider>
			</GraphQLProvider>
		</SessionWrapper>
	);
};

export default Provider;
