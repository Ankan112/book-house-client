import React from 'react';

const Blog = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                What are the different ways to manage a state in a React application?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">There are four main types of state you need to properly manage in your React apps. <br />
                                1. Local state <br />
                                2. Global state <br />
                                3. Server state <br />
                                4. URL state
                            </p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                How does prototypical inheritance work?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                What is a unit test? Why should we write unit tests?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. “Unit testing is a great discipline, which can lead to 40% – 80% reductions in bug density.”</p>

                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                React vs. Angular vs. Vue?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                                They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.
                                Each framework is component-based and allows the rapid creation of UI features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;