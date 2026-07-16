import { useEffect } from "react";

const revealSelectors = [
    ".reveal",
    ".reveal-left",
    ".reveal-right",
    ".reveal-scale",
].join(", ");

function useScrollReveal(): void {
    useEffect(() => {
        const elements =
            document.querySelectorAll<HTMLElement>(revealSelectors);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("active");

                    // L’animation n’a besoin d’être déclenchée qu’une fois.
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            },
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
}

export default useScrollReveal;