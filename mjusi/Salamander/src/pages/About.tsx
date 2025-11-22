import React from 'react';
import NavBar from '../components/Navbar';

// Types
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

// Component
const AboutPage: React.FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Educator",
      bio: "Passionate about making open source accessible to everyone. Former open source contributor to major projects.",
      avatar: "👨‍💻"
    },
    {
      name: "Sarah Johnson",
      role: "Community Manager",
      bio: "Dedicated to building inclusive communities and fostering collaborative learning environments.",
      avatar: "👩‍🎓"
    },
    {
      name: "Marcus Rivera",
      role: "Technical Mentor",
      bio: "Senior developer with 10+ years experience in open source contributions and mentorship.",
      avatar: "👨‍🔬"
    }
  ];

  // Features data
  const features: Feature[] = [
    {
      title: "Learn Open Source",
      description: "Step-by-step guides and tutorials to help you understand and contribute to open source projects.",
      icon: "📚"
    },
    {
      title: "Community Support",
      description: "Connect with like-minded individuals and get help from experienced contributors.",
      icon: "🤝"
    },
    {
      title: "Hands-on Projects",
      description: "Practice with real open source projects in a supportive, learning-focused environment.",
      icon: "🔧"
    },
    {
      title: "Mentorship Program",
      description: "Get personalized guidance from experienced open source contributors.",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <NavBar/>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-26">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#FFED00]">Salamander</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A community dedicated to educating and empowering people to contribute to 
            <span className="font-semibold text-[#FFED00]"> open source software</span>
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Salamander, we believe that open source is for everyone. Our mission is to 
                demystify open source contribution and create a welcoming space for learners 
                at all levels.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We provide the resources, guidance, and community support needed to help 
                you make your first (or hundredth) open source contribution with confidence.
              </p>
              <div className="bg-yellow-900 bg-opacity-20 border-l-4 border-[#FFED00] p-4 rounded">
                <p className="text-[#FFED00] font-medium">
                  "Empowering the next generation of open source contributors through 
                  education, community, and hands-on experience."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-[#FFED00] mb-2">500+</div>
                <div className="text-gray-300">Active Members</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-[#FFED00] mb-2">1k+</div>
                <div className="text-gray-300">Contributions</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-[#FFED00] mb-2">50+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-[#FFED00] mb-2">100+</div>
                <div className="text-gray-300">Mentors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 hover:border-[#FFED00] hover:border-opacity-50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-800 transition-colors duration-300 border border-transparent hover:border-[#FFED00] hover:border-opacity-30"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FFED00] font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white border border-[#FFED00] border-opacity-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Open Source Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join our community today and start learning, contributing, and growing with fellow open source enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FFED00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
              Join Community
            </button>
            <button className="border-2 border-[#FFED00] text-[#FFED00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFED00] hover:text-black transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;