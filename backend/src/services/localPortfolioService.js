const portfolio = require("../data/portfolio.json");

const normalizeText = (message) => {
    return message
        .toLowerCase()
        .trim()
        .replace(/[?!.,;:()[\]{}]/g, " ")
        .replace(/\s+/g, " ");
};

const INTENTS = [


    {
        name: "greeting",
        priority: 10,
        patterns: [
            { regex: /^(hi|hello|hey|selam)$/, weight: 6 },
            { regex: /\bhow are you\b/, weight: 5 },
            { regex: /\bgood morning\b/, weight: 6 },
            { regex: /\bgood afternoon\b/, weight: 6 },
            { regex: /\bgood evening\b/, weight: 6 },
        ],
    },

    {
        name: "thanks",
        priority: 10,
        patterns: [
            { regex: /\bthanks\b/, weight: 6 },
            { regex: /\bthank you\b/, weight: 6 },
            { regex: /\bthank u\b/, weight: 6 },
            { regex: /\bthx\b/, weight: 5 },
            { regex: /\bappreciate it\b/, weight: 5 },
        ],
    },


    {
        name: "goodbye",
        priority: 10,
        patterns: [
            { regex: /\bgoodbye\b/, weight: 6 },
            { regex: /\bbye\b/, weight: 6 },
            { regex: /\bsee you\b/, weight: 6 },
            { regex: /\bsee you later\b/, weight: 6 },
        ],
    },


    {
        name: "identity",
        priority: 9,
        patterns: [
            { regex: /\bwho is amanuel\b/, weight: 8 },
            { regex: /\bwho is he\b/, weight: 5 },
            { regex: /\bwhat is his name\b/, weight: 7 },
            { regex: /\bwhats his name\b/, weight: 7 },
            { regex: /\bwho is this portfolio about\b/, weight: 7 },
            { regex: /\bwho am i looking at\b/, weight: 6 },
        ],
    },

    {
        name: "title",
        priority: 8,
        patterns: [
            { regex: /\bwhat does amanuel do\b/, weight: 8 },
            { regex: /\bwhat does he do\b/, weight: 7 },
            { regex: /\bwhat kind of developer\b/, weight: 8 },
            { regex: /\bwhat type of developer\b/, weight: 8 },
            { regex: /\bdeveloper type\b/, weight: 6 },
            { regex: /\bprofessional title\b/, weight: 6 },
            { regex: /\bjob title\b/, weight: 6 },
            { regex: /\bwhat is his role\b/, weight: 7 },
        ],
    },

    {
        name: "location",
        priority: 8,
        patterns: [
            { regex: /\bwhere is amanuel\b/, weight: 6 },
            { regex: /\bwhere does amanuel live\b/, weight: 7 },
            { regex: /\bwhere is he located\b/, weight: 7 },
            { regex: /\bwhere does he live\b/, weight: 7 },
            { regex: /\bwhere is he based\b/, weight: 7 },
            { regex: /\blocation\b/, weight: 4 },
        ],
    },


    {
        name: "bio",
        priority: 7,
        patterns: [
            { regex: /\btell me about amanuel\b/, weight: 8 },
            { regex: /\babout amanuel\b/, weight: 6 },
            { regex: /\bamanuel background\b/, weight: 7 },
            { regex: /\bhis background\b/, weight: 6 },
            { regex: /\bprofessional background\b/, weight: 7 },
            { regex: /\bintroduce amanuel\b/, weight: 7 },
            { regex: /\bbrief introduction\b/, weight: 6 },
        ],
    },


    {
        name: "contact",
        priority: 8,
        patterns: [
            { regex: /\bhow can i contact\b/, weight: 8 },
            { regex: /\bhow can i reach\b/, weight: 8 },
            { regex: /\bget in touch\b/, weight: 8 },
            { regex: /\bcontact information\b/, weight: 7 },
            { regex: /\bcontact details\b/, weight: 7 },
            { regex: /\bhow to contact\b/, weight: 7 },
            { regex: /\bcontact amanuel\b/, weight: 7 },
            { regex: /\breach amanuel\b/, weight: 7 },
            { regex: /\bemail\b/, weight: 3 },
            { regex: /\bphone\b/, weight: 3 },
            { regex: /\blinkedin\b/, weight: 3 },
            { regex: /\bgithub\b/, weight: 3 },
        ],
    },


    {
        name: "portfolio",
        priority: 8,
        patterns: [
            { regex: /\bportfolio website\b/, weight: 8 },
            { regex: /\bportfolio link\b/, weight: 8 },
            { regex: /\bportfolio url\b/, weight: 8 },
            { regex: /\bpersonal website\b/, weight: 8 },
            { regex: /\bshow me his portfolio\b/, weight: 8 },
        ],
    },


    {
        name: "education",
        priority: 8,
        patterns: [
            { regex: /\bwhere does amanuel study\b/, weight: 8 },
            { regex: /\bwhere did amanuel study\b/, weight: 8 },
            { regex: /\bwhere does he study\b/, weight: 8 },
            { regex: /\bwhere did he study\b/, weight: 8 },
            { regex: /\buniversity\b/, weight: 5 },
            { regex: /\beducation\b/, weight: 5 },
            { regex: /\bacademic background\b/, weight: 6 },
            { regex: /\bwhat does he study\b/, weight: 7 },
            { regex: /\bwhat is he studying\b/, weight: 7 },
            { regex: /\bdegree\b/, weight: 5 },
        ],
    },

    {
        name: "programs",
        priority: 8,
        patterns: [
            { regex: /\bprograms\b/, weight: 5 },
            { regex: /\btraining\b/, weight: 5 },
            { regex: /\bcourses\b/, weight: 4 },
            { regex: /\bbootcamp\b/, weight: 4 },
            { regex: /\balx\b/, weight: 6 },
            { regex: /\bethiocoder\b/, weight: 6 },
        ],
    },


    {
        name: "frontendSkills",
        priority: 9,
        patterns: [
            { regex: /\bfrontend skills\b/, weight: 8 },
            { regex: /\bfrontend technologies\b/, weight: 8 },
            { regex: /\bfrontend tech\b/, weight: 7 },
            { regex: /\bfrontend stack\b/, weight: 7 },
            { regex: /\bfrontend tools\b/, weight: 7 },
            { regex: /\bwhat frontend technologies\b/, weight: 8 },
            { regex: /\bfront end skills\b/, weight: 8 },
            { regex: /\breact skills\b/, weight: 7 },
            { regex: /\breact experience\b/, weight: 7 },
        ],
    },


    {
        name: "backendSkills",
        priority: 9,
        patterns: [
            { regex: /\bbackend skills\b/, weight: 8 },
            { regex: /\bbackend technologies\b/, weight: 8 },
            { regex: /\bbackend tech\b/, weight: 7 },
            { regex: /\bbackend stack\b/, weight: 7 },
            { regex: /\bbackend tools\b/, weight: 7 },
            { regex: /\bback end skills\b/, weight: 8 },
            { regex: /\bnode\.?js experience\b/, weight: 7 },
            { regex: /\bexpress\.?js experience\b/, weight: 7 },
            { regex: /\bapi development\b/, weight: 7 },
            { regex: /\brest api\b/, weight: 7 },
        ],
    },

    {
        name: "authentication",
        priority: 10,
        patterns: [
            { regex: /\bauthentication\b/, weight: 7 },
            { regex: /\bauthorization\b/, weight: 7 },
            { regex: /\blogin system\b/, weight: 8 },
            { regex: /\blogin systems\b/, weight: 8 },
            { regex: /\bsign up\b/, weight: 7 },
            { regex: /\bsignup\b/, weight: 7 },
            { regex: /\bregistration\b/, weight: 6 },
            { regex: /\bjwt authentication\b/, weight: 8 },
            { regex: /\bgoogle oauth\b/, weight: 10 },
            { regex: /\bgoogle login\b/, weight: 9 },
            { regex: /\boauth\b/, weight: 8 },
        ],
    },


    {
        name: "testing",
        priority: 10,
        patterns: [
            { regex: /\btesting experience\b/, weight: 12 },
            { regex: /\bexperience with testing\b/, weight: 12 },
            { regex: /\btesting background\b/, weight: 10 },
            { regex: /\btesting skills\b/, weight: 8 },
            { regex: /\btesting technologies\b/, weight: 8 },
            { regex: /\btesting tools\b/, weight: 8 },
            { regex: /\btesting stack\b/, weight: 8 },
            { regex: /\btesting framework\b/, weight: 8 },
            { regex: /\btesting frameworks\b/, weight: 8 },
            { regex: /\bunit testing\b/, weight: 8 },
            { regex: /\bintegration testing\b/, weight: 8 },
            { regex: /\bautomated testing\b/, weight: 8 },
            { regex: /\bhow does he test\b/, weight: 8 },
            { regex: /\bvitest\b/, weight: 7 },
            { regex: /\breact testing library\b/, weight: 7 },
            { regex: /\bsupertest\b/, weight: 7 },
            { regex: /\btesting\b/, weight: 6 },
            { regex: /\btests\b/, weight: 5 },
            { regex: /\btest suite\b/, weight: 7 },
            { regex: /\btest suites\b/, weight: 7 },
        ],
    },

    {
        name: "pwa",
        priority: 9,
        patterns: [
            { regex: /\bpwa\b/, weight: 7 },
            { regex: /\bprogressive web app\b/, weight: 7 },
            { regex: /\bprogressive web apps\b/, weight: 7 },
            { regex: /\boffline support\b/, weight: 6 },
            { regex: /\boffline caching\b/, weight: 6 },
            { regex: /\bservice workers\b/, weight: 6 },
            { regex: /\blow connectivity\b/, weight: 6 },
            { regex: /\boffline experience\b/, weight: 6 },
        ],
    },


    {
        name: "emailIntegration",
        priority: 10,
        patterns: [
            { regex: /\bemail integration\b/, weight: 8 },
            { regex: /\bemail service\b/, weight: 7 },
            { regex: /\bemail services\b/, weight: 7 },
            { regex: /\btransactional email\b/, weight: 9 },
            { regex: /\bautomated emails\b/, weight: 8 },
            { regex: /\bemail notifications\b/, weight: 8 },
            { regex: /\bsend emails\b/, weight: 7 },
            { regex: /\bsends emails\b/, weight: 7 },
            { regex: /\bgmail integration\b/, weight: 10 },
            { regex: /\bnodemailer\b/, weight: 10 },
            { regex: /\bwelcome email\b/, weight: 9 },
            { regex: /\baccount email\b/, weight: 7 },
        ],
    },

    {
        name: "aiDevelopment",
        priority: 10,
        patterns: [
            { regex: /\bai experience\b/, weight: 9 },
            { regex: /\bai development\b/, weight: 9 },
            { regex: /\bai integration\b/, weight: 9 },
            { regex: /\bai integrations\b/, weight: 9 },
            { regex: /\bgenerative ai\b/, weight: 8 },
            { regex: /\bgemini\b/, weight: 10 },
            { regex: /\bgoogle gemini\b/, weight: 10 },
            { regex: /\bai assistant\b/, weight: 10 },
            { regex: /\bai assistants\b/, weight: 10 },
            { regex: /\bredat\b/, weight: 12 },
            { regex: /\bchat assistant\b/, weight: 8 },
            { regex: /\bchatbot\b/, weight: 7 },
            { regex: /\bchat bots\b/, weight: 7 },
            { regex: /\bllm integration\b/, weight: 9 },
            { regex: /\bllm integrations\b/, weight: 9 },
        ],
    },


    {
        name: "aiArchitecture",
        priority: 10,
        patterns: [
            { regex: /\bhow does redat work\b/, weight: 12 },
            { regex: /\bhow does the ai assistant work\b/, weight: 10 },
            { regex: /\bhow does his ai work\b/, weight: 10 },
            { regex: /\bhow did he build redat\b/, weight: 12 },
            { regex: /\bhow is redat built\b/, weight: 12 },
            { regex: /\blocal first ai\b/, weight: 12 },
            { regex: /\blocal first assistant\b/, weight: 12 },
            { regex: /\bkeyword detection\b/, weight: 8 },
            { regex: /\bintent detection\b/, weight: 9 },
            { regex: /\bgemini fallback\b/, weight: 10 },
            { regex: /\bchat history\b/, weight: 7 },
            { regex: /\bconversation history\b/, weight: 7 },
            { regex: /\bresponse caching\b/, weight: 8 },
            { regex: /\bcached questions\b/, weight: 8 },
        ],
    },


    {
        name: "telegramSkills",
        priority: 9,
        patterns: [
            { regex: /\btelegram skills\b/, weight: 7 },
            { regex: /\btelegram development\b/, weight: 7 },
            { regex: /\btelegram mini apps\b/, weight: 7 },
            { regex: /\btelegram bots\b/, weight: 7 },
            { regex: /\btelegram experience\b/, weight: 7 },
        ],
    },


    {
        name: "cloudMedia",
        priority: 8,
        patterns: [
            { regex: /\bcloudinary\b/, weight: 8 },
            { regex: /\bmedia uploads\b/, weight: 7 },
            { regex: /\bimage uploads\b/, weight: 7 },
            { regex: /\bfile uploads\b/, weight: 7 },
            { regex: /\bmedia management\b/, weight: 7 },
        ],
    },


    {
        name: "skills",
        priority: 7,
        patterns: [
            { regex: /\btechnical skills\b/, weight: 6 },
            { regex: /\bskills\b/, weight: 5 },
            { regex: /\btechnologies\b/, weight: 5 },
            { regex: /\btech stack\b/, weight: 6 },
            { regex: /\btechnology stack\b/, weight: 6 },
            { regex: /\bwhat technologies does amanuel use\b/, weight: 8 },
            { regex: /\bwhat technologies does he use\b/, weight: 8 },
            { regex: /\bwhat can he work with\b/, weight: 7 },
            { regex: /\bwhat tools does he use\b/, weight: 7 },
        ],
    },


    {
        name: "projects",
        priority: 7,
        patterns: [
            { regex: /\bwhat projects\b/, weight: 6 },
            { regex: /\blist projects\b/, weight: 6 },
            { regex: /\bprojects has he built\b/, weight: 7 },
            { regex: /\bprojects does he have\b/, weight: 7 },
            { regex: /\bhis projects\b/, weight: 6 },
            { regex: /\bshow me his projects\b/, weight: 7 },
            { regex: /\bwhat has he built\b/, weight: 7 },
            { regex: /\bwhat did he build\b/, weight: 7 },
        ],
    },

    {
        name: "experience",
        priority: 7,
        patterns: [
            { regex: /\bexperience\b/, weight: 6 },
            { regex: /\bwork experience\b/, weight: 7 },
            { regex: /\bprofessional experience\b/, weight: 7 },
            { regex: /\bwhat has he worked on\b/, weight: 7 },
            { regex: /\bwhat work has he done\b/, weight: 7 },
        ],
    },


    {
        name: "performance",
        priority: 8,
        patterns: [
            { regex: /\blighthouse\b/, weight: 7 },
            { regex: /\bperformance score\b/, weight: 7 },
            { regex: /\bperformance scores\b/, weight: 7 },
            { regex: /\bweb performance\b/, weight: 6 },
            { regex: /\bwebsite performance\b/, weight: 6 },
            { regex: /\bperformance optimization\b/, weight: 7 },
            { regex: /\bperformance experience\b/, weight: 7 },
        ],
    },


    {
        name: "testingStats",
        priority: 10,
        patterns: [
            { regex: /\bhow many tests\b/, weight: 8 },
            { regex: /\btest files\b/, weight: 8 },
            { regex: /\bpassed assertions\b/, weight: 8 },
            { regex: /\btesting statistics\b/, weight: 8 },
            { regex: /\bhow many assertions\b/, weight: 8 },
            { regex: /\btesting numbers\b/, weight: 7 },
        ],
    },


    {
        name: "githubStats",
        priority: 9,
        patterns: [
            { regex: /\bgithub contributions\b/, weight: 8 },
            { regex: /\bgithub contribution\b/, weight: 8 },
            { regex: /\bpublic repositories\b/, weight: 7 },
            { regex: /\bhow active is his github\b/, weight: 7 },
            { regex: /\bgithub activity\b/, weight: 7 },
        ],
    },



    {
        name: "career",
        priority: 8,
        patterns: [
            { regex: /\bcareer direction\b/, weight: 7 },
            { regex: /\bcareer goals\b/, weight: 7 },
            { regex: /\bwhat are his goals\b/, weight: 7 },
            { regex: /\bfuture goals\b/, weight: 7 },
            { regex: /\bwhat does he want to become\b/, weight: 8 },
            { regex: /\blong term goal\b/, weight: 7 },
            { regex: /\blong term direction\b/, weight: 7 },
            { regex: /\bcareer path\b/, weight: 7 },
        ],
    },


    {
        name: "availability",
        priority: 8,
        patterns: [
            { regex: /\bis amanuel available\b/, weight: 7 },
            { regex: /\bis he available\b/, weight: 7 },
            { regex: /\bavailability\b/, weight: 6 },
            { regex: /\bavailable for work\b/, weight: 7 },
            { regex: /\blooking for work\b/, weight: 7 },
            { regex: /\bfreelance\b/, weight: 5 },
            { regex: /\binternship\b/, weight: 5 },
            { regex: /\binternships\b/, weight: 5 },
            { regex: /\bopen to work\b/, weight: 7 },
        ],
    },


    {
        name: "languages",
        priority: 8,
        patterns: [
            { regex: /\blanguages does he speak\b/, weight: 8 },
            { regex: /\bwhat languages does he speak\b/, weight: 8 },
            { regex: /\bspoken languages\b/, weight: 7 },
            { regex: /\bhuman languages\b/, weight: 7 },
        ],
    },


    {
        name: "services",
        priority: 9,
        patterns: [
            { regex: /\bservices\b/, weight: 7 },
            { regex: /\bwhat can he build\b/, weight: 8 },
            { regex: /\bwhat can amanuel build\b/, weight: 8 },
            { regex: /\bwhat does he offer\b/, weight: 8 },
            { regex: /\bwhat services does he offer\b/, weight: 9 },
            { regex: /\bwhat can i hire him for\b/, weight: 10 },
            { regex: /\bwhat can i hire amanuel for\b/, weight: 10 },
            { regex: /\bfreelance services\b/, weight: 8 },
            { regex: /\bdevelopment services\b/, weight: 8 },
        ],
    },
];

const PROJECTS = [
    {
        id: "amanBlog",
        patterns: [
            /\baman blog\b/i,
            /\bblog ecosystem\b/i,
            /\bblog project\b/i,
            /\bamanuel blog\b/i,
            /\bblog website\b/i,
            /\bblog application\b/i,
        ],
    },

    {
        id: "telegramAcademy",
        patterns: [
            /\btelegram academy\b/i,
            /\btelegram pdf reader\b/i,
            /\bpdf reader\b/i,
            /\bacademy mini app\b/i,
            /\bacademy reader\b/i,
        ],
    },

    {
        id: "telegramBot",
        patterns: [
            /\btelegram pdf library bot\b/i,
            /\bpdf library bot\b/i,
            /\btelegram library bot\b/i,
        ],
    },

    {
        id: "nuur",
        patterns: [
            /\bnuur\b/i,
            /\bsafety platform\b/i,
            /\bcursor hackathon\b/i,
        ],
    },

    {
        id: "portfolioV2",
        patterns: [
            /\bdeveloper portfolio v2\b/i,
            /\bportfolio v2\b/i,
            /\bamanuel portfolio\b/i,
            /\bdeveloper portfolio\b/i,
            /\bportfolio ai\b/i,
            /\bredat\b/i,
        ],
    },

    {
        id: "ecommerce",
        patterns: [
            /\becommerce\b/i,
            /\be commerce\b/i,
            /\be-commerce\b/i,
            /\bshopping cart\b/i,
            /\bscalable ecommerce\b/i,
        ],
    },
];

const detectProject = (text) => {
    for (const project of PROJECTS) {
        if (project.patterns.some((pattern) => pattern.test(text))) {
            return project.id;
        }
    }

    return null;
};


const detectIntent = (message) => {
    const text = normalizeText(message);

    let bestIntent = null;
    let bestScore = 0;
    let bestPriority = -1;

    for (const intent of INTENTS) {
        let score = 0;

        for (const pattern of intent.patterns) {
            if (pattern.regex.test(text)) {
                score += pattern.weight;
            }
        }

        if (
            score > bestScore ||
            (score === bestScore && intent.priority > bestPriority)
        ) {
            bestIntent = intent.name;
            bestScore = score;
            bestPriority = intent.priority;
        }
    }


    if (bestScore < 3) {
        return null;
    }

    return {
        name: bestIntent,
        score: bestScore,
    };
};


const getContactAnswer = (text) => {
    const contacts = portfolio.contacts;

    if (/\bemail\b/i.test(text)) {
        return `You can contact Amanuel by email at [${contacts.email.value}](${contacts.email.url}).`;
    }

    if (
        /\bphone\b/i.test(text) ||
        /\btelephone\b/i.test(text) ||
        /\bcall amanuel\b/i.test(text) ||
        /\bcall him\b/i.test(text)
    ) {
        return `Amanuel's phone number is [${contacts.phone.value}](${contacts.phone.url}).`;
    }

    if (/\blinkedin\b/i.test(text)) {
        return `[Amanuel's LinkedIn](${contacts.linkedin.url})`;
    }

    if (/\bgithub\b/i.test(text)) {
        return `[Amanuel's GitHub](${contacts.github.url})`;
    }

    return `### Contact Amanuel

- **Email:** [${contacts.email.value}](${contacts.email.url})
- **Phone:** [${contacts.phone.value}](${contacts.phone.url})
- **GitHub:** [GitHub](${contacts.github.url})
- **LinkedIn:** [LinkedIn](${contacts.linkedin.url})
- **Portfolio:** [Portfolio](${contacts.portfolio.url})`;
};


const getProjectAnswer = (projectId) => {
    switch (projectId) {

        case "amanBlog": {
            const project = portfolio.projects.find(
                (item) => item.name === "Aman Blog & Portfolio Ecosystem"
            );

            if (!project) return null;

            return `### ${project.name}

${project.description}

This is one of Amanuel's main full-stack projects. It combines authentication, content management, media handling, Google OAuth, email workflows, PWA functionality, offline support, and automated testing.

**Authentication:**
- JWT-based authentication
- User registration and login
- Google OAuth
- Authentication and authorization workflows

**Email system:**
- Gmail-based email integration
- Automated account-related emails
- Welcome email workflow after registration
- Transactional email workflows

**Other capabilities:**
- Rich text content management
- Cloudinary media uploads
- Progressive Web App functionality
- Service-worker support
- Offline caching
- Low-connectivity support
- Automated frontend and backend testing

**Technologies:** ${project.technologies.join(", ")}

**Testing:** ${project.testing.testFiles} test files and ${project.testing.passedAssertions} passed assertions.

[GitHub](${project.github}) · [Live Project](${project.live})`;
        }


        case "telegramAcademy": {
            const project = portfolio.projects.find(
                (item) => item.name === "Telegram Academy PDF Reader"
            );

            if (!project) return null;

            return `### ${project.name}

${project.description}

The project demonstrates Amanuel's ability to build applications around a third-party platform while handling authentication, authorization, membership verification, and private learning resources.

**Technologies:** ${project.technologies.join(", ")}`;
        }


        case "telegramBot": {
            const project = portfolio.projects.find(
                (item) => item.name === "Telegram PDF Library Bot"
            );

            if (!project) return null;

            return `### ${project.name}

${project.description}

This project demonstrates backend-focused work with the Telegram Bot API, resource management, and MongoDB-backed application logic.

**Technologies:** ${project.technologies.join(", ")}`;
        }


        case "nuur": {
            const project = portfolio.projects.find(
                (item) => item.name === "NuuR Safety Platform"
            );

            if (!project) return null;

            return `### ${project.name}

${project.description}

Amanuel contributed to this project during the Cursor Hackathon, working on responsive frontend interfaces and workflows involving emergency reporting and location-based functionality.

**Technologies:** ${project.technologies.join(", ")}

[GitHub](${project.github}) · [Live Project](${project.live})`;
        }


        case "portfolioV2": {
            const project = portfolio.projects.find(
                (item) => item.name === "Developer Portfolio V2"
            );

            if (!project) return null;

            return `### ${project.name}

${project.description}

This project is particularly important because it combines Amanuel's frontend engineering, performance optimization, automated testing, and AI integration work.

The portfolio includes **Redat**, an AI assistant integrated with **Google Gemini**.

Redat uses a local-first approach for common portfolio questions. It detects known intents and keywords and can answer many factual questions without making an external AI request. More complex or semantic questions can fall through to Gemini.

The assistant also supports conversational context and can work with chat history so that follow-up questions can be understood in context.

**AI capabilities demonstrated:**
- Google Gemini integration
- AI assistant integration
- Intent detection
- Keyword-based local responses
- Local-first response architecture
- Gemini fallback for complex questions
- Chat history / conversational context
- Common-question response handling
- Response caching strategies
- Portfolio knowledge grounding

**Technologies:** ${project.technologies.join(", ")}

**Performance:** ${portfolio.stats.mobileLighthouse} mobile Lighthouse and ${portfolio.stats.desktopLighthouse} desktop Lighthouse.

[GitHub](${project.github}) · [Live Project](${project.live})`;
        }


        case "ecommerce": {
            const project = portfolio.projects.find(
                (item) => item.name === "Scalable E-Commerce Engine"
            );

            if (!project) return null;

            return `### ${project.name}

${project.description}

The project demonstrates Amanuel's frontend experience with client-side state management, filtering, authentication, responsive shopping flows, and automated testing.

**Technologies:** ${project.technologies.join(", ")}

[GitHub](${project.github}) · [Live Project](${project.live})`;
        }

        default:
            return null;
    }
};

const getLocalPortfolioAnswer = (message) => {
    if (
        !message ||
        typeof message !== "string" ||
        !message.trim()
    ) {
        return null;
    }

    const text = normalizeText(message);


    const projectId = detectProject(text);

    if (projectId) {
        const projectAnswer = getProjectAnswer(projectId);

        if (projectAnswer) {
            return projectAnswer;
        }
    }


    const detectedIntent = detectIntent(text);

    if (!detectedIntent) {
        return null;
    }

    switch (detectedIntent.name) {

        case "greeting":
            return `Hello! 👋 I'm Redat, Amanuel's AI assistant.

I can tell you about Amanuel's development background, technical skills, projects, AI integration work, testing experience, PWA development, performance optimization, education, and career direction.

What would you like to know?`;

        case "thanks":
            return `You're welcome! 👋 If you'd like, you can ask me about Amanuel's projects, technical skills, AI integration, testing, performance work, or career direction.`;

        case "goodbye":
            return `Thanks for stopping by! 👋 Feel free to come back if you'd like to learn more about Amanuel's work.`;

        case "identity":
            return `**Amanuel Amare** is a Full-Stack MERN Developer and React Performance Specialist based in Bahir Dar, Ethiopia.

He focuses on building fast, reliable, and user-focused web applications using React, JavaScript, Node.js, Express, and MongoDB, with additional hands-on experience in automated testing, PWAs, offline experiences, authentication, email integrations, Telegram applications, AI integrations, and web performance optimization.

He is currently studying Software Engineering at Bahir Dar University and is building toward becoming a stronger full-stack engineer, with a long-term direction toward AI Engineering.`;

        case "title":
            return `Amanuel is a **Full-Stack MERN Developer and React Performance Specialist**.

His current focus is broader than frontend UI development. He works across React-based frontend applications and Node.js/Express backends, while paying particular attention to **web performance, automated testing, authentication, PWA functionality, reliability, AI integration, and user experience**.

His current hands-on stack includes React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, Vitest, React Testing Library, Supertest, PWA technologies, Telegram APIs, email integrations, and Google Gemini integration.`;

        case "location":
            return `Amanuel is based in **${portfolio.personal.location}**.

He is currently studying Software Engineering at Bahir Dar University while building practical engineering experience through independent projects, hackathons, and freelance-oriented development work.`;

        case "bio":
            return `**Amanuel Amare** is a Software Engineering student and Full-Stack Developer focused on building reliable, high-performance web applications.

His work spans React frontend development, Node.js and Express backend systems, MongoDB, authentication, Google OAuth, automated testing, PWA functionality, offline caching, email integrations, Telegram applications, AI integrations, and performance optimization.

His portfolio demonstrates an interest in more than visual UI development. He focuses on measurable performance, testing, maintainability, integrations, and building complete applications from frontend to backend.`;

        case "contact":
            return getContactAnswer(text);


        case "portfolio":
            return `Amanuel's portfolio presents his work as a **Full-Stack MERN Developer and React Performance Specialist**.

It includes full-stack applications, frontend projects, Telegram applications, a hackathon project, automated testing work, PWA functionality, AI integration, and performance optimization.

[View Amanuel's Portfolio](${portfolio.contacts.portfolio.url})`;

        case "education": {
            const education = portfolio.education[0];

            return `Amanuel is currently studying **${education.degree}** at **${education.institution}** in ${education.location}.

His degree is scheduled for **${education.duration}** and he is currently studying while developing practical engineering experience through personal projects and collaborative work.

He has also completed the ALX Software Engineering Program, ALX Professional Foundations, and the Ethiocoder program.`;
        }


        case "programs": {
            const programs = portfolio.programs
                .map((program) => {
                    const provider = program.provider
                        ? ` — ${program.provider}`
                        : "";

                    return `- **${program.name}**${provider} — ${program.status}`;
                })
                .join("\n");

            return `### Programs & Training

Amanuel has completed several structured software-development programs:

${programs}

These programs complement his university Software Engineering studies and practical project work.`;
        }

        case "frontendSkills":
            return `### Frontend Development

Amanuel's frontend work is centered around **React and modern JavaScript**.

${portfolio.skills.frontend
                    .map((skill) => `- ${skill}`)
                    .join("\n")}

His frontend focus also includes reusable components, responsive interfaces, accessibility, state management, automated testing, PWA development, and performance optimization.`;

        case "backendSkills":
            return `### Backend Development

Amanuel has hands-on experience building backend systems with Node.js and Express.

${portfolio.skills.backend
                    .map((skill) => `- ${skill}`)
                    .join("\n")}

His backend work includes REST APIs, authentication, database integration, media handling, email workflows, and connecting backend services with React applications.

He is currently strengthening his backend architecture knowledge as part of his path toward stronger full-stack engineering.`;

        case "authentication":
            return `### Authentication & Authorization

Amanuel has practical experience implementing authentication and authorization in full-stack applications.

His work includes:

- JWT-based authentication
- User registration and login
- Protected application routes
- Authentication state management
- Password hashing with bcrypt
- Google OAuth / Google login
- Authorization workflows
- Cookie-based authentication workflows
- Backend authentication APIs

His **Aman Blog & Portfolio Ecosystem** combines traditional authentication with **Google OAuth**, giving him experience with both application-managed authentication and third-party identity providers.`;

        case "testing":
            return `### Testing & Reliability

Testing is an important part of Amanuel's development workflow.

He uses:

${portfolio.skills.testing
                    .map((skill) => `- ${skill}`)
                    .join("\n")}

His Aman Blog project currently contains **${portfolio.stats.testFiles} test files and ${portfolio.stats.passedTests} passed assertions**.

His testing covers both frontend behavior and backend/API behavior, using tools such as Vitest, React Testing Library, and Supertest.`;


        case "pwa":
            return `### Progressive Web App Experience

Amanuel has practical experience with PWA concepts including:

${portfolio.skills.pwa
                    .map((skill) => `- ${skill}`)
                    .join("\n")}

His Aman Blog project includes service-worker-based functionality, offline caching, cached resource access, installability, and support for low-connectivity situations.

This is particularly relevant to applications that need to remain useful when users have unreliable or limited internet access.`;



        case "emailIntegration":
            return `### Email Integration

Amanuel has practical experience integrating email services into full-stack applications.

His work includes:

- Gmail-based email integration
- Nodemailer-based email workflows
- Transactional emails
- Automated account-related emails
- Welcome emails after registration
- Email notifications
- Backend-triggered email workflows
- Environment-based email configuration

In the **Aman Blog & Portfolio Ecosystem**, creating a new account can trigger an automated email workflow.

This demonstrates experience connecting application events with external email infrastructure rather than treating email as only a frontend feature.`;



        case "aiDevelopment":
            return `### AI Integration

Amanuel has hands-on experience integrating generative AI into a real web application.

His Developer Portfolio V2 includes **Redat**, an AI assistant powered by **Google Gemini**.

His AI-related work includes:

- Google Gemini API integration
- AI assistant development
- LLM-powered responses
- Local intent detection
- Keyword-based routing
- Local-first response handling
- Gemini fallback for more complex questions
- Chat history and conversational context
- Common-question handling
- Response caching strategies
- Portfolio-specific knowledge grounding

His current long-term direction is toward **AI Engineering**, while continuing to strengthen his software engineering fundamentals.`;


        case "aiArchitecture":
            return `### How Redat Works

Redat is designed around a **local-first AI assistant architecture**.

At a high level:

**1. User sends a message**

The application first normalizes the message and analyzes it.

**2. Local intent detection**

Redat checks for known patterns such as:

- projects
- skills
- testing
- performance
- education
- contact
- AI
- PWA
- authentication
- email
- Telegram
- career
- availability

**3. Fast local response**

If the question is a known factual portfolio question, Redat can answer directly from the local portfolio data.

This avoids sending every simple question to Gemini.

**4. Gemini fallback**

If the local system cannot confidently answer the question, the request can fall through to Gemini for more semantic understanding.

**5. Conversation context**

Chat history can be used so follow-up questions have conversational context instead of treating every message as completely isolated.

**6. Common-question optimization**

Frequently requested information can be handled locally and cached, reducing unnecessary external AI requests.

This architecture gives Redat a useful combination of **speed, predictable factual responses, conversational AI, and lower unnecessary API usage**.`;


        case "telegramSkills":
            return `### Telegram Development

Amanuel has practical experience building applications around the Telegram platform.

${portfolio.skills.telegram
                    .map((skill) => `- ${skill}`)
                    .join("\n")}

His portfolio includes both a **Telegram Mini App** for a private academy and a **Telegram PDF Library Bot**, demonstrating experience with platform APIs, membership verification, authorized resource access, and learning-resource management.`;


        case "cloudMedia":
            return `### Media & Cloud Integration

Amanuel has experience integrating cloud-based media handling into full-stack applications.

His work includes:

- Cloudinary
- Image uploads
- Media uploads
- Backend media workflows
- Stored media references
- Connecting uploaded media with MongoDB-backed application data

This experience is demonstrated in the Aman Blog & Portfolio Ecosystem.`;


        case "skills": {
            const sections = Object.entries(portfolio.skills)
                .map(([category, skills]) => {
                    const title =
                        category.charAt(0).toUpperCase() +
                        category.slice(1);

                    return `**${title}:** ${skills.join(", ")}`;
                })
                .join("\n\n");

            return `### Amanuel's Technical Skills

Amanuel's current hands-on stack covers frontend development, backend engineering, testing, authentication, PWA development, AI integration, email services, Telegram applications, media handling, and deployment.

${sections}

**Current learning direction:** TypeScript, FastAPI, PostgreSQL, and deeper AI engineering concepts are areas he is actively working toward rather than technologies he currently presents as core production skills.`;
        }


        case "services":
            return `### Development Services

Amanuel can contribute to projects involving:

- **React frontend development**
- **MERN full-stack development**
- **Responsive web application development**
- **REST API development**
- **Authentication and authorization**
- **Google OAuth integration**
- **MongoDB database integration**
- **Automated testing with Vitest, React Testing Library, and Supertest**
- **PWA and offline functionality**
- **Web performance optimization**
- **AI assistant integration**
- **Google Gemini integration**
- **Email and transactional email integration**
- **Cloudinary media integration**
- **Telegram Mini Apps**
- **Telegram bots**
- **Frontend state management with Zustand**
- **Deployment with Vercel and Render**

For freelance or collaborative work, his strongest current areas are React, JavaScript, MERN development, testing, performance, PWA functionality, integrations, and practical AI-assisted application features.`;


        case "projects": {
            const projects = portfolio.projects
                .map(
                    (project) =>
                        `- **${project.name}** — ${project.category}`
                )
                .join("\n");

            return `### Projects

Amanuel has built projects across full-stack web development, frontend engineering, PWA functionality, AI integration, Telegram applications, e-commerce, and hackathons.

${projects}

His projects demonstrate experience with authentication, APIs, databases, testing, media management, third-party integrations, email workflows, AI integration, offline functionality, and performance optimization.`;
        }


        case "experience":
            return `### Development Experience

Amanuel's current experience is primarily built through independent engineering projects and collaborative development rather than a long traditional employment history.

${portfolio.experience
                    .map(
                        (experience) =>
                            `**${experience.role}** — ${experience.type} (${experience.duration})

${experience.description}`
                    )
                    .join("\n\n")}

His portfolio therefore provides evidence of hands-on engineering work across frontend, backend, testing, PWA functionality, authentication, integrations, AI features, performance, and collaborative development.`;

        case "performance":
            return `### Web Performance

Web performance is one of Amanuel's main technical areas of focus.

His portfolio reports:

- **${portfolio.stats.mobileLighthouse}** mobile Lighthouse performance
- **${portfolio.stats.desktopLighthouse}** desktop Lighthouse performance

He focuses on improving frontend loading and runtime performance, reducing unnecessary work, optimizing resources, and measuring the results rather than treating performance as only a visual concern.

His Developer Portfolio V2 is one of the projects where this performance-focused work is demonstrated.`;


        case "testingStats":
            return `### Testing Metrics

Amanuel currently has:

- **${portfolio.stats.testFiles} test files**
- **${portfolio.stats.passedTests} passed assertions**

His testing stack includes **Vitest, React Testing Library, and Supertest**, covering frontend behavior and backend/API testing.

The numbers come from his Aman Blog & Portfolio Ecosystem project and represent concrete evidence of his focus on automated testing.`;

        case "githubStats":
            return `### GitHub Activity

Amanuel's portfolio currently reports:

- **${portfolio.stats.githubContributions} GitHub contributions**
- **${portfolio.stats.publicRepositories} public repositories**

His repositories cover frontend, full-stack development, testing, PWA work, AI integration, Telegram applications, e-commerce, and hackathon projects.

[View Amanuel's GitHub](${portfolio.contacts.github.url})`;

        case "career":
            return `### Career Direction

Amanuel's current direction is **${portfolio.career.currentDirection}**.

His immediate goals are to strengthen his backend engineering skills, build scalable and reliable software, improve his professional engineering experience, and work on freelance and internship opportunities.

His long-term direction is **${portfolio.career.longTermDirection}**, where he plans to combine strong software engineering fundamentals with AI technologies.

His current learning direction includes deeper backend architecture, TypeScript, FastAPI, PostgreSQL, and AI engineering concepts.`;

        case "availability":
            return `### Current Opportunities

Amanuel is currently open to:

${portfolio.availability
                    .map((item) => `- ${item}`)
                    .join("\n")}

His strongest current areas are **React, JavaScript, frontend performance, automated testing, PWA development, integrations, and MERN-based full-stack development**.`;

        case "languages":
            return `### Languages

Amanuel's languages include:

${portfolio.languages
                    .map(
                        (language) =>
                            `- **${language.name}** — ${language.level}`
                    )
                    .join("\n")}`;

        default:
            return null;
    }
};


module.exports = {
    getLocalPortfolioAnswer,
    detectIntent,
    detectProject,
};