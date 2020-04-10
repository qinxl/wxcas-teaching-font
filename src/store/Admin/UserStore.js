import { observable, action } from 'mobx';

class UserStore {
    @observable num = 1;

    @action plus() {
        this.num++;
    }

    @action minus() {
        this.num--;
    }
}

const userStore = new UserStore();

export default userStore;