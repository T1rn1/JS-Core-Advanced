function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Ошибка: переданное значение не является целым числом.");
    }
    return "Число является целым.";
}

try {
    console.log(checkInteger(5));
    console.log(checkInteger(5.5));
} catch (error) {
    console.log(error.message);
}