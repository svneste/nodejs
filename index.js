// Здесь функциональность точки входа
const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

// Здесь данные
const users = [
  { name: 'Мария', age: 22 },
  { name: 'Виктор', age: 30 },
  { name: 'Анастасия', age: 48 },
  { name: 'Алексей', age: 51 }
];

// Здесь роутинг
app.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send(`Такого пользователя не существует`);

    // не забудем выйти из функции
    return;
  }

  const { name, age } = users[req.params.id];

  res.send(`Пользователь ${name}, ${age} лет`);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
