// 1.1 Стрелочные функции

const multiplyArrow = (a, b) => {
    return a * b;
};
console.log(multiplyArrow(2, 3));

const isEven = (number) => {
    return number % 2 ===0;
}
console.log(isEven(5));
console.log(isEven(4));


// 1.2 Функции

function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;
    for (const letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("JavaScript"));
console.log(countVowels("Frontend"));
console.log(countVowels("Backend"));


function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("Frontend"));


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; ++i) {
       result *= i;
    }
    return result;
}
console.log(factorial(4));


function sumTo(n) {
    let result1 = 0;
    for (let i = 1; i <= n; ++i) {
        result1 += i;
    }
    return result1;
}
console.log(sumTo(8));


function createProduct(name, price) {
    return {
        name: "тогуз-коргоол",
        price: 4000,
        currency: "Сом"
    }
}
console.log(createProduct("тогуз-коргоол ", 4000));


// Задание 2. Методы перебора массивов

const products = [
    { name: "Ноутбук",   price: 45000, inStock: true  },
    { name: "Мышь",      price: 800,   inStock: false },
    { name: "Клавиатура", price: 2500, inStock: true  },
    { name: "Монитор",   price: 15000, inStock: true  },
    { name: "Наушники",  price: 3200,  inStock: false }
];

const namesOfProducts = products.map((product) => {
    return product.name
});
console.log(namesOfProducts);


const inStock = products.filter((product) => {
    return product.inStock;
});
console.log(inStock);


const expensivePrice = products.find((product) => {
    return product.price > 10000
});
console.log(expensivePrice);


const total = products.reduce((total, cost) => {
    return total + cost.price;
}, 0);
console.log(total);


const cheap = products.some((product) => {
    return product.price < 1000
});
const withOutInStock = products.map((product) => {
    return {
        name: product.name,
        price: product.price,
    }
});
console.log(cheap);
console.log(withOutInStock);


const every = products.every((product) => {
    return product.price > 500
});
console.log(every);


const index = products.findIndex((product) => {
    return product.name === "Монитор"
});
console.log(index);


const sortedProducts = products.sort((a, b) => {
    return a.price - b.price
});
console.log(sortedProducts);


const inStock2 = products.filter((product) => {
    return product.inStock
});
console.log(inStock2.length);


const line = products.map((product) => {
    return `${product.name} - ${product.price}`
});
console.log(line);


const expensiveItem = products.reduce((a, b ) => {
    if (b.price > a.price) {
        return a.price
    }
    return b.price;
})
console.log(expensiveItem);


const totalInStockPrice = products.filter((product) => {
    return product.inStock
})
.reduce((sum, price) => {
    return sum + price.price;
}, 0);
console.log(totalInStockPrice);


const have = products.some((product) => {
    return product.name === "Клавиатура"
})
console.log(have);


const students = [
    { name: "Айгуль", grade: 85, active: true },
    { name: "Бека", grade: 42, active: false },
    { name: "Дана", grade: 91, active: true },
    { name: "Эрлан", grade: 67, active: true },
    { name: "Мария", grade: 38, active: false }
];

const studentsNames = students.map((student) => {
    return student.name
});
console.log(studentsNames);


const highScore = students.filter((student) => {
    return student.grade > 60
});
console.log(highScore);


const lowScore = students.find((student) => {
    return student.grade < 50
});
console.log(lowScore);


const allScores = students.reduce((sum, student) => {
    return sum + student.grade
}, 0);
const average = allScores / students.length;
console.log(average);


const noActive = students.some((student) => {
    return student.active;
})
console.log(noActive);


const every2 = students.every((student) => {
    return student.grade > 30
});
console.log(every2);


const aigul = students.map((student) => {
    return `${student.name} - ${student.grade}`
});
console.log(aigul);


const activeStudents = students.filter((student) => {
    return student.active;
});
console.log(activeStudents);


const smartStudent = students.reduce((student, smarter) => {
    if (smarter.grade > student.grade) {
        return smarter;
    }
    return student;
})
console.log(smartStudent);


const activeStudents2 = students.filter((student) => {
    return student.active;
})
.map(student => {
    return student.name
});
console.log(activeStudents2);



// 3.1 Деструктуризация

const user = {
    id: 1,
    username: "coder_01",
    address: { city: "Бишкек", street: "Чуй 120" }
};

const {username, address: {city}} = user;
console.log(username, city);
const { country = "Кыргызстан"} = user;
console.log(country);
