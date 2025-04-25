import { JSX } from "react";
import "./About.css";
import { RevealOnScroll } from "../../RevealOnScroll/RevealOnScroll";

export function About(): JSX.Element {
    const frontendSkills = ["HTML","React","JavaScript", "TypeScript", "Redux"];
    const backendSkills = ["Java", "Spring", "REST", "Design Patterns", "OOP", "SQL"];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    Aspiring software developer with Java Full Stack and Customer Success training, preferring backend, but open to frontend, and other areas of software development.                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-b">
                        🏫Education
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Java Full Stack Course </strong> - John Bryce School (2024-2025  -  760 hours)
                        </li>
                        <li>
                            Relevant Coursework: Client Side Development, Web Development 
                        </li>
                    </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-b">
                        💼Work Experience
                    </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Show.gg</h4>
                            <p>Helped giving support for the site and dabbled in introductory development using Kotlin</p>
                        </div>

                        {/* <div>
                            <h4 className="font-semibold">Work 2</h4>
                            <p>What i did at work 2</p>
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}
