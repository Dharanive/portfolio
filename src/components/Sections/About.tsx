import ProfileCard from '../ProfileCard/ProfileCard'

export default function About() {
  const handleContactClick = () => {
    // Scroll to contact section or handle contact action
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive designs.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg">
                  React
                </span>
                <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg">
                  TypeScript
                </span>
              </div>
            </div>      
            <div className="relative flex justify-center ">
              <ProfileCard
                avatarUrl="./dharanibg.png"
                miniAvatarUrl="./dharani.jpeg"
                name="Dharanivel L"
                title="Full Stack Developer"
                handle="dharani"
                status="Available for work"
                contactText="Contact Me"
                showUserInfo={true}
                enableTilt={true}
                className="max-w-sm"
                onContactClick={handleContactClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
