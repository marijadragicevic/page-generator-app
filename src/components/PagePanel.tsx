import React, { ReactNode } from 'react';

import { PagePanelBox } from '@homework-task/layout/styled';

export const PagePanel: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <PagePanelBox>{children}</PagePanelBox>;
};
