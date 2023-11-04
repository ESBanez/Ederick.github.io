import "../sass/RunningWords.scss";

const statements = [
    {
        name: "material",
        id: 1,
        talks: "Connection",
    },
    {
        name: "rest",
        id: 2,
        talks: "Innovation",
    },
    {
        name: "reactjs",
        id: 3,
        talks: "Creativity",
    },
    {
        name: "instagram",
        id: 4,
        talks: "Passion",
    },
    {
        name: "vercel",
        id: 5,
        talks: "Integrity",
    },
    {
        name: "github",
        id: 6,
        talks: "Teamwork",
    },
    {
        name: "vite",
        id: 7,
        talks: "Commitment",
    },
    {
        name: "PHP",
        id: 8,
        talks: "Collaboration",
    },
    {
        name: "laravel",
        id: 9,
        talks: "Value",
    },
    {
        name: "canva",
        id: 10,
        talks: "Goal",
    },
    {
        name: "material",
        id: 11,
        talks: "Connection",
    },
    {
        name: "rest",
        id: 12,
        talks: "Innovation",
    },
    {
        name: "reactjs",
        id: 13,
        talks: "Creativity",
    },
    {
        name: "instagram",
        id: 14,
        talks: "Passion",
    },
    {
        name: "vercel",
        id: 15,
        talks: "Integrity",
    },
    {
        name: "github",
        id: 16,
        talks: "Teamwork",
    },
    {
        name: "vite",
        id: 17,
        talks: "Commitment",
    },
    {
        name: "PHP",
        id: 18,
        talks: "Collaboration",
    },
    {
        name: "laravel",
        id: 19,
        talks: "Value",
    },
    {
        name: "canva",
        id: 20,
        talks: "Goal",
    }
];


function RunningWords() {
    return (
        <div className="slider">
            <div>
                <div className="slide-track">
                    {statements.map((statement) => (
                        <div className="slide" key={statement.id}>
                            <h5>{statement.talks}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Connection | Innovation | Creativity | Passion | Integrity | Teamwork | Commitment | Collaboration | Hardwork | Relationships | Value | Trust | Respect | Integrity | Teamwork | Commitment | Collaboration | Hardwork | Relationships | Value | Trust | Goal

export default RunningWords;