import { WebPlugin } from '@capacitor/core';
import type { AppSetIdPlugin } from './definitions';
export declare class AppSetIdWeb extends WebPlugin implements AppSetIdPlugin {
    retrieve(): Promise<{
        appSetId: string;
        error: string;
    }>;
}
