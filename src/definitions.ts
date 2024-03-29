export interface AppSetIdPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
