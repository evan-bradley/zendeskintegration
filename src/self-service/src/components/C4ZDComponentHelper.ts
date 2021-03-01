import { ZendeskOptions } from "../models/ZendeskOptions";
import { C4ZDComponent } from "./C4ZDComponent";
import { CaseDeflection } from "./CaseDeflection";
import { CoveoHostedSearchPage } from "./HostedSearchPage";

export class C4ZDComponentHelper {
    private static readonly components: C4ZDComponent[] = [
        new CoveoHostedSearchPage(),
        new CaseDeflection()
    ]

    public static async initComponents(options: ZendeskOptions) {
        for (let component of this.components) {
            let htmlElems = document.getElementsByTagName(component.tag);
            let promises = _.map(htmlElems, async (elem) => {
                try {
                    await component.init(elem as HTMLElement, options);
                }
                catch (ex) {
                    console.error(`${component.tag}: ${ex.message}`);
                }
            });
            await Promise.all(promises);
        }
    }
}