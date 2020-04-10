const userInfo = localStorage.getItem('userInfo');
console.log(JSON.stringify(userInfo));

const SessionUtil = {
  getUserInfo: () => userInfo,
  getJobNumber: () => userInfo.jobNumber,
  getUserId: () => userInfo.id,
  getRealName: userInfo.realName,
};

export default SessionUtil;
