import { EventEmitter } from '@stencil/core';
import { IGridSearch } from '@shared/interfaces';
import agGrid from 'ag-grid/dist/ag-grid.min.noStyle';
export declare class YooGridComponent {
    protected static componentCounter: number;
    items: Array<any>;
    columnDefs: Array<any>;
    total: number;
    pageSize: number;
    displayType: string;
    hideHeader: boolean;
    hideFooter: boolean;
    canToggleDisplay: boolean;
    showFilters: boolean;
    showFiltersSimple: boolean;
    showCreate: boolean;
    type: 'grid' | 'list' | 'card' | 'tree';
    fetchData: EventEmitter<IGridSearch>;
    protected host: HTMLElement;
    protected currentPage: number;
    protected searchText: string;
    protected gridOptions: agGrid.GridOptions;
    protected readonly scroll: HTMLYooSlimScrollElement;
    private _scroll;
    private grid;
    private gridId;
    constructor();
    componentDidLoad(): void;
    componentDidUnload(): void;
    onDataChanged(newItems: Array<any>, oldItems: Array<any>): void;
    onColumnsChanged(): void;
    onFetchData(): void;
    onInfiniteScroll(ev: any): void;
    onPullToRefresh(ev: any): void;
    onSearchInputChange(ev: any): void;
    onPageChanged(ev: any): void;
    onItemsPerPageChanged(ev: any): void;
    onToggleMode(ev: any): void;
    renderHeader(): JSX.Element;
    renderFooter(): JSX.Element;
    renderBody(): JSX.Element;
    render(): JSX.Element;
}