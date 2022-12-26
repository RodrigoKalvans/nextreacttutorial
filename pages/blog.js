import { useEffect } from "react";

export default function load() {
    useEffect(() => {
        window.open('https://ourroaming.blogspot.com/', '_self')
    }, []);
}

function BlogPage() {
    return;
}