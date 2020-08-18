import React from 'react'

let greekAlphabet = [
    {
        letter: "Alpha",
        greekUpper: "Α", 
        greekLower: "α",
        englishUpper: "A",
        englishLower: "a"
    },
    {
        letter: "Beta",
        greekUpper: "Β", 
        greekLower: "β",
        englishUpper: "B",
        englishLower: "b"
    },
    {
        letter: "Gamma",
        greekUpper: "Γ", 
        greekLower: "γ",
        englishUpper: "G",
        englishLower: "g"
    },
    {
        letter: "Delta",
        greekUpper: "Δ", 
        greekLower: "δ",
        englishUpper: "D",
        englishLower: "d"
    },
    {
        letter: "Epsilon",
        greekUpper: "Ε", 
        greekLower: "ε",
        englishUpper: "E",
        englishLower: "e"
    },
    {
        letter: "Zeta",
        greekUpper: "Z", 
        greekLower: "ζ",
        englishUpper: "Z",
        englishLower: "z"
    },
    {
        letter: "Eta",
        greekUpper: "Η", 
        greekLower: "η",
        englishUpper: "E",
        englishLower: "e"
    },
    {
        letter: "Theta",
        greekUpper: "Θ", 
        greekLower: "θ",
        englishUpper: "Th",
        englishLower: "th"
    },
    {
        letter: "Iota",
        greekUpper: "Ι", 
        greekLower: "ι",
        englishUpper: "I",
        englishLower: "i"
    },
    {
        letter: "Kappa",
        greekUpper: "K", 
        greekLower: "κ",
        englishUpper: "K",
        englishLower: "k"
    },
    {
        letter: "Lambda",
        greekUpper: "Λ", 
        greekLower: "λ",
        englishUpper: "L",
        englishLower: "l"
    },
    {
        letter: "Mu",
        greekUpper: "M", 
        greekLower: "μ",
        englishUpper: "M",
        englishLower: "m"
    },
    {
        letter: "Nu",
        greekUpper: "N", 
        greekLower: "ν",
        englishUpper: "N",
        englishLower: "n"
    },
    {
        letter: "Xi",
        greekUpper: "Ξ", 
        greekLower: "ξ",
        englishUpper: "X",
        englishLower: "x"
    },
    {
        letter: "Omicron",
        greekUpper: "Ο", 
        greekLower: "ο",
        englishUpper: "O",
        englishLower: "o",

    },
    {
        letter: "Pi",
        greekUpper: "Π", 
        greekLower: "π",
        englishUpper: "P",
        englishLower: "p"
    },
    {
        letter: "Rho",
        greekUpper: "Ρ", 
        greekLower: "ρ",
        englishUpper: "R",
        englishLower: "r"
    },
    {
        letter: "Sigma",
        greekUpper: "Σ", 
        greekLower: "ς",
        greekLowerAlt: "σ",
        englishUpper: "S",
        englishLower: "s"
    },
    {
        letter: "Tau",
        greekUpper: "Τ", 
        greekLower: "τ",
        englishUpper: "T",
        englishLower: "t"
    },
    {
        letter: "Upsilon",
        greekUpper: "Υ", 
        greekLower: "υ",
        englishUpper: "U",
        englishLower: "u"
    },
    {
        letter: "Phi",
        greekUpper: "Φ", 
        greekLower: "φ",
        englishUpper: "Ph",
        englishLower: "ph"
    },
    {
        letter: "Chi",
        greekUpper: "Χ", 
        greekLower: "χ",
        englishUpper: "Ch",
        englishLower: "ch"
    },
    {
        letter: "Psi",
        greekUpper: "Ψ", 
        greekLower: "ψ",
        englishUpper: "Ps",
        englishLower: "ps"
    },
    {
        letter: "Omega",
        greekUpper: "Ω", 
        greekLower: "ω",
        englishUpper: "M",
        englishLower: "m"
    }
] 

let letterTypes = Object.keys(greekAlphabet[0])
let questionLetterType = letterTypes[Math.floor(Math.random() * letterTypes.length)]
let questionCase = ""
let questionLang = ""

if (questionLetterType == "letter") {
    questionCase = "Greek"
    questionLang = "Greek"
} else if (questionLetterType == "greekUpper") {
    questionCase = "uppercase"
    questionLang = "Greek"
} else if (questionLetterType == "greekLower") {
    questionCase = "lowercase"
    questionLang = "Greek"
} else if (questionLetterType == "englishUpper") {
    questionCase = "uppercase"
    questionLang = "English"
} else if (questionLetterType == "englishLower") {
    questionCase = "lowercase"
    questionLang = "English"
}

let answerLetterType = letterTypes[Math.floor(Math.random() * letterTypes.length)]
let answerCase = ""
let answerLang = ""

if (answerLetterType == "letter") {
    answerCase = "Greek"
    answerLang = "letter"
} else if (answerLetterType == "greekUpper") {
    answerCase = "uppercase"
    answerLang = "Greek"
} else if (answerLetterType == "greekLower") {
    answerCase = "lowercase"
    answerLang = "Greek"
} else if (answerLetterType == "englishUpper") {
    answerCase = "uppercase"
    answerLang = "English"
} else if (answerLetterType == "englishLower") {
    answerCase = "lowercase"
    answerLang = "english"
}

let randomize = greekAlphabet.sort(() => 0.5 - Math.random());
let currentChoices = randomize.slice(0, 4);
let currentLetter = currentChoices[Math.floor(Math.random() * currentChoices.length)]

let userAnswer = ""
// let selectAnswer = (e) => {
//     userAnswer = e
// }
let checkAnswer = (e) => {
    if(e.target.innerText == currentLetter[answerLetterType]) {
        console.log("Hell Yes, you got it")
    } else {
        console.log("Shit, you still stupid")
    }
}

export function Questions() {
    return (
        <>
        <div className="question-card">
            <h3>What is the {answerCase} {answerLang} letter for the {questionLang} "{currentLetter[questionLetterType]}"?</h3>
            <div className="answers">
                <div className="answer" onClick={checkAnswer}>{currentChoices[0][answerLetterType]}</div>
                <div className="answer" onClick={checkAnswer}>{currentChoices[1][answerLetterType]}</div>
                <div className="answer" onClick={checkAnswer}>{currentChoices[2][answerLetterType]}</div>
                <div className="answer" onClick={checkAnswer}>{currentChoices[3][answerLetterType]}</div>
            </div>
            <div className="check-answer">Check Answer</div>
            <div className="next">Next -></div>
        </div>
        </>
    )
}