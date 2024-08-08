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
    link: string;
}

export interface LayoutProps {
    children: ReactNode;
    background: string;
}
