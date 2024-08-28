import React from 'react';
import { GraphQLClientContext } from './GraphQlClientContext';

export const useGraphQLClient = () => React.useContext(GraphQLClientContext);
