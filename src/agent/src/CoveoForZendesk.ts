import { ZendeskOptions } from "./models/ZendeskOptions";
import { InsightPanel } from "./components/InsightPanel/InsightPanel";
import { ZendeskClient } from "./zendesk/ZendeskClient/ZendeskClient";
import { TopBar } from "./components/TopBar/TopBar";


export function init(options: ZendeskOptions) {
    var root = <HTMLElement>document.querySelector("#search");

    if (options.product == "support" && options.location.indexOf("ticket_sidebar") >= 0) {
        new InsightPanel(root, options, new ZendeskClient()).init(options.location != "new_ticket_sidebar");
    } else if (options.product == "support" && options.location == "top_bar") {
        new TopBar(root, options, new ZendeskClient()).init();
    }
}