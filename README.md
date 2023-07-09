# Google Maps App opener for Capacitor

Open Google Maps App on device.

## Installation
Build and install yourself

## API

<docgen-index>

* [`openNavigation(...)`](#opennavigation)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openNavigation(...)

```typescript
openNavigation(request: OpenGmapsRequest) => Promise<OpenGmapsResponse>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`request`** | <code><a href="#opengmapsrequest">OpenGmapsRequest</a></code> |

**Returns:** <code>Promise&lt;<a href="#opengmapsresponse">OpenGmapsResponse</a>&gt;</code>

--------------------


### Interfaces


#### OpenGmapsResponse

| Prop         | Type                 |
| ------------ | -------------------- |
| **`result`** | <code>boolean</code> |


#### OpenGmapsRequest

| Prop        | Type                |
| ----------- | ------------------- |
| **`query`** | <code>string</code> |

</docgen-api>
