const getIsLoggedIn = state => state.auth.isLoggedIn;
console.log(`getIsLoggedIn`, getIsLoggedIn);
const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;