import { $ } from '@wdio/globals'
import Page from './page';

class DAHome extends Page {

    url : string = "https://www.fidelitydigitalassets.com/";

    public get navigateToPage() {
        return this.openBrowserAtUrl(this.url);
    }

    public get getUrl() {
        return this.url;
    }

    public get logo() {
        return $("//header/descendant::a[descendant::img[contains(@class,'fdas-logo')]]");
    }
}

export default new DAHome();
