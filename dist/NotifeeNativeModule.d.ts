import { NativeModulesStatic } from 'react-native';
export interface NativeModuleConfig {
    version: string;
    nativeModuleName: string;
    nativeEvents: string[];
}
export default class NotifeeNativeModule {
    private readonly _moduleConfig;
    private _nativeModule;
    private _nativeEmitter;
    constructor(config: NativeModuleConfig);
    get emitter(): import("react-native/Libraries/vendor/emitter/EventEmitter").default;
    get native(): NativeModulesStatic;
}
