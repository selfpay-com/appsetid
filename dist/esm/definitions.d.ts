export interface AppSetIdPlugin {
    retrieve(): Promise<{
        appSetId: string;
        error: string;
    }>;
}
