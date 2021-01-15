# App Version SDK for Capacitor

Reads the version of your app from the target build settings.

## Installation

### Android

Register the plugin in your main activity:

```bash
// Other imports...
import com.cuvify.plugins.opengmaps.OpenGmaps;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you have installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(OpenGmaps.class);
    }});
  }
}
```

### iOS

No further steps are needed

## Usage

To use the plugin, import and use it like this:

```typescript
import { Plugins } from '@capacitor/core';

const { OpenGmaps } = Plugins;

const getAllInfo = async () => {
  const appName = await OpenGmaps.getAppName();
  const packageName = await OpenGmaps.getPackageName();
  const versionNumber = await OpenGmaps.getVersionNumber();
  const versionCode = await OpenGmaps.getVersionCode();

  console.log("App Name: ", appName.appName);
  console.log("Package Name: ", packageName.packageName);
  console.log("Version Number: ", versionNumber.versionNumber);
  console.log("Version Code: ", versionCode.versionCode);
};
```
