/// <reference types="node" />
import CustomElementRegistry from '../custom-element/CustomElementRegistry';
import Document from '../nodes/document/Document';
import HTMLDocument from '../nodes/html-document/HTMLDocument';
import XMLDocument from '../nodes/xml-document/XMLDocument';
import SVGDocument from '../nodes/svg-document/SVGDocument';
import Node from '../nodes/node/Node';
import Text from '../nodes/text/Text';
import Comment from '../nodes/comment/Comment';
import ShadowRoot from '../nodes/shadow-root/ShadowRoot';
import Element from '../nodes/element/Element';
import HTMLTemplateElement from '../nodes/html-template-element/HTMLTemplateElement';
import HTMLFormElement from '../nodes/html-form-element/HTMLFormElement';
import HTMLElement from '../nodes/html-element/HTMLElement';
import HTMLUnknownElement from '../nodes/html-unknown-element/HTMLUnknownElement';
import HTMLInputElement from '../nodes/html-input-element/HTMLInputElement';
import HTMLTextAreaElement from '../nodes/html-text-area-element/HTMLTextAreaElement';
import HTMLLinkElement from '../nodes/html-link-element/HTMLLinkElement';
import HTMLStyleElement from '../nodes/html-style-element/HTMLStyleElement';
import HTMLSlotElement from '../nodes/html-slot-element/HTMLSlotElement';
import HTMLLabelElement from '../nodes/html-label-element/HTMLLabelElement';
import HTMLMetaElement from '../nodes/html-meta-element/HTMLMetaElement';
import HTMLBaseElement from '../nodes/html-base-element/HTMLBaseElement';
import SVGSVGElement from '../nodes/svg-element/SVGSVGElement';
import SVGElement from '../nodes/svg-element/SVGElement';
import HTMLScriptElement from '../nodes/html-script-element/HTMLScriptElement';
import HTMLImageElement from '../nodes/html-image-element/HTMLImageElement';
import Image from '../nodes/html-image-element/Image';
import DocumentFragment from '../nodes/document-fragment/DocumentFragment';
import CharacterData from '../nodes/character-data/CharacterData';
import TreeWalker from '../tree-walker/TreeWalker';
import Event from '../event/Event';
import CustomEvent from '../event/events/CustomEvent';
import AnimationEvent from '../event/events/AnimationEvent';
import KeyboardEvent from '../event/events/KeyboardEvent';
import ProgressEvent from '../event/events/ProgressEvent';
import EventTarget from '../event/EventTarget';
import URL from '../location/URL';
import Location from '../location/Location';
import MutationObserver from '../mutation-observer/MutationObserver';
import DOMParser from '../dom-parser/DOMParser';
import XMLSerializer from '../xml-serializer/XMLSerializer';
import ResizeObserver from '../resize-observer/ResizeObserver';
import Blob from '../file/Blob';
import File from '../file/File';
import DOMException from '../exception/DOMException';
import FileReader from '../file/FileReader';
import History from '../history/History';
import CSSStyleSheet from '../css/CSSStyleSheet';
import CSSStyleDeclaration from '../css/CSSStyleDeclaration';
import CSS from '../css/CSS';
import CSSUnitValue from '../css/CSSUnitValue';
import MouseEvent from '../event/events/MouseEvent';
import PointerEvent from '../event/events/PointerEvent';
import FocusEvent from '../event/events/FocusEvent';
import WheelEvent from '../event/events/WheelEvent';
import DataTransfer from '../event/DataTransfer';
import DataTransferItem from '../event/DataTransferItem';
import DataTransferItemList from '../event/DataTransferItemList';
import InputEvent from '../event/events/InputEvent';
import UIEvent from '../event/UIEvent';
import ErrorEvent from '../event/events/ErrorEvent';
import StorageEvent from '../event/events/StorageEvent';
import Screen from '../screen/Screen';
import AsyncTaskManager from '../async-task-manager/AsyncTaskManager';
import IResponse from '../fetch/IResponse';
import IResponseInit from '../fetch/IResponseInit';
import IRequest from '../fetch/IRequest';
import IRequestInit from '../fetch/IRequestInit';
import IHeaders from '../fetch/IHeaders';
import IHeadersInit from '../fetch/IHeadersInit';
import Storage from '../storage/Storage';
import IWindow from './IWindow';
import HTMLCollection from '../nodes/element/HTMLCollection';
import NodeList from '../nodes/node/NodeList';
import MediaQueryList from '../match-media/MediaQueryList';
import Selection from '../selection/Selection';
import * as PerfHooks from 'perf_hooks';
import Navigator from '../navigator/Navigator';
import MimeType from '../navigator/MimeType';
import MimeTypeArray from '../navigator/MimeTypeArray';
import Plugin from '../navigator/Plugin';
import PluginArray from '../navigator/PluginArray';
import { URLSearchParams } from 'url';
/**
 * Handles the Window.
 */
export default class Window extends EventTarget implements IWindow, NodeJS.Global {
    readonly happyDOM: {
        whenAsyncComplete: () => Promise<void>;
        cancelAsync: () => void;
        asyncTaskManager: AsyncTaskManager;
    };
    readonly Node: typeof Node;
    readonly HTMLElement: typeof HTMLElement;
    readonly HTMLUnknownElement: typeof HTMLUnknownElement;
    readonly HTMLTemplateElement: typeof HTMLTemplateElement;
    readonly HTMLFormElement: typeof HTMLFormElement;
    readonly HTMLInputElement: typeof HTMLInputElement;
    readonly HTMLTextAreaElement: typeof HTMLTextAreaElement;
    readonly HTMLImageElement: typeof HTMLImageElement;
    readonly Image: typeof Image;
    readonly HTMLScriptElement: typeof HTMLScriptElement;
    readonly HTMLLinkElement: typeof HTMLLinkElement;
    readonly HTMLStyleElement: typeof HTMLStyleElement;
    readonly HTMLLabelElement: typeof HTMLLabelElement;
    readonly HTMLSlotElement: typeof HTMLSlotElement;
    readonly HTMLMetaElement: typeof HTMLMetaElement;
    readonly HTMLBaseElement: typeof HTMLBaseElement;
    readonly SVGSVGElement: typeof SVGSVGElement;
    readonly SVGElement: typeof SVGElement;
    readonly Text: typeof Text;
    readonly Comment: typeof Comment;
    readonly ShadowRoot: typeof ShadowRoot;
    readonly Element: typeof Element;
    readonly DocumentFragment: typeof DocumentFragment;
    readonly CharacterData: typeof CharacterData;
    readonly NodeFilter: {
        FILTER_ACCEPT: number;
        FILTER_REJECT: number;
        FILTER_SKIP: number;
        SHOW_ALL: number;
        SHOW_ELEMENT: number;
        SHOW_ATTRIBUTE: number;
        SHOW_TEXT: number;
        SHOW_CDATA_SECTION: number;
        SHOW_ENTITY_REFERENCE: number;
        SHOW_ENTITY: number;
        SHOW_PROCESSING_INSTRUCTION: number;
        SHOW_COMMENT: number;
        SHOW_DOCUMENT: number;
        SHOW_DOCUMENT_TYPE: number;
        SHOW_DOCUMENT_FRAGMENT: number;
        SHOW_NOTATION: number;
    };
    readonly TreeWalker: typeof TreeWalker;
    readonly DOMParser: typeof DOMParser;
    readonly MutationObserver: typeof MutationObserver;
    readonly Document: typeof Document;
    readonly HTMLDocument: typeof HTMLDocument;
    readonly XMLDocument: typeof XMLDocument;
    readonly SVGDocument: typeof SVGDocument;
    readonly Event: typeof Event;
    readonly UIEvent: typeof UIEvent;
    readonly CustomEvent: typeof CustomEvent;
    readonly AnimationEvent: typeof AnimationEvent;
    readonly KeyboardEvent: typeof KeyboardEvent;
    readonly MouseEvent: typeof MouseEvent;
    readonly PointerEvent: typeof PointerEvent;
    readonly FocusEvent: typeof FocusEvent;
    readonly WheelEvent: typeof WheelEvent;
    readonly InputEvent: typeof InputEvent;
    readonly ErrorEvent: typeof ErrorEvent;
    readonly StorageEvent: typeof StorageEvent;
    readonly ProgressEvent: typeof ProgressEvent;
    readonly EventTarget: typeof EventTarget;
    readonly DataTransfer: typeof DataTransfer;
    readonly DataTransferItem: typeof DataTransferItem;
    readonly DataTransferItemList: typeof DataTransferItemList;
    readonly URL: typeof URL;
    readonly Location: typeof Location;
    readonly CustomElementRegistry: typeof CustomElementRegistry;
    readonly Window: typeof Window;
    readonly XMLSerializer: typeof XMLSerializer;
    readonly ResizeObserver: typeof ResizeObserver;
    readonly CSSStyleSheet: typeof CSSStyleSheet;
    readonly Blob: typeof Blob;
    readonly File: typeof File;
    readonly FileReader: typeof FileReader;
    readonly DOMException: typeof DOMException;
    readonly History: typeof History;
    readonly Screen: typeof Screen;
    readonly Storage: typeof Storage;
    readonly URLSearchParams: typeof URLSearchParams;
    readonly HTMLCollection: typeof HTMLCollection;
    readonly NodeList: typeof NodeList;
    readonly MediaQueryList: typeof MediaQueryList;
    readonly CSSUnitValue: typeof CSSUnitValue;
    readonly Selection: typeof Selection;
    readonly Navigator: typeof Navigator;
    readonly MimeType: typeof MimeType;
    readonly MimeTypeArray: typeof MimeTypeArray;
    readonly Plugin: typeof Plugin;
    readonly PluginArray: typeof PluginArray;
    onload: (event: Event) => void;
    onerror: (event: ErrorEvent) => void;
    readonly document: Document;
    readonly customElements: CustomElementRegistry;
    readonly location: Location;
    readonly history: History;
    readonly navigator: Navigator;
    readonly console: Console;
    readonly self: this;
    readonly top: this;
    readonly parent: this;
    readonly window: this;
    readonly globalThis: this;
    readonly screen: Screen;
    readonly innerWidth = 1024;
    readonly innerHeight = 768;
    readonly devicePixelRatio = 1;
    readonly sessionStorage: Storage;
    readonly localStorage: Storage;
    readonly performance: PerfHooks.Performance;
    ArrayBuffer: ArrayBufferConstructor;
    Boolean: BooleanConstructor;
    Buffer: any;
    DataView: DataViewConstructor;
    Date: DateConstructor;
    Error: ErrorConstructor;
    EvalError: EvalErrorConstructor;
    Float32Array: Float32ArrayConstructor;
    Float64Array: Float64ArrayConstructor;
    GLOBAL: any;
    Infinity: number;
    Int16Array: Int16ArrayConstructor;
    Int32Array: Int32ArrayConstructor;
    Int8Array: Int8ArrayConstructor;
    Intl: typeof Intl;
    JSON: JSON;
    Map: MapConstructor;
    Math: Math;
    NaN: number;
    Number: NumberConstructor;
    Promise: PromiseConstructor;
    RangeError: RangeErrorConstructor;
    ReferenceError: ReferenceErrorConstructor;
    RegExp: RegExpConstructor;
    Reflect: typeof Reflect;
    Set: SetConstructor;
    Symbol: Function & SymbolConstructor;
    SyntaxError: SyntaxErrorConstructor;
    String: StringConstructor;
    TypeError: TypeErrorConstructor;
    URIError: URIErrorConstructor;
    Uint16Array: Uint16ArrayConstructor;
    Uint32Array: Uint32ArrayConstructor;
    Uint8Array: Uint8ArrayConstructor;
    Uint8ClampedArray: Uint8ClampedArrayConstructor;
    WeakMap: WeakMapConstructor;
    WeakSet: WeakSetConstructor;
    clearImmediate: any;
    decodeURI: typeof decodeURI;
    decodeURIComponent: typeof decodeURIComponent;
    encodeURI: typeof encodeURI;
    encodeURIComponent: typeof encodeURIComponent;
    escape: ((str: string) => string) & typeof escape;
    global: any;
    isFinite: typeof isFinite;
    isNaN: typeof isNaN;
    parseFloat: typeof parseFloat;
    parseInt: typeof parseInt;
    process: any;
    root: any;
    setImmediate: any;
    queueMicrotask: typeof queueMicrotask;
    undefined: any;
    unescape: ((str: string) => string) & typeof unescape;
    gc: any;
    v8debug: any;
    AbortController: {
        new (): AbortController;
        prototype: AbortController;
    };
    AbortSignal: {
        new (): AbortSignal;
        prototype: AbortSignal;
    };
    private _objectClass;
    private _arrayClass;
    private _functionClass;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Returns Object class.
     *
     * @returns Object class.
     */
    get Object(): typeof globalThis.Object;
    /**
     * Returns Array class.
     *
     * @returns Array class.
     */
    get Array(): typeof globalThis.Array;
    /**
     * Returns Function class.
     *
     * @returns Function class.
     */
    get Function(): typeof globalThis.Function;
    /**
     * The CSS interface holds useful CSS-related methods.
     *
     * @returns CSS interface.
     */
    get CSS(): CSS;
    /**
     * Returns Headers class.
     *
     * @returns Headers.
     */
    get Headers(): {
        new (init?: IHeadersInit): IHeaders;
    };
    /**
     * Returns Request class.
     *
     * @returns Request.
     */
    get Request(): {
        new (input: string | {
            href: string;
        } | IRequest, init?: IRequestInit): IRequest;
    };
    /**
     * Returns Response class.
     *
     * @returns Response.
     */
    get Response(): {
        new (body?: NodeJS.ReadableStream | null, init?: IResponseInit): IResponse;
    };
    /**
     * Evaluates code.
     *
     * @param code Code.
     * @returns Result.
     */
    eval(code: string): unknown;
    /**
     * Returns an object containing the values of all CSS properties of an element.
     *
     * @param element Element.
     * @returns CSS style declaration.
     */
    getComputedStyle(element: HTMLElement): CSSStyleDeclaration;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Returns a new MediaQueryList object that can then be used to determine if the document matches the media query string.
     *
     * @param mediaQueryString A string specifying the media query to parse into a MediaQueryList.
     * @returns A new MediaQueryList.
     */
    matchMedia(mediaQueryString: string): MediaQueryList;
    /**
     * Sets a timer which executes a function once the timer expires.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Timeout ID.
     */
    setTimeout(callback: () => void, delay?: number): NodeJS.Timeout;
    /**
     * Cancels a timeout previously established by calling setTimeout().
     *
     * @override
     * @param id ID of the timeout.
     */
    clearTimeout(id: NodeJS.Timeout): void;
    /**
     * Calls a function with a fixed time delay between each call.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Interval ID.
     */
    setInterval(callback: () => void, delay?: number): NodeJS.Timeout;
    /**
     * Cancels a timed repeating action which was previously established by a call to setInterval().
     *
     * @override
     * @param id ID of the interval.
     */
    clearInterval(id: NodeJS.Timeout): void;
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param callback Callback.
     * @returns Timeout ID.
     */
    requestAnimationFrame(callback: (timestamp: number) => void): NodeJS.Timeout;
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param id Timeout ID.
     */
    cancelAnimationFrame(id: NodeJS.Timeout): void;
    /**
     * This method provides an easy, logical way to fetch resources asynchronously across the network.
     *
     * @override
     * @param url URL.
     * @param [init] Init.
     * @returns Promise.
     */
    fetch(url: string, init?: IRequestInit): Promise<IResponse>;
}
