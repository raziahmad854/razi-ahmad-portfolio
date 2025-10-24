export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width Background */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
        {/* Content Container - Constrained Width */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {/* Avatar */}
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RA</span>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Razi Ahmad</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Frontend Engineer
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                Building scalable, high-performance web and mobile applications using{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span>,{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React Native</span>, and{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript</span>
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {['React.js', 'React Native', 'TypeScript', 'GraphQL', 'AI Integration', 'MERN Stack'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="min-w-[200px] px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                  💼 View Projects
                </button>
                <button className="min-w-[200px] px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg font-medium transition-colors">
                  📄 Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Example */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
            Frontend Engineer with 2+ years of experience building scalable applications.
          </p>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}