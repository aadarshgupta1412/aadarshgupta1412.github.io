# Portfolio Website References

## Site Structure

### Navigation
```jsx
const navItems = [
  { title: 'About', path: '/about' },
  { title: 'Work', path: '/work' },
  { title: 'Contact', path: '/contact' },
  { title: 'Creative', path: '/creative' }
];
```

### Sections

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