import { useEffect, useState } from 'react';

export default function AnimatedText({ phrases }) {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer;

        const handleTyping = () => {
            const fullText = phrases[currentPhrase];

            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
                setTypingSpeed(100);
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && displayText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentPhrase((currentPhrase + 1) % phrases.length);
                setTypingSpeed(500);
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentPhrase, phrases, typingSpeed]);

    return (
        <h2 className="text-2xl md:text-4xl font-medium mb-8 h-16 md:h-20 flex items-center">
            <span className="text-white/80">{displayText}</span>
            <span className="ml-1 bg-red-500 h-8 w-1 animate-pulse"></span>
        </h2>
    );
}