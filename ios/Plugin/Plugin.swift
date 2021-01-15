import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OpenGmaps)
public class OpenGmaps: CAPPlugin {

    
    @objc func openMaps(_ call: CAPPluginCall) {
        let appName = Bundle.main.infoDictionary?["CFBundleDisplayName"] as? String ?? ""
        
        call.success([
            "appName": appName
        ])
    }

}
