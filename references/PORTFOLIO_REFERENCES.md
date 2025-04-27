# Portfolio Website References

## Site Structure

### Navigation
- About
- Work
- Contact
- Creative

### Sections
- **About**: Short intro, research interests, current work
- **Work**: Affiliations, projects, skills
- **Contact**: CV, professional profiles (LinkedIn, GitHub, etc.)
- **Creative**: Photography, blog, hobbies

1. **About**
   - Professional summary
   - Research interests
   - Current work

2. **Work**
   - Professional affiliations (like Amlan Kar's style)
   - Publications/Projects
   - Skills & Technologies

3. **Contact**
   - CV (downloadable PDF)
   - Professional Profiles
     ```jsx
     const profiles = [
       {
         platform: 'Google Scholar',
         icon: '/icons/scholar.svg',
         link: 'https://scholar.google.com/...'
       },
       {
         platform: 'LinkedIn',
         icon: '/icons/linkedin.svg',
         link: 'https://linkedin.com/in/...'
       },
       {
         platform: 'GitHub',
         icon: '/icons/github.svg',
         link: 'https://github.com/...'
       }
     ];
     ```

4. **Creative**
   - Photography
   - Blog posts
   - Personal projects
   - Hobbies

### Key Sections & Animations

### 1. Experience Timeline
```jsx
// Vertical timeline with staggered reveal
const ExperienceSection = () => (
  <div className="experience-timeline">
    {experiences.map((exp, index) => (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 }}
        className="timeline-item"
      >
        <div className="company-logo" />
        <div className="content">
          <h3>{exp.role}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.date}</p>
        </div>
      </motion.div>
    ))}
  </div>
);
```

### 2. Section Animations
```css
/* Smooth reveal on scroll */
.section {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s forwards;
  animation-play-state: paused;
}

.section.visible {
  animation-play-state: running;
}

/* Hover effects for cards */
.card {
  transition: 
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Link underline animation */
.animated-link {
  background: 
    linear-gradient(currentColor, currentColor) 
    bottom center no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}

.animated-link:hover {
  background-size: 100% 2px;
}
```

### 3. News/Updates Grid
```jsx
const NewsSection = () => (
  <motion.div 
    className="news-grid"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }}
  >
    {newsItems.map(item => (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {/* News content */}
      </motion.div>
    ))}
  </motion.div>
);
```

### 4. Project Filtering & Transitions
```jsx
// Data Structure
const projects = [
  {
    title: "Project Alpha",
    description: "Machine learning solution for pattern recognition",
    tags: ["Machine Learning & CV", "Software"],
    links: [
      { type: "code", url: "/projects/alpha" },
      { type: "demo", url: "/demo/alpha" }
    ]
  }
];

// Project Section Component
const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  return (
    <motion.div className="projects-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Machine Learning & CV", "Software", "Assembly"].map((filter) => (
          <motion.button
            onClick={() => setActiveFilter(filter)}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div className="projects-grid" layout>
        <AnimatePresence>
          {projects
            .filter(project => 
              activeFilter === "All" ? true : project.tags.includes(activeFilter)
            )
            .map(project => (
              <motion.div
                className="project-card"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
```

Key Features:
- Filter projects by tags
- Smooth transitions using Framer Motion
- Responsive grid layout
- Card-based project display
- Tag-based filtering system
- Mobile-friendly design

### Project Display & Filtering Implementation
The project section is designed to showcase your work in an organized, filterable grid layout. Here's how it works:

1. **Project Organization**:
   - Projects are displayed in cards arranged in a responsive grid
   - Each project has a title, description, and relevant tags (e.g., "Machine Learning", "Software")
   - Cards automatically adjust their layout based on screen size

2. **Filtering System**:
   - Filter buttons at the top let visitors focus on specific types of projects
   - Clicking a tag filters the grid to show only relevant projects
   - Smooth animations make the filtering feel natural and polished

3. **Visual Design**:
   - Cards have subtle shadows and rounded corners for a modern look
   - Tags use a pill-shaped design for easy recognition
   - All colors use CSS variables to support both dark and light themes
   - Spacing is consistent for a professional appearance

Below is the CSS implementation that achieves this design:

```css
/* Main container for all projects */
.projects-container {
  max-width: 1200px;  /* Limit width for readability */
  margin: 0 auto;     /* Center container horizontally */
  padding: 2rem;      /* Add space around content */
}

/* Container for filter buttons at the top */
.filter-buttons {
  display: flex;      /* Arrange buttons horizontally */
  gap: 1rem;         /* Space between buttons */
  margin-bottom: 2rem;
}

/* Individual filter button styling */
.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 20px;  /* Pill-shaped buttons */
  background: var(--bg-secondary);  /* Theme-aware background */
  transition: all 0.3s ease;  /* Smooth hover effects */
}

/* Active state for selected filter */
.filter-btn.active {
  background: var(--accent-color);
  color: white;
}

/* Grid layout for project cards */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  /* Responsive grid */
  gap: 2rem;  /* Space between cards */
}

/* Individual project card styling */
.project-card {
  background: var(--bg-secondary);
  border-radius: 12px;  /* Rounded corners */
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Subtle elevation */
}

/* Container for project tags */
.tags {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

/* Individual tag styling */
.tag {
  background: var(--tag-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;  /* Pill-shaped tags */
  font-size: 0.9rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;  /* Stack cards vertically on mobile */
  }
}
```

## Design References

## Website Inspirations

### 1. Sebastian Santy (sebastinsanty.com)
- **Notable Features**: Minimalist header with monospace font, clean typography
- **Technical Details**:
  ```css
  .header {
    font-family: "SF Mono", Menlo, monospace;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.02em;
  }
  ```

### 2. Amlan Kar (amlankar.github.io)
- **Notable Features**: Professional affiliation layout
- **Implementation**:
  ```jsx
  const Affiliation = ({ 
    logo,
    institution,
    role,
    date,
    link 
  }) => (
    <div className="affiliation-card">
      <img src={logo} alt={institution} />
      <div className="details">
        <h3>{role}</h3>
        <a href={link}>{institution}</a>
        <span>{date}</span>
      </div>
    </div>
  );
  ```
  ```css
  .affiliation-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 1rem 0;
  }
  
  .affiliation-card img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  
  .details {
    display: flex;
    flex-direction: column;
  }
  ```

### 3. Ramneet (ramneet.dev)
- **Notable Features**: 
  - Smooth transition effects between sections
  - Vertical experience timeline with staggered animations
  - Clean layout for experience listings
- **Implementation**:
  ```jsx
  const ExperienceTimeline = () => (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut"
          }}
          className="experience-item"
        >
          <div className="experience-content">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="date">{exp.period}</p>
            <p className="description">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
  ```
  ```css
  .experience-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
  }

  .experience-item {
    position: relative;
    padding-left: 2rem;
    border-left: 2px solid var(--accent-color);
  }

  .experience-content {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .experience-content h3 {
    color: var(--heading-color);
    margin-bottom: 0.5rem;
  }

  .experience-content h4 {
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .date {
    color: var(--muted-color);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .description {
    color: var(--text-color);
    line-height: 1.6;
  }
  ```

## Key Features to Implement
1. **Typography**
   - Clean, readable fonts
   - Responsive scaling
   - Proper hierarchy

2. **Layout**
   - Professional affiliation display
   - Responsive grid system
   - Clear content sections

## Tech Stack
- Framework: [To be decided]
- UI Components: [To be decided]
- Deployment: [To be decided]

## Feature Categories

### 1. Animations & Transitions
- **Desired Effects**:
  - Smooth hover states on navigation
  - Subtle text animations
- **Technical Solutions**:
  - CSS transitions for basic hover effects
  - Framer Motion for more complex animations

### 2. Layout & Design
- **Key Components**:
  - [To be added]
- **Technical Implementation**:
  - [To be added]

### 3. Interactive Elements
- **Features**:
  - [To be added]
- **Technical Stack**:
  - [To be added]

### 4. Performance Requirements
- **Metrics**:
  - [To be added]
- **Implementation Strategy**:
  - [To be added]

### 5. Theme Switching
```jsx
// Theme context and provider
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme toggle button component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </motion.button>
  );
};
```

```css
/* Theme Variables */
:root[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --accent-color: #3182ce;
  --card-bg: #ffffff;
  --card-border: rgba(0, 0, 0, 0.1);
  --tag-bg: #e2e8f0;
  --tag-text: #4a5568;
}

:root[data-theme="dark"] {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --text-primary: #f7fafc;
  --text-secondary: #e2e8f0;
  --accent-color: #63b3ed;
  --card-bg: #2d3748;
  --card-border: rgba(255, 255, 255, 0.1);
  --tag-bg: #4a5568;
  --tag-text: #e2e8f0;
}

/* Theme Toggle Button */
.theme-toggle {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--card-border);
  cursor: pointer;
  z-index: 100;
}

/* Smooth Theme Transition */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

Key Features:
- System preference detection
- Persistent theme storage
- Smooth transitions between themes
- Accessible toggle button
- CSS variables for consistent theming
- Context-based theme management

## Technical Stack Summary

### Frontend
- **Framework**: [To be decided]
- **Libraries**: [To be added]
- **Styling**: [To be added]

### Backend (if needed)
- **Framework**: [To be decided]
- **Database**: [To be decided]

### Deployment
- **Platform**: [To be decided]
- **Requirements**: [To be added]

## Development Phases
1. **Setup Phase**
   - [To be added]

2. **Core Development**
   - [To be added]

3. **Polish & Optimization**
   - [To be added]

## Notes
- Add any additional requirements or considerations here

## Implementation Notes
- Use Framer Motion for smooth animations
- Implement Intersection Observer for scroll triggers
- Keep animations subtle and professional
- Ensure mobile responsiveness
- Add prefers-reduced-motion support

---
*Last Updated: [Date]* 