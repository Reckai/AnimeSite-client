import { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextType {
	isOpen: boolean;
	setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function DrawerProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	return <DrawerContext.Provider value={{ isOpen, setIsOpen }}>{children}</DrawerContext.Provider>;
}

export function useDrawer() {
	const context = useContext(DrawerContext);
	if (context === undefined) {
		throw new Error('useDrawer must be used within a DrawerProvider');
	}
	return context;
}
