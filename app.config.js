import "dotenv/config";

export default {
  expo: {
    name: "nubankClone",
    slug: "nubankClone",
    version: "1.0.0",
    assetBundlePatterns: ["**/*"],
    extra: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
  },
  name: "nubankClone",
};
