const { withInfoPlist } = require("expo/config-plugins");

const withImageImportSupport = (config) => {
  return withInfoPlist(config, (config) => {
    const bundleId = config.ios.bundleIdentifier;

    const nextUtiExportedTypeDeclarations = [
      {
        UTTypeIdentifier: `${bundleId}.jpeg`,
        UTTypeConformsTo: ["public.image"],
        UTTypeDescription: "JPEG Image",
        UTTypeTagSpecification: {
          "public.filename-extension": ["jpg", "jpeg"],
          "public.mime-type": ["image/jpeg"],
        },
      },
      {
        UTTypeIdentifier: `${bundleId}.png`,
        UTTypeConformsTo: ["public.image"],
        UTTypeDescription: "PNG Image",
        UTTypeTagSpecification: {
          "public.filename-extension": ["png"],
          "public.mime-type": ["image/png"],
        },
      },
      {
        UTTypeIdentifier: `${bundleId}.gif`,
        UTTypeConformsTo: ["public.image"],
        UTTypeDescription: "GIF Image",
        UTTypeTagSpecification: {
          "public.filename-extension": ["gif"],
          "public.mime-type": ["image/gif"],
        },
      },
      {
        UTTypeIdentifier: `${bundleId}.heic`,
        UTTypeConformsTo: ["public.image"],
        UTTypeDescription: "HEIC Image",
        UTTypeTagSpecification: {
          "public.filename-extension": ["heic"],
          "public.mime-type": ["image/heic"],
        },
      },
      {
        UTTypeIdentifier: `${bundleId}.avif`,
        UTTypeConformsTo: ["public.image"],
        UTTypeDescription: "AVIF Image",
        UTTypeTagSpecification: {
          "public.filename-extension": ["avif"],
          "public.mime-type": ["image/avif"],
        },
      },
    ];
    const nextUtiExportedTypeDeclarationsIdentifiers =
      nextUtiExportedTypeDeclarations.map((dec) => dec.UTTypeIdentifier);

    const includesEverything = {
      CFBundleDocumentTypes: [
        ...(config.modResults.CFBundleDocumentTypes || {}).filter((item) => {
          const isMatching =
            item.CFBundleTypeName === "Image" &&
            item.CFBundleTypeName.LSHandlerRank === "Owner" &&
            item.CFBundleTypeName.LSItemContentTypes.includes(
              `${bundleId}.jpeg`
            );
          return !isMatching;
        }),
        {
          CFBundleTypeName: "Image",
          LSHandlerRank: "Owner",
          LSItemContentTypes: [
            `${bundleId}.jpeg`,
            `${bundleId}.png`,
            `${bundleId}.gif`,
            `${bundleId}.heic`,
            `${bundleId}.avif`,
            "public.image",
          ],
        },
      ],
      UTExportedTypeDeclarations: [
        ...(config.modResults.UTExportedTypeDeclarations || {}).filter(
          // Remove duplicates
          (declaration) =>
            nextUtiExportedTypeDeclarationsIdentifiers.includes(
              declaration.UTTypeIdentifier
            )
        ),
        {
          UTTypeIdentifier: `${bundleId}.jpeg`,
          UTTypeConformsTo: ["public.image"],
          UTTypeDescription: "JPEG Image",
          UTTypeTagSpecification: {
            "public.filename-extension": ["jpg", "jpeg"],
            "public.mime-type": ["image/jpeg"],
          },
        },
        {
          UTTypeIdentifier: `${bundleId}.png`,
          UTTypeConformsTo: ["public.image"],
          UTTypeDescription: "PNG Image",
          UTTypeTagSpecification: {
            "public.filename-extension": ["png"],
            "public.mime-type": ["image/png"],
          },
        },
        {
          UTTypeIdentifier: `${bundleId}.gif`,
          UTTypeConformsTo: ["public.image"],
          UTTypeDescription: "GIF Image",
          UTTypeTagSpecification: {
            "public.filename-extension": ["gif"],
            "public.mime-type": ["image/gif"],
          },
        },
        {
          UTTypeIdentifier: `${bundleId}.heic`,
          UTTypeConformsTo: ["public.image"],
          UTTypeDescription: "HEIC Image",
          UTTypeTagSpecification: {
            "public.filename-extension": ["heic"],
            "public.mime-type": ["image/heic"],
          },
        },
        {
          UTTypeIdentifier: `${bundleId}.avif`,
          UTTypeConformsTo: ["public.image"],
          UTTypeDescription: "AVIF Image",
          UTTypeTagSpecification: {
            "public.filename-extension": ["avif"],
            "public.mime-type": ["image/avif"],
          },
        },
      ],
    };

    config.modResults = {
      ...config.modResults,
      ...includesEverything,
    };
    return config;
  });
};

module.exports = withImageImportSupport;
