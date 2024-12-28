export function sanitizeObject(object: Record<string, any> = {}): Record<string, any> {
  return Object.keys(object).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }

    return {
      ...acc,
      [key]: value
    };
  }, {});
}
