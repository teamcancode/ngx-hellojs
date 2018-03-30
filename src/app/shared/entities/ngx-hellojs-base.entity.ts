export abstract class NgxHellojsBaseEntity {

  constructor(object?: Object) {
    if (!object) {
      return;
    }

    for (const key in object) {
      if (object[key] || 0 === object[key]) {
        const description = Object.getOwnPropertyDescriptor(object, key);

        if (description && description.writable) {
          this[this.toCamelCase(key)] = object[key];
        }
      }
    }
  }

  // noinspection JSMethodCanBeStatic
  private toCamelCase(str: string): string {
    str = str.replace(/[_ ](.)/g, (match, p1) => p1.toUpperCase());
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

}
