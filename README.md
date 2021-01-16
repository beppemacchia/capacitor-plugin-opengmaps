# Google Maps App opener for Capacitor

Open Google Maps App on device.

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

Add this line to Info.plist:
```bash
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>googlechromes</string>
      <string>comgooglemapsurl</string>
      <string>comgooglemaps</string>
      <string>comgooglemaps-x-callback</string>
</array>
```

## Usage

To use the plugin, import and use it like this:

```typescript
import { Plugins } from '@capacitor/core';

const { OpenGmaps } = Plugins;

const request = {
  query: 'Via Roma 15, Lecce' // address or coordinates
};

Plugins.OpenGmaps.openNavigation(request).then((result) => {
  console.log('Result open gmaps', result);
}).catch((error) => {
  console.error('Error open gmaps', error);
});

```
