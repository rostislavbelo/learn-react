declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}

declare module "*.jpeg";

declare module "*.png";

interface Window {
  __token__: string;
}
