import { observable, action, computed } from 'mobx';

class AppStore {
  @observable appList = [
    { id: 1, label: '数据中心', type: 0, href: '/admin', icon: 'http://112.35.48.176:8180/uccenter/app/201909/20190919204514354_652/sys_001.png' },
    { id: 2, label: '大纲修订', type: 0, href: '', icon: 'http://112.35.48.176:8180/uccenter/app/201909/20190919210507119_855/sys_015.png' },
    { id: 3, label: '试卷管理', type: 0, href: '', icon: 'http://112.35.48.176:8180/uccenter/app/201909/20190919210633110_141/sys_013.png' },
    { id: 4, label: '资源库', type: 0, href: '', icon: 'http://112.35.48.176:8180/uccenter/app/201909/20190919211322853_480/我的客户.png' },
    { id: 5, label: '课堂辅助', type: 1, href: '', icon: 'http://112.35.48.176:8180/uccenter/app/201912/20191223143851822_325/优惠券.png' },
    { id: 6, label: '成绩管理', type: 1, href: '', icon: 'http://112.35.48.176:8180/uccenter/app/201909/20190919205359400_302/sys_007.png' },
  ];

  @computed get dataAppList() {
    return this.appList.filter(app => app.type === 0);
  }

  @computed get teachingAppList() {
    return this.appList.filter(app => app.type === 1);
  }

  @action setAppList(appList) {
    this.appList = appList;
  }
}
const appStore = new AppStore();
export default appStore;
