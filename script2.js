const questions = [
    {
        question: "What genre do you prefer?",
        options: ["Fantasy", "Mystery/Thriller", "Romance", "Science Fiction"],
        image: "ghost 2.png"
    },
    {
        question: "How long do you want the book to be?",
        options: ["Short (Less than 300 pages)", "Medium (300-500 pages)", "Long (More than 500 pages)", "No preference"],
        image: "hour glass.png"
    },
    {
        question: "Do you prefer fiction or non-fiction?",
        options: ["Fiction", "Non-Fiction", "Both", "No preference"],
        image: "one more.jpg"
    },
    {
        question: "Which setting do you prefer?",
        options: ["Historical", "Contemporary", "Fantasy world", "Futuristic"],
        image: "girl.jpg"
    },
    {
        question: "What is your preferred writing style?",
        options: ["Descriptive", "Straightforward", "Poetic", "Technical"],
        image: "bundle.jpg"
    },
    {
        question: "What is your main reason for reading?",
        options: ["Entertainment", "Knowledge", "Escape", "Inspiration"],
        image: "stay weird.jpg"
    },
    {
        question: "Do you prefer plot-driven or character-driven stories?",
        options: ["Plot-driven", "Character-driven", "Balanced", "No preference"],
        image: "one more.jpg"
    },
    {
        question: "Which of these themes interests you the most?",
        options: ["Love and Relationships", "Good vs. Evil", "Identity and Self-discovery", "Survival"],
        image: "stay weird.jpg"
    },
    {
        question: "How important is the ending of a book to you?",
        options: ["Very important", "Somewhat important", "Not very important", "I don't mind"],
        image: "stay weird.jpg"
    },
    {
        question: "Do you like books with a lot of twists and surprises?",
        options: ["Yes, I love them", "Sometimes", "Not really", "I prefer a predictable plot"],
        image: "stay weird.jpg"
    }
];

const bookRecommendations = {
    'Fantasy,Short (Less than 300 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Love and Relationships,Very important,Yes, I love them':
        'The Last Wish by Andrzej Sapkowski',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Poetic,Inspiration,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Dune by Frank Herbert',
    'Romance,Medium (300-500 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'The Notebook by Nicholas Sparks',
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Technical,Knowledge,Plot-driven,Survival,Not very important,I prefer a predictable plot':
        'The Da Vinci Code by Dan Brown',
    'Non-Fiction,Long (More than 500 pages),Historical,Non-Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'The Immortal Life of Henrietta Lacks by Rebecca Skloot',
    // Fantasy
    'Fantasy,Medium (300-500 pages),Fantasy world,Fiction,Straightforward,Entertainment,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Harry Potter and the Sorcerer\'s Stone by J.K. Rowling',
    // Science Fiction
    'Science Fiction,Short (Less than 300 pages),Futuristic,Fiction,Straightforward,Escape,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Hunger Games by Suzanne Collins',
    // Romance
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Pride and Prejudice by Jane Austen',
    // Mystery/Thriller
    'Mystery/Thriller,Long (More than 500 pages),Contemporary,Fiction,Technical,Escape,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Gone Girl by Gillian Flynn',
    // Non-Fiction
    'Non-Fiction,Long (More than 500 pages),Biographical,Non-Fiction,Descriptive,Knowledge,Character-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Becoming by Michelle Obama',
    // Fantasy
    'Fantasy,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'The Name of the Wind by Patrick Rothfuss',
    // Science Fiction
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Poetic,Escape,Character-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Ender\'s Game by Orson Scott Card',
    // Romance
    'Romance,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Plot-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Outlander by Diana Gabaldon',
    // Mystery/Thriller
    'Mystery/Thriller,Medium (300-500 pages),Contemporary,Fiction,Technical,Escape,Plot-driven,Good vs. Evil,Somewhat important,Sometimes':
        'The Girl with the Dragon Tattoo by Stieg Larsson',
    // Non-Fiction
    'Non-Fiction,Short (Less than 300 pages),Biographical,Non-Fiction,Straightforward,Knowledge,Plot-driven,Identity and Self-discovery,Somewhat important,I prefer a predictable plot':
        'Steve Jobs by Walter Isaacson',
    // Fantasy
    'Fantasy,Medium (300-500 pages),Historical,Fiction,Descriptive,Escape,Character-driven,Identity and Self-discovery,Very important,No, I prefer a predictable plot':
        'The Night Circus by Erin Morgenstern',
    // Science Fiction
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Descriptive,Escape,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'Hyperion by Dan Simmons',
    // Romance
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Straightforward,Entertainment,Plot-driven,Love and Relationships,Somewhat important,Sometimes':
        'Me Before You by Jojo Moyes',
    // Mystery/Thriller
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Balanced,Good vs. Evil,Very important,Yes, I love them':
        'The Count of Monte Cristo by Alexandre Dumas',
    // Non-Fiction
    'Non-Fiction,Medium (300-500 pages),Biographical,Non-Fiction,Straightforward,Knowledge,Character-driven,Identity and Self-discovery,Very important,Yes, I love them':
        'The Diary of a Young Girl by Anne Frank',
    // Fantasy
    'Fantasy,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Entertainment,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Way of Kings by Brandon Sanderson',
    // Science Fiction
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Straightforward,Knowledge,Balanced,Identity and Self-discovery,Somewhat important,Sometimes':
        'The Martian by Andy Weir',
    // Romance
    'Romance,Long (More than 500 pages),Contemporary,Fiction,Descriptive,Escape,Character-driven,Love and Relationships,Very important,Yes, I love them':
        'The Bronze Horseman by Paullina Simons',
    // Mystery/Thriller
    'Mystery/Thriller,Short (Less than 300 pages),Contemporary,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'The Silent Patient by Alex Michaelides',
    // Non-Fiction
    'Non-Fiction,Long (More than 500 pages),Biographical,Non-Fiction,Descriptive,Knowledge,Character-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Alexander Hamilton by Ron Chernow',
        'Fantasy,Short (Less than 300 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Love and Relationships,Very important,Yes, I love them':
        'The Last Wish by Andrzej Sapkowski',
    'Fantasy,Medium (300-500 pages),Fantasy world,Fiction,Straightforward,Entertainment,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Harry Potter and the Sorcerer\'s Stone by J.K. Rowling',
    'Fantasy,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'The Name of the Wind by Patrick Rothfuss',
    'Fantasy,Medium (300-500 pages),Historical,Fiction,Descriptive,Escape,Character-driven,Identity and Self-discovery,Very important,No, I prefer a predictable plot':
        'The Night Circus by Erin Morgenstern',
    'Fantasy,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Entertainment,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Way of Kings by Brandon Sanderson',
    // Science Fiction
    'Science Fiction,Short (Less than 300 pages),Futuristic,Fiction,Straightforward,Escape,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Hunger Games by Suzanne Collins',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Poetic,Inspiration,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Dune by Frank Herbert',
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Poetic,Escape,Character-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Ender\'s Game by Orson Scott Card',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Descriptive,Escape,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'Hyperion by Dan Simmons',
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Straightforward,Knowledge,Balanced,Identity and Self-discovery,Somewhat important,Sometimes':
        'The Martian by Andy Weir',
    // Romance
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Pride and Prejudice by Jane Austen',
    'Romance,Medium (300-500 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'The Notebook by Nicholas Sparks',
    'Romance,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Plot-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Outlander by Diana Gabaldon',
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Straightforward,Entertainment,Plot-driven,Love and Relationships,Somewhat important,Sometimes':
        'Me Before You by Jojo Moyes',
    'Romance,Long (More than 500 pages),Contemporary,Fiction,Descriptive,Escape,Character-driven,Love and Relationships,Very important,Yes, I love them':
        'The Bronze Horseman by Paullina Simons',
    // Mystery/Thriller
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Balanced,Good vs. Evil,Very important,Yes, I love them':
        'The Count of Monte Cristo by Alexandre Dumas',
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Gone Girl by Gillian Flynn',
    'Mystery/Thriller,Medium (300-500 pages),Contemporary,Fiction,Technical,Escape,Plot-driven,Good vs. Evil,Somewhat important,Sometimes':
        'The Girl with the Dragon Tattoo by Stieg Larsson',
    'Mystery/Thriller,Short (Less than 300 pages),Contemporary,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'The Silent Patient by Alex Michaelides',
    'Mystery/Thriller,Medium (300-500 pages),Contemporary,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Before I Go to Sleep by S.J. Watson',
    // Non-Fiction
    'Non-Fiction,Long (More than 500 pages),Biographical,Non-Fiction,Descriptive,Knowledge,Character-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Becoming by Michelle Obama',
    'Fantasy,Short (Less than 300 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Love and Relationships,Very important,Yes, I love them':
        'The Last Wish by Andrzej Sapkowski',
    'Fantasy,Medium (300-500 pages),Fantasy world,Fiction,Straightforward,Entertainment,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Harry Potter and the Sorcerer\'s Stone by J.K. Rowling',
    'Fantasy,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'The Name of the Wind by Patrick Rothfuss',
    'Fantasy,Medium (300-500 pages),Historical,Fiction,Descriptive,Escape,Character-driven,Identity and Self-discovery,Very important,No, I prefer a predictable plot':
        'The Night Circus by Erin Morgenstern',
    'Fantasy,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Entertainment,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Way of Kings by Brandon Sanderson',
    'Fantasy,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Balanced,Good vs. Evil,Very important,Yes, I love them':
        'Jonathan Strange & Mr Norrell by Susanna Clarke',
    'Fantasy,Medium (300-500 pages),Fantasy world,Fiction,Descriptive,Escape,Character-driven,Good vs. Evil,Very important,Sometimes':
        'Mistborn: The Final Empire by Brandon Sanderson',
    'Fantasy,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'The Pillars of the Earth by Ken Follett',
    // Science Fiction
    'Science Fiction,Short (Less than 300 pages),Futuristic,Fiction,Straightforward,Escape,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Hunger Games by Suzanne Collins',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Poetic,Inspiration,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Dune by Frank Herbert',
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Poetic,Escape,Character-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Ender\'s Game by Orson Scott Card',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Descriptive,Escape,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'Hyperion by Dan Simmons',
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Straightforward,Knowledge,Balanced,Identity and Self-discovery,Somewhat important,Sometimes':
        'The Martian by Andy Weir',
    'Science Fiction,Short (Less than 300 pages),Futuristic,Fiction,Straightforward,Entertainment,Balanced,Identity and Self-discovery,Somewhat important,No, I prefer a predictable plot':
        'Ready Player One by Ernest Cline',
    'Science Fiction,Medium (300-500 pages),Futuristic,Fiction,Descriptive,Escape,Character-driven,Identity and Self-discovery,Somewhat important,Yes, I love them':
        'Altered Carbon by Richard K. Morgan',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Descriptive,Escape,Plot-driven,Good vs. Evil,Very important,No, I prefer a predictable plot':
        'Neuromancer by William Gibson',
    // Romance
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Pride and Prejudice by Jane Austen',
    'Romance,Medium (300-500 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'The Notebook by Nicholas Sparks',
    'Romance,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Plot-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Outlander by Diana Gabaldon',
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Straightforward,Entertainment,Plot-driven,Love and Relationships,Somewhat important,Sometimes':
        'Me Before You by Jojo Moyes',
    'Romance,Long (More than 500 pages),Contemporary,Fiction,Descriptive,Escape,Character-driven,Love and Relationships,Very important,Yes, I love them':
        'The Bronze Horseman by Paullina Simons',
    'Romance,Medium (300-500 pages),Contemporary,Fiction,Straightforward,Entertainment,Balanced,Identity and Self-discovery,Very important,Yes, I love them':
        'Eleanor Oliphant Is Completely Fine by Gail Honeyman',
    'Romance,Short (Less than 300 pages),Historical,Fiction,Descriptive,Entertainment,Balanced,Identity and Self-discovery,Somewhat important,No, I prefer a predictable plot':
        'The Guernsey Literary and Potato Peel Pie Society by Mary Ann Shaffer and Annie Barrows',
    'Romance,Long (More than 500 pages),Fantasy world,Fiction,Descriptive,Escape,Character-driven,Love and Relationships,Very important,Yes, I love them':
        'A Court of Thorns and Roses by Sarah J. Maas',
    // Mystery/Thriller
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Balanced,Good vs. Evil,Very important,Yes, I love them':
        'The Count of Monte Cristo by Alexandre Dumas',
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Gone Girl by Gillian Flynn',
    'Mystery/Thriller,Medium (300-500 pages),Contemporary,Fiction,Technical,Escape,Plot-driven,Good vs. Evil,Somewhat important,Sometimes':
        'The Girl with the Dragon Tattoo by Stieg Larsson',
    'Mystery/Thriller,Short (Less than 300 pages),Contemporary,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'The Silent Patient by Alex Michaelides',
    'Mystery/Thriller,Medium (300-500 pages),Contemporary,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Before I Go to Sleep by S.J. Watson',
    'Mystery/Thriller,Short (Less than 300 pages),Contemporary,Fiction,Straightforward,Knowledge,Balanced,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Big Little Lies by Liane Moriarty',
    'Mystery/Thriller,Long (More than 500 pages),Contemporary,Fiction,Descriptive,Escape,Plot-driven,Identity and Self-discovery,Very important,Yes, I love them':
        'The Secret History by Donna Tartt',
    'Fantasy,Short (Less than 300 pages),Fantasy world,Fiction,Descriptive,Entertainment,Balanced,Love and Relationships,Very important,Yes, I love them':
        'The Last Wish by Andrzej Sapkowski',
    'Fantasy,Medium (300-500 pages),Fantasy world,Fiction,Straightforward,Entertainment,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Harry Potter and the Sorcerer\'s Stone by J.K. Rowling',
    // Add other fantasy book recommendations here...
    // Science Fiction
    'Science Fiction,Short (Less than 300 pages),Futuristic,Fiction,Straightforward,Escape,Plot-driven,Good vs. Evil,Very important,Yes, I love them':
        'The Hunger Games by Suzanne Collins',
    'Science Fiction,Long (More than 500 pages),Futuristic,Fiction,Poetic,Inspiration,Character-driven,Good vs. Evil,Somewhat important,Sometimes':
        'Dune by Frank Herbert',
    // Add other science fiction book recommendations here...
    // Romance
    'Romance,Short (Less than 300 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'Pride and Prejudice by Jane Austen',
    'Romance,Medium (300-500 pages),Contemporary,Fiction,Descriptive,Entertainment,Character-driven,Love and Relationships,Very important,No, I prefer a predictable plot':
        'The Notebook by Nicholas Sparks',
    // Add other romance book recommendations here...
    // Mystery/Thriller
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Descriptive,Escape,Balanced,Good vs. Evil,Very important,Yes, I love them':
        'The Count of Monte Cristo by Alexandre Dumas',
    'Mystery/Thriller,Long (More than 500 pages),Historical,Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Not very important,I prefer a predictable plot':
        'Gone Girl by Gillian Flynn',
    // Add other mystery/thriller book recommendations here...
    // Non-Fiction (Example)
    'Non-Fiction,Long (More than 500 pages),Historical,Non-Fiction,Technical,Knowledge,Plot-driven,Identity and Self-discovery,Somewhat important,Sometimes':
        'Sapiens: A Brief History of Humankind by Yuval Noah Harari',
    // Add other non-fiction book recommendations here...
    // Complete the list with all combinations and corresponding book recommendations...
};

let currentQuestion = 0;
let userChoices = [];

const questionContainer = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
    questionImage.src = questions[currentQuestion].image;

    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function selectOption(index) {
    console.log("selectOption function called with index:", index);
    userChoices[currentQuestion] = index;
    console.log(userChoices); 
    nextQuestion();
}

function showResult() {
    let maxMatches = 0;
    let recommendedBook = '';

    for (let key in bookRecommendations) {
        let matches = key.split(",").reduce((acc, val, index) => {
            if (userChoices[index] !== undefined && val.trim() === questions[index].options[userChoices[index]].trim()) {
                return acc + 1;
            }
            return acc;
        }, 0);

        if (matches > maxMatches) {
            maxMatches = matches;
            recommendedBook = bookRecommendations[key];
        }
    }

    if (recommendedBook === '') {
        recommendedBook = 'No match found. Try exploring other genres!';
    }

    resultContainer.textContent = `We recommend you read: ${recommendedBook}`;
}


function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

showQuestion();