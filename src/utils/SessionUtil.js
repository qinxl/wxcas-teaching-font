const SessionUtil = {
  setUserInfo: userInfo => {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  },
  getUserInfo: () => {
    let userInfo = sessionStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : false;
  },
  clearSession: () => {
    sessionStorage.clear();
  },
};
export default SessionUtil;
