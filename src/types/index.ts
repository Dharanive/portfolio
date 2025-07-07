export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
