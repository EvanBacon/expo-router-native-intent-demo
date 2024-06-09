export async function redirectSystemPath({
  path,
  initial,
}: {
  path: string;
  initial: boolean;
}) {
  console.log("redirectSystemPath", path, initial);

  if (path.startsWith("file://")) {
    // Remap `file://` to be a query param and send to the route which can handle it.
    return "/modal?file=" + encodeURIComponent(path);
  }

  return path;
}
