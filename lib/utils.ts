export const logger =
  (domain: string) =>
  (...rest: any) => {
    // if (import.meta.env.MODE === 'development') {
    console.log(domain, ...rest);
    // }
  };
