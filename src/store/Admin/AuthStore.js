import { observable, action } from 'mobx';

class AuthStore {
    @observable num = 0;

    @action plus() {
        this.num++;
    }

    @action minus() {
        this.num--;
    }
}
const authStore = new AuthStore();
export default authStore;