export default function Projects() {
  const projects = [
    {
      title: 'CoinFolio',
      description: 'Crytpo price tracking application using Next.js and CoinGecko API',
      tech: ['TypeScript', 'Next.js', 'Rest API'],
      image: '/chartsdark.jpg',
      github: 'https://github.com/Dharanive/CryptoApp',
      demo: 'https://coinfolio-delta.vercel.app/'
    },
    {
      title: 'NFTopia',
      description: 'A Blockchain based NFT Marketplace Using Next.js , Solidity and Thirdweb',
      tech: ['Next.js', 'TypeScript', 'Solidity'],
      image: '/NFT.jpg',
      github: 'https://github.com/Dharanive/Web3',
      demo: 'https://nftopia-web3.vercel.app/'
    },
    {
      title: 'Vedanta Nico',
      description: 'Responsive website for showcasing Vedanta chemical products with clean UI',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/Vedanta.jpg',
      github: 'https://github.com/Dharanive',
      demo: 'https://vedantanico.in/'
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onLoad={(e) => {
                      console.log('Image loaded successfully:', project.image);
                      // Hide the background gradient when image loads
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.remove('bg-gradient-to-br', 'from-blue-600/20', 'to-purple-600/20', 'flex', 'items-center', 'justify-center');
                      }
                    }}
                    onError={(e) => {
                      console.error('Image failed to load:', project.image);
                      // Keep the gradient background and show placeholder text
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.placeholder-text')) {
                        const placeholder = document.createElement('span');
                        placeholder.className = 'text-white/50 text-center placeholder-text';
                        placeholder.textContent = 'Project Image';
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
