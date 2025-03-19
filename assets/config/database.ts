export interface Message {
    id: number;
    sender: boolean;
    message: string;
    timestamp: Date;
}

export interface Listing {
    id: number;
    name: string;
    tags: string[];
    rating: number;
    image: unknown;
    chat: Message[];
}

const listing: Listing[] = [
    {
        id: 1,
        name: "High Hills",
        tags: ["house", "rent", "flexible"],
        rating: 4.5,
        image: require("@/assets/houses/casa.jpg"),
        chat: [
            {
                id: 1,
                sender: true,
                message: "Hello, how are you?",
                timestamp: new Date('2022-10-01T12:00:00'),
            },
            {
                id: 2,
                sender: false,
                message: "I'm good, thank you. How about you?",
                timestamp: new Date('2022-10-01T12:05:00'),
            },
            {
                id: 3,
                sender: true,
                message: "I'm doing great, thanks for asking!",
                timestamp: new Date('2022-10-01T12:10:00'),
            },
        ],
    },
    {
        id: 2,
        name: "Green Valley",
        tags: ["house", "rent", "family"],
        rating: 4.2,
        image: require("@/assets/houses/casa2.jpg"),
        chat: [
            {
                id: 1,
                sender: false,
                message: "Hi, what do you think of the place?",
                timestamp: new Date('2022-10-02T12:00:00'),
            },
            {
                id: 2,
                sender: true,
                message: "It looks great! How much is the rent?",
                timestamp: new Date('2022-10-02T12:05:00'),
            },
            {
                id: 3,
                sender: false,
                message: "It's $1,500 per month. Is that within your budget?",
                timestamp: new Date('2022-10-02T12:10:00'),
            },
        ],
    },
    {
        id: 3,
        name: "Sunny Side Up",
        tags: ["house", "rent", "student"],
        rating: 4.8,
        image: require("@/assets/houses/casa3.avif"),
        chat: [
            {
                id: 1,
                sender: true,
                message: "Hi, is this place available?",
                timestamp: new Date('2022-10-03T12:00:00'),
            },
            {
                id: 2,
                sender: false,
                message: "Yes, it is. When can you come see it?",
                timestamp: new Date('2022-10-03T12:05:00'),
            },
            {
                id: 3,
                sender: true,
                message: "I'm available today at 3pm. Is that good for you?",
                timestamp: new Date('2022-10-03T12:10:00'),
            },
        ],
    },
    {
        id: 4,
        name: "Urban Oasis",
        tags: ["apartment", "rent", "pet-friendly"],
        rating: 4.1,
        image: require("@/assets/houses/apto.jpg"),
        chat: [
            {
                id: 1,
                sender: false,
                message: "Hey, do you have any pets?",
                timestamp: new Date('2022-10-04T12:00:00'),
            },
            {
                id: 2,
                sender: true,
                message: "Yeah, I have a cat. Is that okay?",
                timestamp: new Date('2022-10-04T12:05:00'),
            },
            {
                id: 3,
                sender: false,
                message: "That's fine. We allow pets. Do you have any questions about the place?",
                timestamp: new Date('2022-10-04T12:10:00'),
            },
        ],
    },
    {
        id: 5,
        name: "Crown Jewel",
        tags: ["apartment", "rent", "luxury"],
        rating: 4.9,
        image: require("@/assets/houses/apto2.png"),
        chat: [
            {
                id: 1,
                sender: true,
                message: "Hi, is this place really worth the price?",
                timestamp: new Date('2022-10-05T12:00:00'),
            },
            {
                id: 2,
                sender: false,
                message: "Yes, it is. The amenities are top-notch and the views are amazing.",
                timestamp: new Date('2022-10-05T12:05:00'),
            },
            {
                id: 3,
                sender: true,
                message: "I see. Can I schedule a viewing?",
                timestamp: new Date('2022-10-05T12:10:00'),
            },
        ],
    },
]

export default listing;