import { MouseEventHandler, ReactNode } from 'react';

import { AxiosResponse } from 'axios';
import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';
import { ZodSchema } from 'zod';

// Interface for basic hero properties
export interface HeroProps {
    title: string;
    image: string;
}

// Interface for items in a panel, extending hero properties
export interface PanelItem extends HeroProps {
    description: string;
}

// Props for a panel component
export interface PanelProps {
    items: PanelItem[];
}

// Interface for showcase items
export interface ItemShowcaseType {
    title: string;
    description: string;
}

// Props for an item showcase component
export interface ItemShowcaseProps {
    items: ItemShowcaseType[];
}

// Interface for card details, extending showcase items with additional properties
export interface CardDetailsType extends ItemShowcaseType {
    image: string;
    background?: string;
    onClick?: MouseEventHandler;
    buttonText: string;
}

// Props for a cards component
export interface CardsProps {
    cards: CardDetailsType[];
}

export interface TrustBarProps {
    images: string[];
}

// Props for a button component
export interface ButtonProps {
    children?: string;
    onClick: MouseEventHandler;
    className?: string;
}

// Interface for a card type
export interface CardType {
    title: string;
    text: string;
    link?: string;
}

// Props for a layout component
export interface LayoutProps {
    children?: ReactNode;
    background: string;
}

// Interface for column definitions
export interface ColDefType {
    fieldName: string;
    headerName?: string;
    align?: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined;
}

// Props for column definitions
export interface ColDefsType {
    colDefs: ColDefType[];
}

// Define a generic request function type
type RequestFunction<T> = () => Promise<AxiosResponse<T[]>>;

// Props for a list component, extending column definitions
export interface ListProps<T> extends ColDefsType {
    getList: RequestFunction<T>;
}

// Interface for post body
export interface PostBodyType {
    title: string;
    body: string;
}

// Interface for user type
export interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    [key: string]: string | number;
}

// Interface for user type
export interface FormDefType {
    name: string;
    type: string;
    placeholder: string;
}

export interface CreateFormProps<T extends FieldValues> {
    validationSchema: ZodSchema<T>;
    onSubmit: (data: T) => Promise<AxiosResponse<T>>;
    renderForm: (
        register: UseFormRegister<T>,
        errors: FieldErrors<T>
    ) => React.ReactNode;
}

// Updated ComponentProps with correct types
export type ComponentProps =
    | { type: 'heroComponent'; props: HeroProps }
    | { type: 'cardComponent'; props: CardType }
    | { type: 'trustbarComponent'; props: TrustBarProps }
    | { type: 'buttonComponent'; props: ButtonProps }
    | { type: 'cardsComponent'; props: CardsProps }
    | { type: 'panelComponent'; props: PanelProps }
    | { type: 'itemShowcaseComponent'; props: ItemShowcaseProps };

// Updated PageSectionType to match data structure
export type PageSectionType =
    | {
        type: 'sectionLayout';
        props: LayoutProps;
        components: ComponentProps[];
    }
    | {
        type: 'sectionGridLayout';
        props: LayoutProps;
        components: ComponentProps[];
    };

// PageComponentProps and PageGeneratorProps definitions
export interface PageComponentProps {
    component: ComponentProps;
}

export interface PageGeneratorProps {
    sections: PageSectionType[];
}
