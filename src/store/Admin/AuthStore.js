import { observable, action, computed } from 'mobx';

class AuthStore {
  @observable authList = [];

  @computed get getAuthList() {
    return this.authList;
  }

  @action setAuthList(data) {
    this.authList = data;
  }
}
const authStore = new AuthStore();
export default authStore;
