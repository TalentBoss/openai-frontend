import React from "react";
import '../css/essay.css';
export const Essay = () => {
    return (
        <div className="row">
            <div className="container">
                <div className="circle">
                    <p>Module 1: Madlibs style essay generation</p>
                </div>
            </div>
            <div className="essay-left">
                <div className="row left-topics">

                    <div className="left-topics-header">
                        <div className="left-topics-header-filled-dot"></div>
                        <div className="left-topics-header-dot"></div>
                    </div>
                    <div className="left-topics-item">
                        <div className="inner-topic">
sss
                        </div>
                    </div>
                    <div className="left-topics-item">
                        <div className="inner-topic">

                        </div>
                    </div>
                    <div className="left-topics-item">
                        <div className="inner-topic">

                        </div>
                    </div>
                    <div className="left-topics-item">
                        <div className="inner-topic">

                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
            </div>

            <div className="essay-right">
                <div className="row">
                    <div className="top-header">
                        <p>Student Description generated from left Common Essay Prompt: Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?
                        </p>
                    </div>
                    <div className="row main-content">
                        <div className="strong-essay">
                            <p>In beiinnd, where I spent my childhood, the night sky was often eclipsed by skyscrapers and bright city lights. When I moved to Palo Alto at the age of 11, I experienced my first clear view of a starry sky. But adjusting to a new country was like navigating through an unfamiliar galaxy. Not only did I have to learn English, but my limited proficiency also landed me in remedial classes for math and science—subjects in which I had always excelled.
                                Placed in a track I knew didn't represent my abilities, I faced a deep-rooted belief: that remedial classes were a measure of intellectual limitations. This labeling gnawed at me, perpetuating the idea that I would never reach the "advanced" level courses that my peers took for granted....(con’t on scroll)
                            </p>
                        </div>
                        <div className="weak-essay">
                            <p>
                                When I moved to California from beijing, I didn't know any English. It was tough, and I had to go to remedial classes even though I was good at science and math. I always thought that being in remedial classes meant that I was not smart and would never be able to catch up with my friends in advanced classes. I was really worried about my future and if I could even go to a good college. But one day, I read a book called "Ender's Game" and it changed how I thought about myself. The book is about a young boy who is really smart but people underestimate him. After reading it, I started believing that I could do better. I talked to my teachers and started studying more to get into better classes. I'm still not in the AP classes like some of my friends, but I get good grades and want to be an engineer. Reading that book made me...(con’t scroll
                            </p>
                        </div>
                    </div>
                    <div className="row platte">
                        <div className="flex-container">
                            <div className="platte-tomato"></div>
                            <div className="platte-orange"></div>
                            <div className="platte-orange"></div>
                            <div className="platte-lightgreen"></div>
                            <div className="platte-mediumseagreen"></div>
                            <div className="platte-violet"></div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <p>
                            This will be a rapid fire example generator. There is an interactive component with the prompt buttons. The sudent will rate the good essays to see what kind of writing style they like - sort of like a buzzfeed quiz
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}