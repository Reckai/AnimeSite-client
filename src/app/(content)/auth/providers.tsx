import { StageProvider, StageProviderProps } from './contexts/stage/StageProvider';

interface ProvidersProps {
	children: React.ReactNode;
	stage: Omit<StageProviderProps, 'children'>;
}

const Providers = ({ children, stage }: ProvidersProps) => {
	return <StageProvider {...stage}>{children}</StageProvider>;
};

export default Providers;
