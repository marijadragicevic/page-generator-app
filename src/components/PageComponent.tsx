import React from 'react';

import { Button } from '@homework-task/components/Button';
import { Cards } from '@homework-task/components/Cards';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { Card } from '@homework-task/components/landing/Card';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import { PageComponentProps } from '@homework-task/types/interfaces';

export const PageComponent = ({ component }: PageComponentProps) => {
    switch (component.type) {
        case 'heroComponent':
            return <Hero {...component.props} />;
        case 'cardComponent':
            return <Card {...component.props} />;
        case 'trustbarComponent':
            return <TrustBar {...component.props} />;
        case 'buttonComponent':
            return <Button {...component.props} />;
        case 'cardsComponent':
            return <Cards {...component.props} />;
        case 'panelComponent':
            return <PanelShowcase {...component.props} />;
        case 'itemShowcaseComponent':
            return <ItemsShowcase {...component.props} />;

        default:
            return null;
    }
};
