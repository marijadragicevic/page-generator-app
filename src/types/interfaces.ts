import { AxisProps } from '@mui/material/Slider/useSlider.types';
import { MouseEventHandler, ReactNode } from 'react';

export interface HeroProps {
    title: string;
    image: string;
}

export interface PanelItem extends HeroProps {
    description: string;
}

export interface PanelProps {
    items: PanelItem[];
}

export interface ItemShowcaseType {
    title: string;
    description: string;
}

export interface ItemShowcaseProps {
    items: ItemShowcaseType[];
}

export interface CardDetailsType extends ItemShowcaseType {
    image: string;
    background?: string;
    onClick: MouseEventHandler;
    buttonText: string;
}

export interface CardsProps {
    cards: CardDetailsType[];
}

export interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler;
    className?: string;
}

export interface CardType {
    title: string;
    text: string;
    link?: string;
}

export interface LayoutProps {
    children: ReactNode;
    background: string;
}
export interface ColDefType {
    fieldName: string;
    headerName?: string;
    align?: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined;
}
export interface ColDefsType {
    colDefs: ColDefType[];
}
export interface ListProps extends ColDefsType {
    getList: () => void;
}
