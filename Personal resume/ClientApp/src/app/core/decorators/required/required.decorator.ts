export function RequiredProps(selector: string, ...inputs: string[]) {
  return function (constructor: any) {
      const original = constructor.prototype.ngOnInit;

      constructor.prototype.ngOnInit = function () {
          inputs.forEach((input: string) => {
              if (this[input] === undefined) {
                  throw new Error(`${constructor.name}[${selector}], [${input}] attribute is required`);
              }
          });

          if (original && typeof original === 'function') {
              original.apply(this, arguments);
          }
      };
  };
}

export function Required(selector: string) {
  return (target: any, propertyKey: string) => {
    const NG_ON_INIT = 'ngOnInit';

    // eslint-disable-next-line @typescript-eslint/ban-types
    const original: Function | null = target[NG_ON_INIT];

    target[NG_ON_INIT] = function () {

      if (this[propertyKey] === undefined) {
        throw new Error(`${selector}, [${propertyKey}] attribute is required`);
      }

      if (original) {
        original.apply(this);
      }
    };
  }
}

export function RequiredWhenRead(selector: string) {
  return (target: object, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get() {
        throw new Error(`${selector}, [${propertyKey}] attribute is required`);
      },
      set(value) {
        Object.defineProperty(target, propertyKey, {
          value,
          writable: true,
          configurable: true,
        });
      },
      configurable: true
    });
  }
}
