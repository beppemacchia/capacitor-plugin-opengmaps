package com.cuvify.plugins.opengmaps;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class OpenGmaps extends Plugin {

    @PluginMethod
    public void openMaps(PluginCall call) {

        PackageManager packageManager = this.bridge.getActivity().getPackageManager();
        String appName = "";

        try {
            ApplicationInfo app = packageManager.getApplicationInfo(this.bridge.getActivity().getPackageName(), 0);
            appName = (String)packageManager.getApplicationLabel(app);
        } catch (PackageManager.NameNotFoundException e) {

        }

        JSObject res = new JSObject();
        res.put("appName", appName);
        call.success(res);
        
    }

}
