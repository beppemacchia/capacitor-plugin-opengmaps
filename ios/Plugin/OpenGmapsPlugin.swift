import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OpenGmapsPlugin)
public class OpenGmapsPlugin: CAPPlugin {

    @objc func openNavigation(_ call: CAPPluginCall) {
        let query = call.getString("query") ?? ""

        DispatchQueue.main.async {
            if (UIApplication.shared.canOpenURL(URL(string:"comgooglemaps://")!)) {
                let url = URL(string:"comgooglemaps://?daddr=" + query)!
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
                 call.resolve([
                    "result": true
                ])
            } else {
                 print("Can't use comgooglemaps://, google maps not installed");
                 if let url = URL(string: "itms-apps://apple.com/app/id585027354") {
                     UIApplication.shared.open(url)
                    call.resolve([
                        "result": true
                    ])
                 } else {
                    call.resolve([
                        "result": false
                    ])
                 }
            }
        }
    }
}
