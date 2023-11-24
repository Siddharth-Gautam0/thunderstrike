export type ArticleInfo = {
    title: string,
    description: string,
    imagePath: string,
    hue?: string,
    textGlow?: string,
    clickUrl?: string
}

export const articleInfo: Array<ArticleInfo> = [
    {
        title: "Why do sports exist?",
        description: "Sports are not just a hobby or a pastime, but rather an abstraction of a fundamental aspect of human nature. They are evolved from our aggression, identity, and playfulness. They also help us cope with the modern world, which is full of stress, uncertainty, and complexity.",
        imagePath: './gladiator.jpeg',
        textGlow: 'black',
        clickUrl: "https://medium.com/@sidofficial456/why-do-sports-exist-721b0db50349"
    },
    {
        title: "Why are all the gods so similar?",
        description: "There's a very common trope observed that people try to validate the objectivity of religious myths by finding a similar myth in another religion. Since reference to the same event in multiple cultures strengthens the probability of the event having happened.",
        imagePath: "./DivineImg.png",
        textGlow: 'purple',
        clickUrl: "https://medium.com/@sidofficial456/why-are-all-the-gods-so-similar-87bc65874db8"
    },
    {
        title: "The one hack for lasting good habits.",
        description: "Your “being”, in context to habits, is defined by your actions. So, in essence, you are the pattern of your actions. What you do today, is what you will do tomorrow.",
        imagePath: "./FreudAbstract.png",
        textGlow: 'orange',
        clickUrl: "https://medium.com/@sidofficial456/the-one-hack-for-lasting-good-habits-98ac0dd7e586"
    }
]