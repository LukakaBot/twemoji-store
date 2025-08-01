import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

function AppProvider({ children }: React.PropsWithChildren) {
	return <MantineProvider>{children}</MantineProvider>;
}

export default AppProvider;
