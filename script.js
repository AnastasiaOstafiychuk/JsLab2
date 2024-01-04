// Ініціалізація Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD2jSYcqnCrOmScdoseOzpved01WfWttNk",
    authDomain: "myproject-11bc9.firebaseapp.com",
    projectId: "myproject-11bc9",
    storageBucket: "myproject-11bc9.appspot.com",
    messagingSenderId: "816912902874",
    appId: "1:816912902874:web:ba44cc35fbd01f3da093e3",
    measurementId: "G-6Y06K6D1TL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Обробник події для форми реєстрації
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Отримайте дані з форми
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Збереження користувача в базі даних Firebase
    set(ref(database, 'users/' + username), {
        email: email,
        password: password
    }).then(() => {
        // Додайте код, який виконується після успішного збереження
        alert('Реєстрація успішна!');
    }).catch((error) => {
        // Додайте код, який виконується у випадку помилки
        console.error('Помилка при збереженні даних користувача: ', error);
    });

    // Отримання та виведення даних про користувачів після збереження
    const userRef = ref(database, 'users/');
    get(userRef).then((snapshot) => {
        console.log('Дані користувачів:', snapshot.val());
    }).catch((error) => {
        console.error('Помилка при отриманні даних:', error);
    });
});
