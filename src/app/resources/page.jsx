'use client';
import { ResourceCard } from "@/components/cards/ResourceCard";

export default function Resources() {
    // Mock data for your resources. Replace this with your actual data.
    const resourcesData = [
        {
            id: 'dsa-cpp',
            title: 'The COMPLETE DSA Roadmap',
            description: 'A step-by-step guide to master Data Structures & Algorithms, from fundamentals to advanced topics for interview prep.',
            link: '/resources/dsa-cpp',
            thumbnail: '/thumbnails/dsacpp.png',
            initialLikes: 56
        },
        // {
        //     id: 'stay-tuned',
        //     title: 'More Resources Coming Soon!',
        //     description: 'Stay Tuned more resources are under development, uploading soon!!',
        //     link: '/resources',
        //     thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/003/582/701/small/coming-soon-background-illustration-template-design-free-vector.jpg',
        //     initialLikes: 23
        // }
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-white-custom text-4xl md:text-5xl font-extrabold mb-2">
                        Tech <span className="text-yellow-500"> Resources</span>
                    </h1>
                    <p className="text-lg text-gray-400">
                        A collection of guides, tools, and roadmaps to help you on your Tech/ComputerScience journey. ~ By Shubhashish Chakraborty
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resourcesData.map((resource) => (
                        <ResourceCard
                            key={resource.id}
                            id={resource.id}
                            title={resource.title}
                            description={resource.description}
                            link={resource.link}
                            thumbnail={resource.thumbnail}
                            initialLikes={resource.initialLikes}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
