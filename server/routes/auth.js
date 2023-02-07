const checkAuth = require("../utils");
const { Router } = require("express");
const router = new Router();
const { Users } = require("../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const upload = require("../utils/multer");

router.post("/signUp", async (req, res) => {
  try {
    const { email, password, name, phone } = req.body; /// / запрашиваем информацию с фронта о юзере и пароле

    const isUsed = await Users.findOne({ where: { email } }); /// / ищем в базе данных по email
    if (isUsed) {
      // если такой пользователь существует то отправляем сообщение и статус
      return res.json({
        message: "Такой пользователь уже существует!",
      });
    }
    if (!isUsed) {
      const salt = bcrypt.genSaltSync(10); /// / хэшируем пароль
      const hash = bcrypt.hashSync(password, salt);

      const newUser = await Users.create({
        /// / создаем нового юзера
        email,
        password: hash,
        name,
        phone,
      });

      const token = jwt.sign(
        {
          // создаем JWT токен для авторизации и шифруем его по id юзера
          id: newUser.id,
        },
        "efdfdsgfdff6gdfg77fdgdfg", /// /секретная фраза
        { expiresIn: "30d" } /// / срок действия токена
      );

      await newUser.save(); /// / записываем в БД

      return res.json({
        newUser,
        token,
        message: "Регистрация успешна!",
      });
    }
  } catch (error) {
    res.json({
      message: "Ошибка при создании пользователя!",
    });
  }
});

router.post("/signIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.json({
        message: "Такой пользователь не существует",
      });
    }
    const correctPass = await bcrypt.compare(password, user.password);
    // сравниваем пароль который пришел с фронта с паролем в базе данных
    if (!correctPass) {
      return res.json({
        message: "Неверный пароль.",
      });
    }

    const token = jwt.sign(
      {
        // создаем JWT токен для авторизации и шифруем его по id юзера
        id: user.id,
      },
      "efdfdsgfdff6gdfg77fdgdfg", // секретная фраза
      { expiresIn: "30d" } // срок действия токкена
    );

    res.json({
      token,
      user,
      message: "Вы вошли в систему!", /// / возвращаем на фронт токен юзера и сообщение
    });

    // throw Error(user)
  } catch (error) {
    console.log(error);
  }
});

router.get("/me", checkAuth, async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.userId } }); /// / ищем юзера в базе
    if (!user) {
      return res.json({
        message: "Такой пользователь не существует",
      });
    }
    const token = jwt.sign(
      {
        // создаем JWT токен для авторизации и шифруем его по id юзера
        id: user.id,
      },
      "efdfdsgfdff6gdfg77fdgdfg", /// /секретная фраза
      { expiresIn: "30d" } /// / срок действия токкена
    );
    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({
      message: "Нет доступа!",
    });
  }
});

router.post(
  "/userAvatar",
  checkAuth,
  upload.single("avatar"),
  async (req, res) => {
    try {
      const user = await Users.findOne({ where: { id: req.userId } });
      if (user && upload.single) {
        await Users.update(
          { image: req.file.path.replace("public", "") },
          { where: { id: req.userId } }
        );
        res.json({ user, message: "Фотография добавлена!" });
      }
      // res.json({ message: "Ошибка" });
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/delete", checkAuth, async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.userId } }); // ищем юзера в базе
    if (!user) {
      return res.json({
        message: "Такой пользователь не существует",
      });
    }
    if (user) {
      await Users.update({ image: null }, { where: { id: req.userId } });
      return res.json({ user, message: "Фотография добавлена!" });
    }
  } catch (error) {
    res.json({
      message: "Нет доступа!",
    });
  }
});
module.exports = router;
