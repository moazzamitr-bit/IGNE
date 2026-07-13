export function assetPath(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
