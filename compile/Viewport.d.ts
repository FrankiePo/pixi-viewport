import { Container } from '@pixi/display';
import { Point, Rectangle } from '@pixi/math';
import { Ticker } from '@pixi/ticker';
import { InputManager } from './InputManager';
import { PluginManager } from './PluginManager';
import type { DisplayObject, IDestroyOptions } from '@pixi/display';
import type { IHitArea, InteractionManager } from '@pixi/interaction';
export interface IViewportOptions {
    screenWidth?: number;
    screenHeight?: number;
    worldWidth?: number | null;
    worldHeight?: number | null;
    threshold?: number;
    passiveWheel?: boolean;
    stopPropagation?: boolean;
    forceHitArea?: Rectangle | null;
    noTicker?: boolean;
    interaction?: InteractionManager | null;
    disableOnContextMenu?: boolean;
    divWheel?: HTMLElement;
    ticker?: Ticker;
}
export interface ICompleteViewportOptions extends IViewportOptions {
    screenWidth: number;
    screenHeight: number;
    threshold: number;
    passiveWheel: boolean;
    stopPropagation: boolean;
    noTicker: boolean;
    ticker: Ticker;
}
export interface IViewportTransformState {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
}
export declare class Viewport extends Container {
    moving?: boolean;
    screenWidth: number;
    screenHeight: number;
    threshold: number;
    readonly input: InputManager;
    readonly plugins: PluginManager;
    zooming?: boolean;
    lastViewport?: IViewportTransformState | null;
    readonly options: ICompleteViewportOptions & {
        divWheel: HTMLElement;
    };
    private _dirty?;
    private _forceHitArea?;
    private _hitAreaDefault?;
    private _pause?;
    private readonly tickerFunction?;
    private _worldWidth?;
    private _worldHeight?;
    constructor(options?: IViewportOptions);
    destroy(options: IDestroyOptions): void;
    update(elapsed: number): void;
    resize(screenWidth: number | undefined, screenHeight: number | undefined, worldWidth: number, worldHeight: number): void;
    get worldWidth(): number;
    set worldWidth(value: number);
    get worldHeight(): number;
    set worldHeight(value: number);
    getVisibleBounds(): Rectangle;
    toWorld(x: number, y: number): Point;
    toWorld(screenPoint: Point): Point;
    toScreen(x: number, y: number): Point;
    toScreen(worldPoint: Point): Point;
    get worldScreenWidth(): number;
    get worldScreenHeight(): number;
    get screenWorldWidth(): number;
    get screenWorldHeight(): number;
    get center(): Point;
    set center(value: Point);
    moveCenter(x: number, y: number): this;
    moveCenter(center: Point): this;
    get corner(): Point;
    set corner(value: Point);
    moveCorner(x: number, y: number): this;
    moveCorner(center: Point): this;
    get screenWidthInWorldPixels(): number;
    get screenHeightInWorldPixels(): number;
    findFitWidth(width: number): number;
    findFitHeight(height: number): number;
    findFit(width: number, height: number): number;
    findCover(width: number, height: number): number;
    fitWidth(width?: number, center?: boolean, scaleY?: boolean, noClamp?: boolean): this;
    fitHeight(height?: number, center?: boolean, scaleX?: boolean, noClamp?: boolean): this;
    fitWorld(center?: boolean): this;
    fit(center?: boolean, width?: number, height?: number): this;
    set visible(value: boolean);
    setZoom(scale: number, center?: boolean): this;
    zoomPercent(percent: number, center?: boolean): this;
    zoom(change: number, center?: boolean): this;
    get scaled(): number;
    set scaled(scale: number);
    snapZoom(options: any): this;
    OOB(): {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
        cornerPoint: Point;
    };
    get right(): number;
    set right(value: number);
    get left(): number;
    set left(value: number);
    get top(): number;
    set top(value: number);
    get bottom(): number;
    set bottom(value: number);
    get dirty(): boolean;
    set dirty(value: boolean);
    get forceHitArea(): IHitArea | null | undefined;
    set forceHitArea(value: IHitArea | null | undefined);
    drag(options: any): this;
    clamp(options: any): this;
    decelerate(options: any): this;
    bounce(options: any): this;
    pinch(options: any): this;
    snap(x: number, y: number, options: any): this;
    follow(target: DisplayObject, options: any): this;
    wheel(options: any): this;
    animate(options: any): this;
    clampZoom(options: any): this;
    mouseEdges(options: any): this;
    get pause(): boolean;
    set pause(value: boolean);
    ensureVisible(x: number, y: number, width: number, height: number, resizeToFit?: boolean): void;
}
