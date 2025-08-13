import { InjectionToken, Injector, Type } from '@angular/core';

type Token<T> = Type<T> | InjectionToken<T>;

export class DialogInjector implements Injector {
  private constructor(
    private readonly _parentInjector: Injector,
    private readonly _additionalTokens: WeakMap<Token<unknown>, unknown>,
  ) {}

  public static create(
    parentInjector: Injector,
    additionalTokens?: WeakMap<Token<unknown>, unknown>,
  ): DialogInjector {
    return new DialogInjector(
      parentInjector,
      additionalTokens ?? new WeakMap(),
    );
  }

  public get<T>(token: Token<T>, notFoundValue?: T): T {
    if (this._additionalTokens.has(token)) {
      return this._additionalTokens.get(token) as T;
    }
    return this._parentInjector.get(token, notFoundValue);
  }
}
