let a = "OK";

let b = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Webap", "Programsko"]
}

// console.log(b)

function spoji_ime_prezime(student, spojka) {
    return student.ime + spojka + student.prezime;
}

let c = spoji_ime_prezime(b, "-")

console.log(c)

//2.nacin: bezimena funkcija spremljena u varijablu

let spoji2 = function (student, spojka) {
    return student.ime + spojka + student.prezime;
}

let c2 = spoji2(b, "?")
console.log(c2)

//3.nacin: arrow funkcija, lambda funkcija

let spoji3 = (student, spojka) => student.ime + student.prezime;
let c3 = spoji3(b, ";")
console.log(c3)

//4.nacin: fja kao dio objekta
let objekt_s_funkcijom = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Webap", "Programsko"],
    spoji: function (spojka) {
        return this.ime + spojka + this.prezime;
    }
}

let c4 = objekt_s_funkcijom.spoji(">")
console.log(c4)

//5.nacin
let objekt_s_funkcijom2 = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Webap", "Programsko"],
    spoji(spojka) {
        return this.ime + spojka + this.prezime;
    }
}

let c5 = objekt_s_funkcijom2.spoji(">>>>")
console.log(c5)

//6.nacin
/*
let objekt_s_funkcijom3 = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Webap", "Programsko"],
    spoji: (spojka) => this.ime + spojka + this.prezime
}

let c6 = objekt_s_funkcijom3.spoji("=")
console.log(c6)
*/ 

// ASINKRONE FJE

