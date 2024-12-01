export const formatBackendImageLinks = (url: string) => {
	// If URL already starts with http://, return as is
	if (url.startsWith('http://')) {
		return url;
	}

	// Remove any leading slashes
	const cleanUrl = url.replace(/^\/+/, '');

	// Combine backend URL with cleaned path
	return `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/${cleanUrl}`;
}