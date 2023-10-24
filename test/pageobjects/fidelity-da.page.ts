import { $ } from '@wdio/globals'
import Page from './page';

class DAHome extends Page {

    public get logo() {
        return $("//header/descendant::a[descendant::img[contains(@class,'fdas-logo')]]");
    }
}

export default new DAHome();
