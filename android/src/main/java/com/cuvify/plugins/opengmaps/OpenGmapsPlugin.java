package com.cuvify.plugins.opengmaps;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Intent;
import android.net.Uri;

@CapacitorPlugin(name = "OpenGmaps")
public class OpenGmapsPlugin extends Plugin {

    @PluginMethod
    public void openNavigation(PluginCall call) {
        String query = call.getString("query");

        Uri gmmIntentUri = Uri.parse("google.navigation:q=" + query);
        Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
        mapIntent.setPackage("com.google.android.apps.maps");
        getContext().startActivity(mapIntent);
        JSObject res = new JSObject();
        res.put("result", true);
        call.resolve(res);
    }
}
