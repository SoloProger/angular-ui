export abstract class DialogConfig<D = unknown> {
  public title!: string;
  public data?: D;
}
