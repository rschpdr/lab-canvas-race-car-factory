// Em um projeto em que você está trabalhando, existem as seguintes classes:

class Animal {
    poop() {

    }
}

class Dog extends Animal {
    bark() {

    }
}

class Cat extends Animal {
    meow() {

    }
}

class Robot {
    drive() {

    }
}

class CleaningRobot extends Robot {
    clean() {

    }
}

class MurderRobot extends Robot {
    kill() {

    }
}

// Porém, seu gerente de projetos solicitou que fosse incluída a funcionalidade MurderRobotDog, 
// que possui as funcionalidades bark() e kill(), mas não as funcionalidades poop() e drive(). 
// Como vimos, não há uma solução limpa para este problema se continuarmos utilizando classes.

// Seu desafio é:

// - Transforme a estrutura atual utilizando classes para uma nova estrutura utilizando factory functions. Suas factory functions devem 
// conter as mesmas funcionalidades que as classes.
// - Crie uma nova factory function MurderRobotDog, que possua apenas os métodos bark() e kill() das factory functions existentes (mas não possua poop() e drive())
// - Prove que sua solução funciona: ao executar os métodos de suas factory functions, um console.log() demonstrando a ação deve ser executado.

// Exemplo:

dog.bark() // o console deve exibir "Woof!"

// DICA: Utilize as propriedades de composabilidade inerentes das factory functions
