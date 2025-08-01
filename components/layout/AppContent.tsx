import React from 'react';

function AppContent({ children }: React.PropsWithChildren) {
	return <main>{children}</main>;
}

export default AppContent;
