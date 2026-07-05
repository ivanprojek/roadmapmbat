# 🎓 RoadMap Learning - Premium Interactive Learning Platform

A beautiful, cozy, and elegant interactive roadmap learning platform for modern IT, Business, and AI career paths. Built with Next.js 15, React, and a premium design system inspired by roadmap.sh, Notion, and Korean aesthetic UI.

## ✨ Features

- **Interactive Roadmap Graph**: Visualize your learning journey with an interactive node-based graph
- **Career Paths**: 10+ comprehensive learning paths including:
  - Prompt Engineer
  - Python Developer for Data & Automation
  - Data Analyst
  - Business Intelligence Analyst
  - AI Engineer
  - Machine Learning Engineer
  - And more...

- **Detailed Learning Resources**: Each milestone includes:
  - Learning resources (courses, articles, videos, books)
  - Practice exercises
  - Mini projects
  - AI-generated study tips
  - Estimated duration

- **Progress Tracking**: Track your progress with beautiful visualizations
- **Dark Mode**: Beautiful dark theme for comfortable learning
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered interactions for delightful UX
- **Modern Design System**: Neumorphism, glassmorphism, and premium aesthetics

## 🎨 Design Aesthetic

- **Theme**: Cozy European-Korean Soft Minimalism
- **Mood**: Calm, elegant, feminine, warm introvert energy
- **Colors**: Warm whites, cream beige, dusty pink, rose accents, sage green
- **Typography**: Playfair Display (headings), Inter (body), Space Grotesk (numbers)

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Visualization**: React Flow
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd roadmap-learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header with navigation
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── RoadmapSelector.tsx  # Roadmap selection view
│   ├── RoadmapViewer.tsx    # Main roadmap viewer
│   ├── RoadmapGraph.tsx     # React Flow graph
│   ├── RoadmapNodeComponent.tsx  # Custom node component
│   ├── NodeDetailPanel.tsx  # Detailed node information
│   └── Providers.tsx        # Theme providers
├── data/
│   └── roadmaps.ts         # Roadmap data structure
├── lib/
│   └── store.ts            # Zustand store
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/
    └── ...                 # Static assets
```

## 🚀 Key Features & Components

### RoadmapSelector
Browse and select from available learning paths with progress indicators and salary information.

### RoadmapGraph
Interactive visualization of the learning journey with:
- Node connections showing prerequisites
- Click-to-expand detailed information
- Zoom and pan controls
- Mini map for navigation

### NodeDetailPanel
Comprehensive information panel featuring:
- Detailed description
- "Why it matters" explanation
- Learning resources with links
- Practice exercises
- Mini projects
- Progress tracking
- AI study tips

### Progress Tracking
Local storage persistence for tracking:
- Completion status (not started, in progress, completed)
- Personal notes
- Completion dates
- Custom progress on each roadmap

## 🎯 Roadmap Paths Included

1. **Prompt Engineer** (8-12 weeks)
   - AI Fundamentals → ChatGPT Basics → Advanced Prompting → LangChain → AI Agents

2. **Python Developer** (12-16 weeks)
   - Fundamentals → Functions & OOP → Data Analysis → Web & APIs → Advanced

3. **Data Analyst** (14-18 weeks)
   - Excel Mastery → SQL → Data Visualization → Statistics & Python → Portfolio

4. **AI Engineer** (16-20 weeks)
   - Python & APIs → LLM Integration → Vector Databases → Agents & Deployment

5. **Machine Learning Engineer** (18-24 weeks)
   - Math Foundations → ML Libraries → Supervised Learning → Deep Learning → MLOps

*(And more paths ready to add!)*

## 🎨 Customization

### Add New Roadmap Path

1. Add data to `src/data/roadmaps.ts`:
```typescript
{
  id: 'your-path-id',
  title: 'Your Career Path',
  description: 'Description here',
  icon: '📚',
  color: '#D4A5A5',
  difficulty: 'beginner',
  totalDuration: '8-12 weeks',
  nodes: [/* your nodes */],
}
```

2. The platform will automatically display it in the selector

### Customize Colors

Edit `tailwind.config.js` color palette:
```javascript
colors: {
  'warm-white': '#FAF9F6',
  'cream-beige': '#F5F1E8',
  'dusty-pink': '#E8D5D1',
  'rose': '#D4A5A5',
  'sage': '#A8C3A6',
  // ... add your colors
}
```

## 🌙 Dark Mode

Built-in dark mode support with:
- Automatic system preference detection
- Manual toggle via theme button
- Persistent preference storage
- Carefully designed color palette for eye comfort

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Smooth gesture support

## ⚡ Performance

- Optimized animations with Framer Motion
- Lazy loading for components
- Zustand for lightweight state management
- CSS-in-JS with Tailwind for minimal bundle
- Next.js Image optimization ready

## 🔒 Local Storage

All user progress is stored locally in the browser with automatic persistence:
- No server required
- Works offline
- Data sync across tabs/windows
- Can be extended with Supabase integration

## 📖 Learning Resources Integration

The platform links to:
- DeepLearning.AI
- OpenAI Documentation
- Coursera
- DataCamp
- FreeCodeCamp
- Udemy
- And more...

## 🎯 Future Enhancements

- [ ] User authentication & cloud sync
- [ ] Spaced repetition system
- [ ] Pomodoro timer integration
- [ ] Community features
- [ ] AI-powered learning recommendations
- [ ] Certificate generation
- [ ] Portfolio showcase
- [ ] Job board integration
- [ ] Salary data dashboard
- [ ] Weekly learning tracker

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new roadmap paths
- Improve the design
- Fix bugs
- Suggest features

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Inspiration

- [roadmap.sh](https://roadmap.sh) - Interactive developer roadmaps
- [Notion](https://notion.so) - Beautiful productivity tools
- Korean UI Design Aesthetics
- Premium SaaS applications

## 💡 Tips for Users

- Start with the roadmap path that aligns with your goals
- Mark nodes as "In Progress" when learning
- Use the notes section to track your learning
- Complete exercises and projects to reinforce learning
- Share your progress with friends
- Visit resources regularly and bookmark your favorites

---

Made with ❤️ for everyone who wants to build a successful remote IT & AI career with calm consistency.

**"Take your time. Small steps matter. You're building your future gently. Progress is still progress."**
