async function loadUsers(userIds, load, done) {
  let result = [];

  userIds.forEach((id) => {
    load(id, function (user, userId) {
      result[userId] = user;
    });
  });

  done(result);
};

module.exports = loadUsers;