import NavBar from "../components/Navbar";
import { useState } from 'react';
import L2 from '../../public/salamander-logo-black.svg'

interface ProjectOption {
  value: string;
  label: string;
}

const MainPage = () => {
  const [selectedName, setSelectedName] = useState<string>('2880-rosky');
  const [selectedProject, setSelectedProject] = useState<string>('hello-world');

  const nameOptions: ProjectOption[] = [
    { value: '2880-rosky', label: '2880-rosky' },
    { value: 'quantum-leap', label: 'Quantum Leap' },
    { value: 'neon-pulse', label: 'Neon Pulse' },
    { value: 'void-walker', label: 'Void Walker' },
  ];

  const projectOptions: ProjectOption[] = [
    { value: 'hello-world', label: 'hello-world' },
    { value: 'quantum-reactor', label: 'Quantum Reactor' },
    { value: 'neural-network', label: 'Neural Network' },
    { value: 'cosmic-database', label: 'Cosmic Database' },
  ];

  const handleExplore = () => {
    console.log(`Exploring ${selectedProject} for ${selectedName}`);
    // Add your navigation or action logic here
  };

  return (
    <>
      <section className="min-h-screen  bg-black text-white overflow-hidden">
        <NavBar />
        
        {/* DarkVeil Backend Visualization */}
        

        <div className="container mx-auto px-4 py-16 mt-25 relative z-10">
          {/* Header Section */} 
          <div className="text-center mb-16 mx-auto">
           <a href="" className="flex justify-center mb-5"><img src={L2} alt="" srcset="" className='h-30 justify-center flex'/></a>
            

            {/* Divider */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFED00] to-transparent mx-auto mb-12 rounded-full">

            </div>

            {/* Tagline */}
            <div className="mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Build
                </span>{' '}
                <span className="text-4xl">🌟</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
                  Burn
                </span>{' '}
                <span className="text-4xl">🌟</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
                  Evolve
                </span>{' '}
                <span className="text-4xl">🌟</span>
              </h2>
            </div>
          </div>

          {/* Selection Forms */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Name Selection */}
              <div className="group">
                <label htmlFor="name-select" className="block text-lg font-medium mb-3 text-gray-300 group-hover:text-blue-300 transition-colors duration-200">
                  Select name:
                </label>
                <select
                  id="name-select"
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                  className="w-full bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-500 hover:bg-gray-800/90"
                >
                  {nameOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Selection */}
              <div className="group">
                <label htmlFor="project-select" className="block text-lg font-medium mb-3 text-gray-300 group-hover:text-purple-300 transition-colors duration-200">
                  Select project:
                </label>
                <select
                  id="project-select"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-500 hover:bg-gray-800/90"
                >
                  {projectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center">
            <button 
              onClick={handleExplore}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            >
              Check out Salamander //
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default MainPage;