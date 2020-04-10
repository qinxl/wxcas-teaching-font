import { observable, action, computed } from 'mobx';

class AppStore {
    @observable appList = [];

    @computed get systemAppList() {
        return this.appList.filter((app) => app.type === 0)
    }

    @computed get toolAppList() {
        return this.appList.filter((app) => app.type === 1)
    }

    @action setAppList(appList) {
        this.appList = appList;
    }
}
const appStore = new AppStore();
export default appStore;