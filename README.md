# Expo Router +native-intent Demo

This repo demonstrates how to use the `app/+native-intent.ts` file to intercept a link on native devices and rewrite it before it goes to the Expo Router logic.

In this example, we add a config plugin which enables the app to show up when you press the "Share" button on a picture or image across the iOS device. When the app is selected, iOS will launch the app using a `file://path/to/image.png` URL. The `app/+native-intent.ts` file will intercept this URL and rewrite it to `/modal?file=<URL>` so that Expo Router redirects the app to `app/modal.tsx` and passes the file URL as a query parameter called `file`.

This same logic is useful for other non-standard intent-based URLs which launch your app but cannot be used to launch a website. For example, notifications and Branch.

## API

The `+native-intent.ts` file supports one export called `redirectSystemPath`. This function is called with the string (note: it doesn't have to be a valid URL) that the app was launched with from an external process. It should return a new string that the app should navigate to.

This function is called with an object with two properties:

- `path`: The string that was passed to the app.
- `initial`: A boolean which is `true` if the app was launched with this path, and false if the app was already running and the path was passed to the app.

```ts
export async function redirectSystemPath({
  path,
  initial,
}: {
  path: string;
  initial: boolean;
}) {
  if (path.startsWith("file://")) {
    // Remap `file://` to be a query param and send to the route which can handle it.
    return "/modal?file=" + encodeURIComponent(path);
  }

  return path;
}
```

This function is never called for internal redirects or navigation events that are triggered by the app itself. It is only called when the app is launched from an external process. You should think of it as an API to make external links more conformant to your app's routing logic, and not as a way to redirect or manipulate in-app routing logic.

The can only be one `+native-intent` file in your project and it must be in the top-level app directory. It is not allowed to be in a subdirectory.

`+native-intent` has no effect on web projects as it's only triggered by the native intent APIs for iOS and Android. Websites can only be launched using standard URLs that conform to the server that's hosting them.

> `+native-intent.ts` was first introduced in Expo Router v3.5 with Expo SDK 51.
