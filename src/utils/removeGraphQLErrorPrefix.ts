const removeGraphQLErrorPrefix = (errorMessage: string) => {
    return errorMessage.replace(/^GraphQL Request Error: Error:\s*/, '');
};
export default removeGraphQLErrorPrefix;