export class PasswordService {
  static getRandomCharacter(min, max) {
    return String.fromCharCode(
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  static getRandomLowerCase() {
    return this.getRandomCharacter(97, 122); // Código ASCII para minúsculas
  }

  static getRandomUpperCase() {
    return this.getRandomCharacter(65, 90); // Código ASCII para mayúsculas
  }

  static getRandomNumbers() {
    return this.getRandomCharacter(48, 57); // Código ASCII para números
  }

  static getRandomSymbols() {
    const symbolStr = "!@#$%^&*(){}[]/";
    return symbolStr[Math.floor(Math.random() * symbolStr.length)];
  }

  static getPasswordObj(state) {
    const passwordObj = {};

    for (const key of Object.keys(state)) {
      if (typeof state[key] === "boolean" && state[key]) {
        passwordObj[key] = state[key];
      }
    }

    return passwordObj;
  }

  static generatePassword(passwordObj, passwordLength) {
    let thePassword = "";
    const keys = Object.keys(passwordObj);
    const selectedKeys = keys.filter((key) => passwordObj[key]);

    if (selectedKeys.length === 0) {
      return thePassword; // Si no hay opciones seleccionadas, devuelve una contraseña vacía
    }

    for (let i = 0; i < passwordLength; i++) {
      const randomKey = selectedKeys[i % selectedKeys.length];

      if (randomKey === "lower") thePassword += this.getRandomLowerCase();
      if (randomKey === "upper") thePassword += this.getRandomUpperCase();
      if (randomKey === "symbols") thePassword += this.getRandomSymbols();
      if (randomKey === "numbers") thePassword += this.getRandomNumbers();
    }

    return thePassword;
  }
}
