# Qori pay App (qori-pay)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Generar llave

```bash
keytool -genkey -v -keystore qoripayrelease-key.keystore -alias qoripay-release -keyalg RSA -keysize 2048 -validity 20000
```

### App release and optimize

```bash
 "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore qoripayrelease-key.keystore app-release-unsigned.apk qoripayrelease-key",
 "/home/[user]/Android/Sdk/build-tools/31.0.0/zipalign -v 4 app-release-unsigned.apk qori-pay.apk"
```
