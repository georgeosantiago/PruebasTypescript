// Enums

// Enums numéricos

enum Direction {
    Up = 1, // 0 por defecto
    Down,
    Left,
    Right,
}

/*
enum E {
    A = getSomeValue(), // esto se permite
    B, // Error. si a no tiene un valor entonces B necesita estar inicializado
} */

// Enums de cadena

enum miDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// Enums heterogéneos

// permitido pero no aconsejable. Confuso
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// Miembros computados y constantes

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

// Mapeos inversos

enum Enum {
    A
}
let aaa = Enum.A;
let nameOfA = Enum[aaa]; // "A"

// Enums ambientales
declare enum anEnum {
    A = 1,
    B,
    C = 2
}