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

let randomize = greekAlphabet.sort(() => 0.5 - Math.random());
let currentChoices = randomize.slice(0, 4);
let currentLetter = currentChoices[Math.floor(Math.random() * currentChoices.length)]

export function Questions() {
    return (
        <>
            <div className="question-card">
                <h3>What is the uppercase Greek letter for {currentLetter.letter}?</h3>
                <div className="answers">
                    <div className="answer">{currentChoices[0].greekUpper}</div>
                    <div className="answer">{currentChoices[1].greekUpper}</div>
                    <div className="answer">{currentChoices[2].greekUpper}</div>
                    <div className="answer">{currentChoices[3].greekUpper}</div>
                </div>
            </div>
        </>
    )
}