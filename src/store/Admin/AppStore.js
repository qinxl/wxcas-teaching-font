import { observable, action, computed } from 'mobx';

class AppStore {
  @observable appList = [];

  @computed get dataAppList() {
    return this.appList.filter(app => app.type === 0);
  }

  @computed get teachingAppList() {
    return this.appList.filter(app => app.type === 1);
  }

  @action setAppList(data) {
    this.appList = data;
  }
}
const appStore = new AppStore();
export default appStore;
