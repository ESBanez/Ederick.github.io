import "../sass/RunningWords.scss";

const statements = [
    {
        name: "material",
        id: 1,
        talks: "Connection",
        meaning: "https://www.merriam-webster.com/dictionary/connection"
    },
    {
        name: "rest",
        id: 2,
        talks: "Innovation",
        meaning: "https://www.merriam-webster.com/dictionary/connection"
    },
    {
        name: "reactjs",
        id: 3,
        talks: "Creativity",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "instagram",
        id: 4,
        talks: "Passion",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "vercel",
        id: 5,
        talks: "Integrity",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "github",
        id: 6,
        talks: "Teamwork",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "vite",
        id: 7,
        talks: "Commitment",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "PHP",
        id: 8,
        talks: "Collaboration",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "laravel",
        id: 9,
        talks: "Value",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "canva",
        id: 10,
        talks: "Goal",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "material",
        id: 11,
        talks: "Connection",
        meaning: "https://www.merriam-webster.com/dictionary/connection"

    },
    {
        name: "rest",
        id: 12,
        talks: "Innovation",
        meaning: "https://www.merriam-webster.com/dictionary/innovation"

    },
    {
        name: "reactjs",
        id: 13,
        talks: "Creativity",
        meaning: "https://www.merriam-webster.com/dictionary/creativity"

    },
    {
        name: "instagram",
        id: 14,
        talks: "Passion",
        meaning: "https://www.merriam-webster.com/dictionary/passion"

    },
    {
        name: "vercel",
        id: 15,
        talks: "Integrity",
        meaning: "https://www.merriam-webster.com/dictionary/integrity"

    },
    {
        name: "github",
        id: 16,
        talks: "Teamwork",
        meaning: "https://www.merriam-webster.com/dictionary/teamwork"

    },
    {
        name: "vite",
        id: 17,
        talks: "Commitment",
        meaning: "https://www.merriam-webster.com/dictionary/commitment"

    },
    {
        name: "PHP",
        id: 18,
        talks: "Collaboration",
        meaning: "https://www.merriam-webster.com/dictionary/collaboration"

    },
    {
        name: "laravel",
        id: 19,
        talks: "Value",
        meaning: "https://www.merriam-webster.com/dictionary/value"

    },
    {
        name: "canva",
        id: 20,
        talks: "Goal",
        meaning: "https://www.merriam-webster.com/dictionary/goal"

    }
];


function RunningWords() {
    return (
        <div className="slider">
            <div>
                <div className="slide-track">
                    {statements.map((statement) => (
                        <div className="slide" key={statement.id}>
                            <a href={statement.meaning} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#00FFA1"}}>
                                <h5>{statement.talks}</h5>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Connection | Innovation | Creativity | Passion | Integrity | Teamwork | Commitment | Collaboration | Hardwork | Relationships | Value | Trust | Respect | Integrity | Teamwork | Commitment | Collaboration | Hardwork | Relationships | Value | Trust | Goal

export default RunningWords;