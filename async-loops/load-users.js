async function loadUsers(userIds, load, done) {
  let result = [];
  let loadedCount = 0;

  userIds.forEach((id) => {
    load(id, function (user, userId) {
      result[userId] = user;
      loadedCount++;
      if (loadedCount === userIds.length) done(result);
    });
  });
};

module.exports = loadUsers;