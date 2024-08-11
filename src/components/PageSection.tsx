import React from 'react';

import { GridLayout } from '@homework-task/components/GridLayout';
import { Layout } from '@homework-task/components/Layout';
import { PageComponent } from '@homework-task/components/PageComponent';
import { PageSectionType } from '@homework-task/types/interfaces';
import { v4 as uuidv4 } from 'uuid';

export const PageSection = ({ section }: { section: PageSectionType }) => {
    const renderSection = (section: PageSectionType) => {
        let LayoutComponent;

        switch (section.type) {
            case 'sectionLayout':
                LayoutComponent = Layout;
                break;
            case 'sectionGridLayout':
                LayoutComponent = GridLayout;
                break;
            default:
                LayoutComponent = Layout; // Default to LayoutOne if type is unknown
        }

        return (
            <LayoutComponent {...section.props} key={uuidv4()}>
                {section.components.map((component) => {
                    return (
                        <PageComponent key={uuidv4()} component={component} />
                    );
                })}
            </LayoutComponent>
        );
    };

    return renderSection(section);
};
