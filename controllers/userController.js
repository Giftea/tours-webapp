const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users: users,
    },
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      user: user,
    },
  });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newuser = {id: newId, ...req.body};

  users.push(newuser);
  fs.writeFile(
    `${__dirname}/dev-data/data/users-simple.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          user: newuser,
        },
      });
    }
  );
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: '<Updated user>',
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
