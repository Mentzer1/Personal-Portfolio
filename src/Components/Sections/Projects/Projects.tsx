import { JSX } from "react";
import "./Projects.css";
import { RevealOnScroll } from "../../RevealOnScroll/RevealOnScroll";

export function Projects(): JSX.Element {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Coupon System - Backend</h3>
                        <p className="text-gray-400 mb-4">Created a Java-based application designed to facilitate the management of coupons for companies and customers.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java","MySQL","Spring"].map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Mentzer1/Coupon-system-backend" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project → </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Coupon System - Frontend</h3>
                        <p className="text-gray-400 mb-4">Created a web application using React and Typescript that serves as the user interface for the Coupon System</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React","Redux","TypeScript"].map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Mentzer1/Coupon-system-frontend" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project → </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}
