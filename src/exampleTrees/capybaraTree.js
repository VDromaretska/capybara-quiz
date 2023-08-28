export default function createCapyTree() {
    return {
        kind: "first question",
        question: "Which mood do you have today?",
        chilledSubtree: {
            kind: "question",
            question: "Do you like water?",
            yesSubtree: {
                kind: "question",
                question: "Do you like fruits?",
                yesSubtree: {
                    kind: "answer",
                    img: "https://api.capy.lol/v1/capybara/115",
                },
                noSubtree: {
                    kind: "answer",
                    img: "https://api.capy.lol/v1/capybara/100",
                },
            },
            noSubtree: {
                kind: "question",
                question: "Do you like socializing?",
                yesSubtree: {
                    kind: "question",
                    question: "With other capy?",
                    yesSubtree: {
                        kind: "answer",
                        img: "https://api.capy.lol/v1/capybara/116",
                    },
                    noSubtree: {
                        kind: "answer",
                        img: "https://api.capy.lol/v1/capybara/108",
                    },
                },
                noSubtree: {
                    kind: "answer",
                    img: "https://api.capy.lol/v1/capybara/110",
                },
            },
        },
        hungrySubtree: {
            kind: "question",
            question: "Do you like fruits?",
            yesSubtree: {
                kind: "answer",
                img: "https://api.capy.lol/v1/capybara/132",
            },
            noSubtree: {
                kind: "answer",
                img: "https://api.capy.lol/v1/capybara/313",
            },
        },
        sleepySubtree: {
            kind: "question",
            question: "Do you like to sleep alone?",
            yesSubtree: {
                kind: "answer",
                img: "https://api.capy.lol/v1/capybara/205",
            },
            noSubtree: {
                kind: "answer",
                img: "https://api.capy.lol/v1/capybara/133",
            },
        },
        workingSubtree: {
            kind: "answer",
            img: "https://api.capy.lol/v1/capybara/201",
        },
        happySubtree: {
            kind: "question",
            question: "Do you like costumes?",
            yesSubtree: {
                kind: "answer",
                img: "https://api.capy.lol/v1/capybara/157",
            },
            noSubtree: {
                kind: "answer",
                img: "https://api.capy.lol/v1/capybara/131",
            },
        },
    };
}
