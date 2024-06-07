export function redirectSystemPath({
  path,
  initial,
}: {
  path: string;
  initial: boolean;
}) {
  console.log("redirectSystemPath", path, initial);

  if (path.startsWith("file://")) {
    return "/modal?file=" + path;
  }

  return path;
}
