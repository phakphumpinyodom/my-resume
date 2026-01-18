export const asset = (path: string) => {
  const base = process.env.NEXT_PUBLIC_BASEPATH ?? "";
  const p = path?.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};
