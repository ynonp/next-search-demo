"use server";

const sentences: string[] = [
  "Responsive design ensures that websites adapt seamlessly to different screen sizes and devices.",
  "JavaScript is a versatile programming language that adds interactivity and functionality to web pages.",
  "Cascading Style Sheets (CSS) are used to control the layout, colors, and fonts of a website.",
  "Front-end developers focus on creating the user interface and user experience of a website.",
  "Back-end developers handle server-side programming and database management.",
  "Version control systems like Git help developers collaborate and track changes in their code.",
  "Accessibility is crucial in web development to ensure that websites are usable by people with disabilities.",
  "Web frameworks like React and Angular streamline the development process and provide reusable components.",
  "Optimizing website performance involves minimizing file sizes, reducing HTTP requests, and leveraging caching techniques.",
  "Progressive web apps (PWAs) offer a native app-like experience through modern web technologies.",
  "Responsive images adapt to different screen resolutions, improving page load times and user experience.",
  "Cross-browser compatibility testing ensures that websites function correctly across various web browsers.",
  "Web developers often use development tools like Chrome DevTools to debug and optimize their code.",
  "Search engine optimization (SEO) helps improve a website's visibility and ranking in search engine results pages.",
  "Continuous learning is essential in web development due to the constantly evolving technologies and best practices."
];

export async function search(what: string) {
  if (what.length < 3) {
    return []
  } else {
    return sentences.filter(s => s.toLowerCase().includes(what))
  }
}