/// <reference types="react" />
import { StyledComponent, CSSObject, InterpolationFunction, ThemedStyledProps, DefaultTheme, Interpolation, GlobalStyleComponent } from 'styled-components';
import React, { InputHTMLAttributes, ReactNode, BaseHTMLAttributes, FunctionComponent, HtmlHTMLAttributes, ReactNodeArray, ReactElement } from 'react';

declare const Row: StyledComponent<"div", import("styled-components").DefaultTheme, RowProps, never>;
declare const Col: StyledComponent<"div", import("styled-components").DefaultTheme, ColProps, never>;

declare const Mask: StyledComponent<"div", import("styled-components").DefaultTheme, MaskProps, never>;

declare const Page: (props: React.HtmlHTMLAttributes<HTMLDivElement>) => JSX.Element;

declare const BreadCrumbs: (props: BreadCrumbsProps) => JSX.Element;
interface BreadCrumb {
    label: string;
    path: string;
}
interface BreadCrumbsProps {
    data: BreadCrumb[];
    onChange(path: string): void;
    className?: string;
}

declare const Card: StyledComponent<"section", import("styled-components").DefaultTheme, {}, never>;

declare const Input: (props: InputProps) => JSX.Element;
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'pattern'> {
    type?: 'text' | 'tel' | 'email' | 'url' | 'password' | 'search' | 'number';
    value?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    pattern?: RegExp;
    example?: string;
}

declare const _default: (props: PopUpProps) => JSX.Element;
interface PopUpProps extends BaseHTMLAttributes<HTMLDivElement> {
    visible?: boolean;
    confirmed?: boolean;
    title?: string;
    onClose(): void;
}

declare const _default$1: (props: PickerProps) => JSX.Element;
interface ItemObj {
    id: string | number;
    name: string | number;
    children?: ItemObj[];
}
declare type PickerItem = string | number | ItemObj;
interface PickerProps {
    visible: boolean;
    title: string;
    data: PickerItem[];
    columns?: 2 | 3;
    initialIndice?: number[];
    onConfirm(ids: number[]): void;
    onClose?: () => void;
}

declare const Toast: FunctionComponent<ToastProps>;
interface ToastProps {
    type?: 'loading' | 'success' | 'error';
}

declare const _default$2: (props: ModalProps) => JSX.Element;
interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
    closable?: boolean;
    padding?: string;
    animeRange?: AnimeRange;
    visible: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    onCancel?: () => void;
}
interface AnimeRange {
    start: string;
    end: string;
}

declare const _default$3: (props: CarouselProps) => JSX.Element;
interface CarouselProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNodeArray;
    autoplay?: boolean;
    interval?: number;
}

declare function createDefaultStyle<P extends object = {}>(style: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>, ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>): GlobalStyleComponent<P, DefaultTheme>;

declare function Tree<T>({ data, dataTypes, indent, level, foldIcon }: TreeProps<T>): JSX.Element;
interface TreeProps<T> {
    foldIcon?: any;
    indent?: string;
    level?: number;
    data: T[];
    dataTypes: DataTypeItem<T>[];
}
interface DataTypeItem<T> {
    dataIndex: string;
    render: (props: T) => React.ReactNode;
    style?: any;
}

declare const _default$4: (props: TabBarProps) => JSX.Element;
interface TabBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
    tabs: Array<ReactElement>;
    index: number;
    children?: Array<ReactElement>;
    indicator?: boolean;
}

export { BreadCrumbs, Card, _default$3 as Carousel, Col, Input, Mask, _default$2 as Modal, Page, _default$1 as Picker, _default as Popup, Row, _default$4 as Tabs, Toast, Tree, createDefaultStyle };
