package com.selfpay.plugins.appsetid;

import android.content.Context;

import java.util.function.BiConsumer;

import com.google.android.gms.appset.AppSet;
import com.google.android.gms.appset.AppSetIdClient;
import com.google.android.gms.appset.AppSetIdInfo;

public class AppSetIdRetriever {

    public static void getAppSetId(Context context, BiConsumer<String, String> callback) {
        AppSet.getClient(context).getAppSetIdInfo()
            .addOnSuccessListener(appSetIdInfo -> {
                // Handle successful retrieval of the app set ID information
                if (appSetIdInfo != null) {
                    String appSetId = appSetIdInfo.getId();
                    callback.accept(appSetId, null);
                } else {
                    callback.accept(null, "Native object is null");
                }
            })
            .addOnFailureListener(exception -> {
                callback.accept(null, "Failed to retrieve App Set ID info: " + exception.getMessage());
            });
    }
}
