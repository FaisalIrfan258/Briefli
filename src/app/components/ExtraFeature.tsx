import Image from "next/image";

const features = [
  {
    title: "Get Instant Answers",
    description: "Our tool delivers quick, accurate responses from complex research.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 10V3L4 14H11V21L20 10H13Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Flashcard Summaries",
    description: "Transform lengthy papers into easy-to-digest flashcard summaries.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5H16M8 5V3H16V5M8 5H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Chat with Any Type of Document",
    description: "Simply upload your document, ask questions, seek clarification, or discuss ideas.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function ExtraFeature() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-4 bg-gray-50">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 241, 242, 0.8) 0%, rgba(250, 244, 255, 0.7) 50%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Main heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
        Understand and learn at ease
      </h2>

      {/* Description */}
      <p className="mt-6 text-gray-600 text-center max-w-2xl mx-auto text-lg">
        From asking questions to simplifying topics, we have you covered.
      </p>

     

      {/* App Screenshot */}
      <div className="mt-16 w-full max-w-5xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={`/features.avif`}
            alt="Briefli application interface"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>

       {/* Features Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
