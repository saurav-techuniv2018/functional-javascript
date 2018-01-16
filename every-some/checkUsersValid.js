function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    let areAllPresent = submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function (user) { return this.id === user.id }, submittedUser);
    });
    return areAllPresent;
  };
}

module.exports = checkUsersValid;
