package com.selfpay.plugins.appsetid;

import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AppSetId")
public class AppSetIdPlugin extends Plugin {

    @PluginMethod
    public void retrieve(PluginCall call) {
        Context context = this.bridge.getContext();

        AppSetIdRetriever.getAppSetId(context, (appSetId, error) -> {
            JSObject ret = new JSObject();
            ret.put("appSetId", appSetId);
            ret.put("error", error);
            call.resolve(ret);
        });

        
    }
}
