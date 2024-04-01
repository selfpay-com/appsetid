import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppSetIdPlugin)
public class AppSetIdPlugin: CAPPlugin {
    @objc func retrieve(_ call: CAPPluginCall) {
        call.resolve([
            "error": "AppSetId not available on iOS"
        ])
    }
}
