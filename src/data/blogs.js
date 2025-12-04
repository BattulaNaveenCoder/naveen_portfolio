export const blogs = [
  {
  id: 'react-native-vs-dotnet-maui',
  title: 'React Native vs .NET MAUI',
  subtitle: 'A complete comparison of modern cross-platform mobile frameworks',
  date: '2025-04-20',
  tags: ['React Native', '.NET MAUI', 'Cross Platform', 'Mobile Development', 'App Development'],
  excerpt:
    'A detailed comparison between React Native and .NET MAUI covering performance, architecture, ecosystem, learning curve, and real-world use cases.',
  description:
    'This guide compares React Native and .NET MAUI in depth, explaining their core architectures, performance characteristics, developer experience, tooling, ecosystem, and when to choose each framework for cross-platform application development.',
  image:
    'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1600&auto=format&fit=crop',
  content:
    `# React Native vs .NET MAUI

**A complete comparison of modern cross-platform mobile frameworks**

Cross-platform mobile development has become essential for businesses aiming to reach both Android and iOS users efficiently. Two of the most powerful modern frameworks in this space are React Native and .NET MAUI. While both enable single-codebase mobile development, they differ significantly in architecture, language, performance characteristics, and ecosystem.

This guide provides a detailed technical and strategic comparison to help you choose the right framework for your next project.

---

## 1. Overview of React Native

React Native is an open-source framework developed by Facebook (Meta) that enables developers to build native mobile applications using JavaScript and React.

Key characteristics:

- Uses JavaScript or TypeScript
- Renders real native UI components
- Strong web-to-mobile developer transition
- Massive open-source ecosystem
- Mature production adoption

React Native is widely used for consumer-facing mobile applications requiring fast development cycles and rich UI.

---

## 2. Overview of .NET MAUI

.NET MAUI (Multi-platform App UI) is Microsoft’s modern cross-platform framework for building native applications for Android, iOS, macOS, and Windows using C# and .NET.

Key characteristics:

- Uses C# and .NET
- Single project structure
- Strong tooling via Visual Studio
- Native performance
- Enterprise-grade ecosystem
- Deep integration with the Microsoft stack

.NET MAUI is the successor to Xamarin and targets full-stack .NET developers.

---

## 3. Core Architecture Comparison

### React Native Architecture

- JavaScript thread executes business logic
- Native thread renders UI components
- Communication via JSI, Turbo Modules, and Fabric renderer
- Asynchronous communication between layers

### .NET MAUI Architecture

- Direct compilation to native binaries
- Runs on the .NET runtime
- Uses native platform APIs via bindings
- No JavaScript bridge involved

---

## 4. Programming Language and Skill Requirements

| Framework | Primary Language | Developer Background |
|-----------|------------------|------------------------|
React Native | JavaScript / TypeScript | Web & React developers |
.NET MAUI | C# | .NET & enterprise developers |

React Native favors front-end web developers, while .NET MAUI suits enterprise and backend-focused .NET teams.

---

## 5. Performance Comparison

| Aspect | React Native | .NET MAUI |
|--------|---------------|------------|
Rendering | Near-native | Fully native |
Startup Time | Moderate | Fast |
CPU-Intensive Tasks | Moderate | Excellent |
Memory Usage | Higher due to JS runtime | Lower and more predictable |
Animations | Good with native drivers | Excellent with native rendering |

.NET MAUI generally has an edge in raw performance due to direct native execution.

---

## 6. UI Development Approach

### React Native

- Uses JSX syntax
- Styling with JavaScript-based StyleSheet
- Flexbox layout system
- Hot reload for rapid UI iteration

### .NET MAUI

- UI built using XAML or C#
- Strong MVVM architectural pattern
- Native layout controls
- Strong data binding support

React Native emphasizes rapid UI experimentation, while .NET MAUI prioritizes structured enterprise UI design.

---

## 7. Development Tooling

### React Native Tooling

- Node.js ecosystem
- Metro bundler
- Expo framework
- VS Code
- Strong open-source tooling

### .NET MAUI Tooling

- Visual Studio
- Integrated device emulators
- Advanced debugging tools
- Hot Reload for XAML and C#
- Deep profiler integration

.NET MAUI offers more tightly integrated enterprise-grade tooling.

---

## 8. Ecosystem and Community Support

| Factor | React Native | .NET MAUI |
|--------|---------------|------------|
Open-source libraries | Massive ecosystem | Moderate |
Community size | Very large | Growing |
Third-party plugins | Extensive | Limited but expanding |
Long-term stability | Proven | Emerging |

React Native benefits from over a decade of ecosystem maturity, while .NET MAUI continues to rapidly evolve.

---

## 9. Learning Curve

React Native:

- Easy for React web developers
- Rapid learning with JavaScript
- Lighter enterprise concepts

.NET MAUI:

- Steeper learning curve for non-.NET developers
- Requires understanding of MVVM and XAML
- Strong typing and structured patterns

---

## 10. Platform Support

| Framework | Platforms Supported |
|------------|---------------------|
React Native | Android, iOS |
.NET MAUI | Android, iOS, Windows, macOS |

.NET MAUI has broader native desktop support out of the box.

---

## 11. Enterprise Readiness

React Native is well-suited for:

- Startups
- Consumer mobile applications
- Rapid prototyping
- Social and e-commerce apps

.NET MAUI is well-suited for:

- Large enterprise systems
- ERP and CRM applications
- Internal corporate tools
- Microsoft-based infrastructures

---

## 12. Development Cost Comparison

| Cost Factor | React Native | .NET MAUI |
|-------------|---------------|------------|
Developer availability | High | Moderate |
Initial development cost | Lower | Moderate |
Maintenance cost | Moderate | Lower for enterprises |
Infrastructure | Low | Tied to Microsoft ecosystem |

React Native generally achieves lower time-to-market, while .NET MAUI often has lower long-term enterprise maintenance costs.

---

## 13. Security Considerations

React Native:

- Depends on JavaScript runtime security
- Requires careful third-party library vetting
- Secure with proper code practices

.NET MAUI:

- Strong type safety
- Enterprise security policies
- Deep OS-level security integration

.NET MAUI holds a natural advantage in regulated enterprise environments.

---

## 14. When to Choose Each Framework

### Choose React Native if:

- You have an existing React web team
- You need rapid UI development
- You target mobile-first consumer apps
- You need strong open-source library support
- You want fast MVP delivery

### Choose .NET MAUI if:

- You are building enterprise-grade software
- Your team uses C# and .NET
- You need desktop + mobile in a single unified stack
- Performance and security are top priorities
- You are operating in regulated industries

---

## Final Thoughts

Both React Native and .NET MAUI are powerful cross-platform frameworks with distinct strengths. React Native excels in rapid development, ecosystem size, and UI flexibility, making it ideal for consumer-facing mobile applications. .NET MAUI, on the other hand, delivers superior native performance, enterprise-grade tooling, and deep integration with the Microsoft ecosystem.

The right choice ultimately depends on your team’s technical background, long-term scalability requirements, performance demands, and ecosystem preferences. Selecting the correct framework at the beginning of your project can significantly impact development velocity, maintainability, and total cost of ownership.`,
  url: '#'
}

  ,{
  id: 'importance-of-ai-modern-era',
  title: 'Importance of Artificial Intelligence in the Modern Era',
  subtitle: 'How AI is transforming industries, economies, and everyday life',
  date: '2025-04-20',
  tags: ['Artificial Intelligence', 'Technology', 'Future Tech', 'Automation', 'Innovation'],
  excerpt:
    'An in-depth look at the growing importance of Artificial Intelligence in today’s world, exploring its impact across industries, society, and the global economy.',
  description:
    'This guide explores what Artificial Intelligence is, why it matters today, how it is used across industries, its benefits and challenges, and what the future holds for AI-driven technologies.',
  image:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
  content:
    `# Importance of Artificial Intelligence in the Modern Era

**How AI is transforming industries, economies, and everyday life**

Artificial Intelligence (AI) is no longer a futuristic concept—it is a foundational technology driving innovation across nearly every industry. From smartphones and healthcare systems to financial markets and autonomous vehicles, AI has become deeply integrated into modern society.

In this era of rapid digital transformation, understanding the importance of AI is essential for individuals, businesses, and governments alike.

---

## 1. What Is Artificial Intelligence?

Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions.

Key capabilities of AI include:

- Learning from data
- Pattern recognition
- Natural language processing
- Computer vision
- Decision-making and prediction

Major categories of AI:

- **Narrow AI** – Specialized for specific tasks
- **General AI** – Human-level intelligence (still theoretical)
- **Super AI** – Intelligence surpassing humans (future concept)

---

## 2. Why AI Is Important Today

AI is important because it enables systems to perform tasks that traditionally required human intelligence—faster, more accurately, and at massive scale.

Key reasons for AI’s growing importance:

- Explosion of big data
- Increased computing power
- Advanced machine learning algorithms
- Demand for automation and efficiency
- Digital-first economies

AI is now a core driver of competitive advantage in the global market.

---

## 3. Impact of AI Across Major Industries

AI is transforming nearly every sector:

### Healthcare
- Disease diagnosis
- Medical imaging
- Drug discovery
- Personalized treatment

### Finance
- Fraud detection
- Algorithmic trading
- Credit scoring
- Risk management

### Education
- Personalized learning
- Automated grading
- Intelligent tutoring systems

### Manufacturing
- Predictive maintenance
- Robotics and automation
- Quality control

### Retail
- Recommendation systems
- Inventory forecasting
- Customer behavior analysis

---

## 4. AI in Daily Life

AI plays a critical role in everyday activities:

- Voice assistants (Siri, Alexa, Google Assistant)
- Search engines
- Social media feeds
- Navigation and ride-sharing apps
- Smart home devices
- Online shopping recommendations
- Spam and fraud detection

Most people interact with AI dozens of times each day—often without realizing it.

---

## 5. Economic Importance of AI

AI is a major contributor to global economic growth.

Key economic impacts:

- Increased productivity
- Creation of new job roles
- Automation of repetitive tasks
- Cost reduction for businesses
- Growth of AI-driven startups

While AI eliminates some traditional jobs, it also creates demand for new skills and professions in data science, machine learning, robotics, and AI ethics.

---

## 6. AI and Automation

Automation powered by AI is reshaping the workforce.

AI-driven automation enables:

- Faster production cycles
- Reduced human error
- 24/7 operational capacity
- Safer work environments

Industries most affected:

- Manufacturing
- Logistics
- Customer service
- Banking
- Transportation

The focus is shifting from job replacement to **human–AI collaboration**.

---

## 7. Role of AI in Scientific Research

AI accelerates scientific discovery by:

- Analyzing massive datasets
- Simulating complex systems
- Identifying patterns invisible to humans
- Optimizing experiments

Applications include:

- Climate modeling
- Space exploration
- Genomics
- Drug development
- Materials science

AI significantly shortens research timelines and improves accuracy.

---

## 8. AI in National Security and Governance

Governments utilize AI for:

- Cybersecurity
- Surveillance and threat detection
- Public service optimization
- Traffic and city planning
- Disaster prediction and response

AI enables data-driven governance, improving transparency and efficiency in public administration.

---

## 9. Ethical and Social Challenges of AI

Despite its benefits, AI presents serious challenges:

- Job displacement
- Bias in algorithms
- Privacy concerns
- Security risks
- Misinformation and deepfakes
- Lack of transparency in decision-making

Responsible AI development requires:

- Fair data practices
- Strong regulations
- Ethical frameworks
- Human oversight

---

## 10. AI and the Future of Work

AI is redefining job roles rather than eliminating work entirely.

Future workforce trends:

- Rise of hybrid human–AI roles
- Increased demand for digital skills
- Continuous reskilling and upskilling
- Growth of remote and AI-assisted work

Soft skills such as creativity, critical thinking, and emotional intelligence will become even more valuable.

---

## 11. Benefits of Artificial Intelligence

Key advantages of AI include:

- High-speed data processing
- Improved decision accuracy
- Scalability
- Cost efficiency
- Consistent performance
- Enhanced personalization
- 24/7 availability

These benefits make AI indispensable in large-scale digital systems.

---

## 12. Limitations of AI

Despite its power, AI has limitations:

- Requires large volumes of quality data
- High development and maintenance costs
- Lack of true human reasoning
- Dependence on predefined algorithms
- Vulnerability to cyberattacks

AI systems are only as reliable as the data and models behind them.

---

## 13. AI in Developing Economies

AI offers significant opportunities for developing countries:

- Smart agriculture
- Financial inclusion
- Telemedicine
- Digital education
- Smart infrastructure

However, challenges such as limited digital infrastructure, lack of skilled professionals, and regulatory gaps remain significant barriers.

---

## 14. Future Scope of Artificial Intelligence

The future of AI includes:

- Fully autonomous vehicles
- Advanced robotics
- Brain-computer interfaces
- General Artificial Intelligence
- Smart cities
- Precision medicine

AI is expected to become a foundational layer of all digital systems in the next few decades.

---

## Final Thoughts

Artificial Intelligence is one of the most transformative technologies of the modern era. Its importance lies not only in automation and efficiency, but in its ability to reshape how we live, work, learn, and govern.

AI offers immense opportunities for innovation, economic growth, and societal advancement—but it must be developed and deployed responsibly. As AI continues to evolve, those who understand and adapt to it will shape the future of the digital world.`,
  url: '#'
}
    ,
    {
  id: 'react-native-introduction',
  title: 'Introduction to React Native',
  subtitle: 'Build native mobile apps using JavaScript and React',
  date: '2025-04-20',
  tags: ['React Native', 'Mobile Development', 'JavaScript', 'Cross Platform'],
  excerpt:
    'A beginner-friendly introduction to React Native covering its core concepts, setup, architecture, and how it enables cross-platform mobile development with a single codebase.',
  description:
    'This guide introduces React Native, explains how it works under the hood, compares it with native and hybrid approaches, and walks through setting up your development environment and building your first app.',
  image:
    'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1600&auto=format&fit=crop',
  content:
    `# Introduction to React Native

**Build native mobile apps using JavaScript and React**

Mobile application development traditionally required separate codebases for iOS and Android. React Native changes this model by allowing developers to build truly native mobile applications using JavaScript and React—while sharing a single codebase across platforms.

React Native powers many large-scale production applications and has become one of the most widely adopted mobile frameworks in the industry.

---

## 1. What Is React Native?

React Native is an open-source framework developed by Facebook that enables developers to build native mobile apps using JavaScript and React.

Unlike hybrid frameworks that rely on WebViews, React Native renders real native UI components:

- iOS: UIKit components  
- Android: Android View components  

The result is:

- True native performance  
- Native look and feel  
- Shared business logic across platforms  

---

## 2. Why React Native?

React Native solves several major problems in mobile development:

### Key Advantages

- **Single codebase** for iOS and Android
- **Faster development** with hot reloading
- **Native performance**
- **Strong community ecosystem**
- **Reusable React knowledge**
- **Cost-effective development**
- **Large third-party library support**

Companies use React Native to reduce development time while maintaining native user experience.

---

## 3. How React Native Works Internally

React Native uses a bridge-based architecture to communicate between JavaScript code and native code.

### Core Components

- **JavaScript Thread**
  - Executes your React logic
- **Native Thread**
  - Renders UI and handles platform-specific APIs
- **Bridge**
  - Serializes messages between JS and native layers

In modern versions, React Native is moving toward:

- **JSI (JavaScript Interface)**
- **Turbo Modules**
- **Fabric Renderer**

These improvements significantly boost performance.

---

## 4. React Native vs Other Approaches

| Approach | Performance | Code Reuse | UI Quality | Learning Curve |
|----------|-------------|------------|------------|----------------|
Native (Swift/Kotlin) | Highest | None | Best | Steep |
React Native | Near-Native | High | Native | Moderate |
Flutter | High | High | Custom | Moderate |
Hybrid (Ionic/Cordova) | Low | High | Web-like | Easy |

React Native offers the best balance between performance and developer productivity.

---

## 5. Prerequisites to Learn React Native

Before starting with React Native, you should be comfortable with:

- JavaScript (ES6+)
- React fundamentals (components, props, state, hooks)
- Basic understanding of mobile UI concepts

Optional but helpful:

- Android Studio basics
- Xcode basics (macOS only)

---

## 6. Setting Up the Development Environment

### Step 1: Install Node.js
Download and install the latest LTS version of Node.js.

### Step 2: Install React Native CLI
\`\`\`bash
npm install -g react-native-cli
\`\`\`

### Step 3: Install Platform Tools
- **Android:** Android Studio + Emulator
- **iOS (macOS only):** Xcode

### Step 4: Create a New Project
\`\`\`bash
npx react-native init MyFirstApp
cd MyFirstApp
npx react-native run-android
npx react-native run-ios
\`\`\`

At this point, your first React Native app is running.

---

## 7. Basic Project Structure

\`\`\`text
MyFirstApp/
  android/
  ios/
  node_modules/
  App.js
  package.json
  index.js
\`\`\`

### Key Files

- **App.js** → Root component
- **index.js** → Entry point
- **android/** → Android native project
- **ios/** → iOS native project

---

## 8. First React Native Component

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
\`\`\`

This code creates a simple native screen using built-in components.

---

## 9. Core Building Blocks

React Native provides native UI elements out of the box:

- **View** → Container (like div)
- **Text** → Display text
- **Image** → Display images
- **ScrollView** → Scrollable container
- **FlatList** → High-performance lists
- **TextInput** → User input

All components are styled using JavaScript, not CSS files.

---

## 10. Styling in React Native

React Native uses a JavaScript-based styling system similar to CSS Flexbox.

\`\`\`js
const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
  },
});
\`\`\`

Key differences from CSS:

- No cascading
- No global styles
- Uses Flexbox by default

---

## 11. State Management

React Native uses React’s state system:

- useState
- useEffect
- useContext

For large apps:

- Redux
- Zustand
- Recoil

State drives UI rendering exactly like in web React.

---

## 12. Accessing Native Features

React Native gives access to:

- Camera
- GPS
- File system
- Sensors
- Bluetooth
- Push notifications

Via:

- Built-in APIs
- Third-party native modules
- Custom native modules (Swift, Java, Kotlin)

---

## 13. Performance Considerations

To build high-performance apps:

- Avoid unnecessary re-renders
- Use FlatList for large lists
- Optimize images
- Memoize heavy components
- Move complex animations to native drivers

React Native now supports the **Hermes engine** for faster startup and lower memory usage.

---

## 14. When to Use React Native

React Native is ideal when:

- You need both iOS and Android apps
- You have web React developers
- Time-to-market is critical
- Budget is constrained
- App has moderate to high UI complexity

Not ideal when:

- Heavy 3D graphics
- Very low-level hardware access
- Game engines are required

---

## Final Thoughts

React Native is a production-proven framework that allows teams to build scalable, maintainable, and high-performance mobile applications using a single JavaScript codebase.

It combines:

- The developer experience of React
- The performance of native apps
- The speed of modern JavaScript tooling

For teams targeting both iOS and Android with limited resources, React Native remains one of the most effective technology choices available today.`,
  url: '#'
}

    ,
  {
    id: 'react-performance-patterns',
    title: 'React Performance Patterns in Real Projects',
    subtitle: 'Practical ways to keep UIs snappy at scale',
    date: '2025-06-01',
    tags: ['React', 'Performance', 'Best Practices'],
    excerpt:
      'From memoization to virtualization, here are practical patterns that keep React apps fast as they scale.',
    description:
      'Performance in React often comes down to rendering less and doing it smarter. In this post we cover memoization strategies, list virtualization, avoiding expensive re-renders with stable dependencies, and measuring what actually matters in production.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    content:
      `# React Performance Patterns in Real Projects\n\n**Practical ways to keep UIs snappy at scale**\n\nPerformance in React rarely fails because of React itself—it fails because of how applications grow. As features accumulate, teams introduce unnecessary re-renders, expensive computations, oversized bundles, and unmeasured bottlenecks. The result is familiar: sluggish interfaces, delayed interactions, and frustrated users.\n\nIn real-world production systems, React performance comes down to rendering less and doing it smarter. This article covers proven patterns used in large-scale React applications, including memoization strategies, list virtualization, render stability, and performance measurement that actually reflects user experience.\n\n## 1. Understand What Actually Hurts Performance\n\nBefore optimizing anything, it is critical to understand where performance is truly being lost. In production systems, the most common causes are:\n\n- Unnecessary component re-renders\n- Expensive computations executed during render\n- Large, unvirtualized lists\n- Over-fetching or poorly managed state\n- Bloated JavaScript bundles\n- Inefficient third-party components\n\n> Blind optimization often adds complexity without measurable gains. Always measure before fixing.\n\n### Tools You Should Use\n\n- React DevTools Profiler\n- Chrome Performance Panel\n- Web Vitals (LCP, INP, CLS)\n- Production error and performance monitoring (e.g., tracing tools)\n\n## 2. Memoization: Use It Surgically, Not Everywhere\n\n### React.memo for Component Stability\nUse React.memo when:\n\n- A component renders frequently\n- Its props change rarely\n- It is relatively expensive to render\n\n\`\`\`jsx\nconst UserRow = React.memo(function UserRow({ user }) {\n  return <div>{user.name}</div>;\n});\n\`\`\`\n\nAvoid memoizing trivial components. Memoization itself has a cost.\n\n### useMemo for Expensive Calculations\nOnly memoize computations that are:\n\n- CPU expensive\n- Recalculated frequently\n- Based on stable dependencies\n\n\`\`\`jsx\nconst sortedUsers = useMemo(() => {\n  return users.sort((a, b) => a.name.localeCompare(b.name));\n}, [users]);\n\`\`\`\n\nDo not use useMemo simply to “be safe.” It is a performance tool, not a coding standard.\n\n### useCallback for Stable Function References\nuseCallback is essential when:\n\n- Passing handlers into memoized child components\n- Preventing unnecessary effect re-runs\n\n\`\`\`jsx\nconst handleSubmit = useCallback(() => {\n  saveForm(data);\n}, [data]);\n\`\`\`\n\nWithout this, even memoized children will re-render because function references change on every render.\n\n## 3. Avoiding Expensive Re-Renders with Stable Dependencies\n\nA large percentage of React performance issues come from unstable references, especially inline objects, arrays, and anonymous functions created on every render.\n\nBad Pattern:\n\n\`\`\`jsx\n<Component options={{ limit: 10 }} />\n\`\`\`\n\nCorrect Pattern:\n\n\`\`\`jsx\nconst options = useMemo(() => ({ limit: 10 }), []);\n<Component options={options} />\n\`\`\`\n\n## 4. List Virtualization: Mandatory at Scale\n\nWhen You Must Virtualize:\n\n- Tables with more than ~100 rows\n- Activity feeds\n- Chat applications\n- Large dashboards\n\nCommon benefits:\n\n- Dramatic reduction in DOM nodes\n- Faster initial load\n- Smoother scrolling\n- Lower memory usage\n\n## 5. State Management: Keep State as Close as Possible\n\nKey Principles:\n\n- Do not lift state higher than required\n- Avoid global state for purely local UI concerns\n- Split large state objects into smaller independent slices\n- Normalize large datasets\n\n## 6. Code Splitting and Lazy Loading\n\nUse Dynamic Imports for:\n\n- Admin panels\n- Heavy charts\n- Multi-step flows\n- Rarely used features\n\n\`\`\`jsx\nconst AdminPanel = lazy(() => import("./AdminPanel"));\n\`\`\`\n\nWrap with Suspense:\n\n\`\`\`jsx\n<Suspense fallback={<Loader />}>\n  <AdminPanel />\n</Suspense>\n\`\`\`\n\n## 7. Preventing Cascade Re-Renders in Large Component Trees\n\nStrategies:\n\n- Use multiple smaller contexts instead of one large context\n- Memoize layout components\n- Avoid passing unstable props through layout layers\n- Use state selectors instead of full state objects\n\n## 8. Measuring What Actually Matters in Production\n\nMetrics That Matter:\n\n- Largest Contentful Paint (LCP)\n- Interaction to Next Paint (INP)\n- Total Blocking Time (TBT)\n- JavaScript execution time\n- Hydration time (for SSR apps)\n\nUse:\n\n- Real User Monitoring (RUM)\n- Synthetic load testing\n- Performance budgets in CI/CD\n\n## 9. Third-Party Dependencies: The Silent Performance Killers\n\nBest Practices:\n\n- Audit bundle size frequently\n- Prefer small focused libraries over large frameworks\n- Avoid utility libraries when native APIs suffice\n- Tree-shake aggressively\n\n## 10. Server Rendering and Streaming for Perceived Performance\n\nFor content-heavy or SEO-driven applications:\n\n- Server-side rendering (SSR)\n- Streaming rendering\n- Partial hydration\n\n## 11. A Practical Optimization Checklist\n\nEnsure:\n\n- No unnecessary component re-renders\n- Stable props and dependencies\n- Large lists are virtualized\n- Global state is minimized\n- Critical routes are code-split\n- Expensive calculations are memoized\n- Bundle size is under control\n- Production metrics are monitored\n\n## Final Thoughts\n\nReact performance is not about clever tricks or micro-optimizations. It is the cumulative result of disciplined architectural choices, measured trade-offs, and a deep understanding of how rendering actually works in production.\n\n**Render less. Stabilize what must re-render. Measure what matters.**`,
    url: '#'
  },
  {
    id: 'dotnet-maui-state',
    title: 'Managing State in .NET MAUI Apps',
    subtitle: 'MVVM patterns and lightweight stores',
    date: '2025-05-20',
    tags: ['.NET MAUI', 'State', 'MVVM'],
    excerpt:
      'Explore MVVM, ICommand, and lightweight stores to build responsive and maintainable mobile apps.',
    description:
      'A guided tour of MVVM in .NET MAUI with examples for ViewModel lifecycles, navigation-safe state, and using simple stores to share state across pages without overcomplicating your architecture.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    content:
      `# Managing State in .NET MAUI Apps\n\n**A Step-by-Step MVVM Tutorial with Code Examples**\n\nIn this tutorial we will build a small .NET MAUI app that manages a list of tasks (to-dos) and use it to illustrate how to manage state correctly.\n\n## Overview\n\n- Set up MVVM in a MAUI project\n- Model local page state in a ViewModel\n- Manage ViewModel lifetime with DI\n- Implement navigation-safe state\n- Add a lightweight shared state store\n- Persist important state across app restarts\n- Handle concurrency safely in ViewModels\n- Write tests against your state\n\n## Step 0 – Project Setup\n\nInstall the Community Toolkit MVVM package:\n\n\n\`\`\`powershell\n dotnet add package CommunityToolkit.Mvvm\n\`\`\`\n\nUpdate \`MauiProgram.cs\` to register your services and ViewModels via DI:\n\n\n\`\`\`csharp\nusing CommunityToolkit.Mvvm;\nusing Microsoft.Extensions.Logging;\n\nnamespace MauiStateDemo;\n\npublic static class MauiProgram\n{\n    public static MauiApp CreateMauiApp()\n    {\n        var builder = MauiApp.CreateBuilder();\n        builder\n            .UseMauiApp<App>()\n            .ConfigureFonts(fonts =>\n            {\n                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");\n            });\n\n        // Stores (shared state)\n        builder.Services.AddSingleton<TodoStore>();\n\n        // ViewModels\n        builder.Services.AddTransient<TodoListViewModel>();\n        builder.Services.AddTransient<TodoDetailViewModel>();\n\n        // Views\n        builder.Services.AddTransient<TodoListPage>();\n        builder.Services.AddTransient<TodoDetailPage>();\n\n#if DEBUG\n        builder.Logging.AddDebug();\n#endif\n\n        return builder.Build();\n    }\n}\n\n// Lifetimes: TodoStore = Singleton; ViewModels = Transient\n\n\`\`\`\n\n## Step 1 – Define the Model (Domain State)\n\nCreate a simple model representing a To-Do item.\n\n\n\`\`\`csharp\nnamespace MauiStateDemo.Models;\n\npublic class TodoItem\n{\n    public Guid Id { get; set; } = Guid.NewGuid();\n    public string Title { get; set; } = string.Empty;\n    public string? Notes { get; set; }\n    public bool IsCompleted { get; set; }\n    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;\n}\n\n\`\`\`\n\nThis is domain state, independent from the UI.\n\n## Step 2 – Local ViewModel State (per Page)\n\nHere we build \`TodoListViewModel\`, which owns local page state such as the currently loaded list and UI flags like \`IsBusy\`.\n\n\n\`\`\`csharp\nusing System.Collections.ObjectModel;\nusing CommunityToolkit.Mvvm.ComponentModel;\nusing CommunityToolkit.Mvvm.Input;\nusing MauiStateDemo.Models;\n\nnamespace MauiStateDemo.ViewModels;\n\npublic partial class TodoListViewModel : ObservableObject\n{\n    private readonly TodoStore _store;\n\n    public ObservableCollection<TodoItem> Items => _store.Items;\n\n    [ObservableProperty]\n    private bool _isBusy;\n\n    [ObservableProperty]\n    private string _searchText = string.Empty;\n\n    public TodoListViewModel(TodoStore store)\n    {\n        _store = store;\n    }\n\n    [RelayCommand]\n    private async Task LoadAsync()\n    {\n        if (IsBusy)\n            return;\n\n        try\n        {\n            IsBusy = true;\n            await _store.LoadAsync(); // e.g., from disk or API\n        }\n        finally\n        {\n            IsBusy = false;\n        }\n    }\n\n    [RelayCommand]\n    private async Task AddNewAsync()\n    {\n        // Navigate to detail page without ID (new item)\n        await Shell.Current.GoToAsync("todoDetail");\n    }\n\n    [RelayCommand]\n    private async Task OpenAsync(TodoItem item)\n    {\n        var route = $"todoDetail?id={item.Id}";\n        await Shell.Current.GoToAsync(route);\n    }\n}\n\n\`\`\`\n\nPattern illustrated:\n\n- Local ViewModel state (\`IsBusy\`, \`SearchText\`) lives only as long as the page does.\n- All mutations go through commands, not code-behind.\n\n## Step 3 – Bind View to ViewModel (Basic MVVM)\n\n\`TodoListPage.xaml\`:\n\n\n\`\`\`xml\n<ContentPage\n    x:Class="MauiStateDemo.Views.TodoListPage"\n    xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n    xmlns:vm="clr-namespace:MauiStateDemo.ViewModels"\n    Title="My Tasks">\n\n    <VerticalStackLayout Padding="16" Spacing="12">\n\n        <SearchBar\n            Placeholder="Search…"\n            Text="{Binding SearchText}" />\n\n        <CollectionView\n            ItemsSource="{Binding Items}"\n            SelectionMode="None">\n\n            <CollectionView.ItemTemplate>\n                <DataTemplate>\n                    <Grid Padding="8">\n                        <Grid.ColumnDefinitions>\n                            <ColumnDefinition Width="*" />\n                            <ColumnDefinition Width="Auto" />\n                        </Grid.ColumnDefinitions>\n\n                        <Label\n                            Text="{Binding Title}"\n                            VerticalOptions="Center" />\n\n                        <Button\n                            Grid.Column="1"\n                            Text="Open"\n                            Command="{Binding Source={RelativeSource AncestorType={x:Type vm:TodoListViewModel}}, Path=OpenCommand}"\n                            CommandParameter="{Binding .}" />\n                    </Grid>\n                </DataTemplate>\n            </CollectionView.ItemTemplate>\n\n        </CollectionView>\n\n        <Button\n            Text="Add Task"\n            Command="{Binding AddNewCommand}" />\n\n    </VerticalStackLayout>\n</ContentPage>\n\n\`\`\`\n\n\`TodoListPage.xaml.cs\` to resolve the ViewModel from DI:\n\n\n\`\`\`csharp\npublic partial class TodoListPage : ContentPage\n{\n    private readonly TodoListViewModel _vm;\n\n    public TodoListPage(TodoListViewModel vm)\n    {\n        InitializeComponent();\n        BindingContext = _vm = vm;\n    }\n\n    protected override async void OnAppearing()\n    {\n        base.OnAppearing();\n        await _vm.LoadAsync();\n    }\n}\n\n\`\`\`\n\nPattern illustrated:\n\n- The View knows only about the ViewModel, not about services or stores.\n- State is initialized in \`OnAppearing\`, not constructor, accommodating navigation and resume.\n\n## Step 4 – Lightweight Shared State Store\n\nIntroduce \`TodoStore\`, a lightweight shared state container used by multiple ViewModels.\n\n\n\`\`\`csharp\nusing System.Collections.ObjectModel;\nusing MauiStateDemo.Models;\n\nnamespace MauiStateDemo;\n\npublic class TodoStore\n{\n    public ObservableCollection<TodoItem> Items { get; } = new();\n\n    public async Task LoadAsync()\n    {\n        if (Items.Any())\n            return;\n\n        // Simulate load\n        await Task.Delay(200);\n\n        Items.Add(new TodoItem { Title = "Buy milk" });\n        Items.Add(new TodoItem { Title = "Call customer" });\n        Items.Add(new TodoItem { Title = "Review PRs" });\n    }\n\n    public TodoItem? GetById(Guid id) =>\n        Items.FirstOrDefault(x => x.Id == id);\n\n    public void AddOrUpdate(TodoItem item)\n    {\n        var existing = GetById(item.Id);\n        if (existing is null)\n        {\n            Items.Add(item);\n            return;\n        }\n\n        existing.Title = item.Title;\n        existing.Notes = item.Notes;\n        existing.IsCompleted = item.IsCompleted;\n    }\n\n    public void Delete(Guid id)\n    {\n        var existing = GetById(id);\n        if (existing is not null)\n        {\n            Items.Remove(existing);\n        }\n    }\n}\n\n\`\`\`\n\nPattern illustrated:\n\n- Shared state (the list of to-dos) lives in a store, not in a single ViewModel or static class.\n- Store is a singleton → the same list is visible to all pages.\n\n## Step 5 – Navigation-Safe State (Detail Page)\n\n\`TodoDetailViewModel\` demonstrates navigation-safe state: it loads the correct item based on a navigation parameter and can create a new one if no ID is passed.\n\n\n\`\`\`csharp\nusing CommunityToolkit.Mvvm.ComponentModel;\nusing CommunityToolkit.Mvvm.Input;\nusing MauiStateDemo.Models;\n\nnamespace MauiStateDemo.ViewModels;\n\n[QueryProperty(nameof(ItemId), "id")]\npublic partial class TodoDetailViewModel : ObservableObject\n{\n    private readonly TodoStore _store;\n\n    [ObservableProperty]\n    private Guid? _itemId;\n\n    [ObservableProperty]\n    private string _title = string.Empty;\n\n    [ObservableProperty]\n    private string? _notes;\n\n    [ObservableProperty]\n    private bool _isCompleted;\n\n    [ObservableProperty]\n    private bool _isDirty;\n\n    public TodoDetailViewModel(TodoStore store)\n    {\n        _store = store;\n    }\n\n    partial void OnItemIdChanged(Guid? value)\n    {\n        LoadFromStore(value);\n    }\n\n    private void LoadFromStore(Guid? id)\n    {\n        if (id is null)\n        {\n            // new item – leave defaults\n            return;\n        }\n\n        var item = _store.GetById(id.Value);\n        if (item is null) return;\n\n        Title = item.Title;\n        Notes = item.Notes;\n        IsCompleted = item.IsCompleted;\n        IsDirty = false;\n    }\n\n    partial void OnTitleChanged(string value) => IsDirty = true;\n    partial void OnNotesChanged(string? value) => IsDirty = true;\n    partial void OnIsCompletedChanged(bool value) => IsDirty = true;\n\n    [RelayCommand]\n    private async Task SaveAsync()\n    {\n        var item = ItemId is { } id\n            ? _store.GetById(id) ?? new TodoItem { Id = id }\n            : new TodoItem();\n\n        item.Title = Title;\n        item.Notes = Notes;\n        item.IsCompleted = IsCompleted;\n\n        _store.AddOrUpdate(item);\n        ItemId ??= item.Id;\n        IsDirty = false;\n\n        await Shell.Current.GoToAsync(".."); // go back\n    }\n\n    [RelayCommand]\n    private async Task DeleteAsync()\n    {\n        if (ItemId is not { } id)\n            return;\n\n        _store.Delete(id);\n        await Shell.Current.GoToAsync("..");\n    }\n}\n\n\`\`\`\n\nBindings for \`TodoDetailPage.xaml\` are straightforward (omitted for brevity).\n\n## Step 6 – Persisted vs Ephemeral State\n\nDecide which parts of state should survive app restarts. Preferences for simple values, SecureStorage for sensitive ones.\n\n\n\`\`\`csharp\npublic static class Settings\n{\n    private const string FilterKey = "todo_filter";\n\n    public static string LastFilter\n    {\n        get => Preferences.Get(FilterKey, string.Empty);\n        set => Preferences.Set(FilterKey, value);\n    }\n}\n\n// In ViewModel\npartial void OnSearchTextChanged(string value)\n{\n    Settings.LastFilter = value;\n}\n\npublic TodoListViewModel(TodoStore store)\n{\n    _store = store;\n    SearchText = Settings.LastFilter;\n}\n\n// SecureStorage example\npublic class AuthStore\n{\n    private const string TokenKey = "auth_token";\n\n    public string? Token { get; private set; }\n\n    public async Task LoadAsync()\n    {\n        Token = await SecureStorage.GetAsync(TokenKey);\n    }\n\n    public async Task SaveAsync(string token)\n    {\n        Token = token;\n        await SecureStorage.SetAsync(TokenKey, token);\n    }\n\n    public async Task ClearAsync()\n    {\n        Token = null;\n        SecureStorage.Remove(TokenKey);\n    }\n}\n\n\`\`\`\n\n## Step 7 – Concurrency and Safe Commands\n\nPrevent double-taps and race conditions with \`IsBusy\` and cancellation tokens.\n\n\n\`\`\`csharp\n[RelayCommand]\nprivate async Task RefreshAsync()\n{\n    if (IsBusy)\n        return;\n\n    try\n    {\n        IsBusy = true;\n\n        using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));\n        await _store.RefreshFromServerAsync(cts.Token);\n    }\n    catch (OperationCanceledException)\n    {\n        // handle timeout\n    }\n    finally\n    {\n        IsBusy = false;\n    }\n}\n\n\`\`\`\n\nBind to a \`RefreshView\` in XAML to enable pull-to-refresh.\n\n## Step 8 – Unit Testing Your State\n\nBecause all state lives in ViewModels and stores (not UI), you can test it without MAUI itself.\n\n\n\`\`\`csharp\nusing MauiStateDemo;\nusing MauiStateDemo.ViewModels;\nusing Xunit;\n\npublic class TodoListViewModelTests\n{\n    [Fact]\n    public async Task Add_Item_Updates_Store()\n    {\n        var store = new TodoStore();\n        var vm = new TodoListViewModel(store);\n\n        await vm.LoadAsync();\n        var initialCount = store.Items.Count;\n\n        store.AddOrUpdate(new Models.TodoItem { Title = "Test item" });\n\n        Assert.Equal(initialCount + 1, store.Items.Count);\n    }\n}\n\n[Fact]\npublic async Task Save_New_Item_Adds_To_Store()\n{\n    var store = new TodoStore();\n    var vm = new TodoDetailViewModel(store);\n\n    vm.Title = "Unit test item";\n    vm.Notes = "Notes";\n    vm.IsCompleted = false;\n\n    await vm.SaveCommand.ExecuteAsync(null);\n\n    Assert.Single(store.Items);\n    Assert.Equal("Unit test item", store.Items[0].Title);\n}\n\n\`\`\`\n\n## Conclusion\n\nThis setup is enough to handle state cleanly and predictably in most .NET MAUI applications without heavy frameworks.\n\n- MVVM + DI for clean boundaries\n- ViewModels own local UI state\n- Stores share app-wide state\n- Preferences/SecureStorage persist the right pieces\n- Async commands protect state transitions\n- Tests validate state changes directly\n`,
    url: '#'
  },
  {
    id: 'aspnet-clean-apis',
    title: 'Clean Architecture for ASP.NET Core APIs',
    subtitle: 'Maintainable layers without overengineering',
    date: '2025-04-15',
    tags: ['ASP.NET Core', 'Architecture', 'Clean Code'],
    excerpt:
      'A pragmatic look at layering, DTOs, and validation that keeps APIs robust without overengineering.',
    description:
      'We walk through a clean architecture approach to building ASP.NET Core APIs: separating concerns, mapping DTOs, enforcing validation at the edges, and structuring use cases to keep changes localized.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    content:
      `# Clean Architecture for ASP.NET Core APIs\n\n**Maintainable layers without overengineering**\n\nModern API systems fail more often from complexity than from scale. Teams adopt “Clean Architecture” with good intentions—but often end up with bloated abstractions, excessive mapping, and rigid designs that slow delivery.\n\nThis tutorial demonstrates a practical, production-grade Clean Architecture implementation using ASP.NET Core that:\n\n- Separates concerns correctly\n- Keeps dependencies flowing inward\n- Avoids unnecessary layers\n- Preserves testability\n- Scales with real business requirements\n\nYou will build a complete API slice using:\n\n- Use cases instead of anemic services\n- DTO mapping at the edges\n- Validation at the boundaries\n- Repository abstractions only where they add value\n\n## 1. Core Clean Architecture Principles (Without Dogma)\n\nWe apply only the rules that create measurable engineering value:\n\n- Business logic must not depend on infrastructure\n- Frameworks are tools, not the system\n- Dependencies flow inward\n- Validation happens at the edges\n- Use cases express business intent\n- DTOs never leak into the domain\n\nWe do not:\n\n- Create interfaces “just in case”\n- Add a CQRS framework unless justified\n- Duplicate models for no reason\n- Over-abstract data access prematurely\n\n## 2. Minimal Folder Structure (Production-Ready)\n\n\`\`\`text\n/src\n  /Api\n  /Application\n  /Domain\n  /Infrastructure\n\`\`\`\n\n### Responsibilities\n\nLayer | Responsibility\n----- | -------------\nDomain | Business rules, entities\nApplication | Use cases, DTOs, validation\nInfrastructure | EF Core, external services\nApi | HTTP endpoints, filters, DI\n\n## 3. Domain Layer (Pure Business Model)\n\nThe Domain contains no ASP.NET, no EF Core, no DTOs.\n\n\`\`\`csharp\nnamespace MyApp.Domain.Customers;\n\npublic sealed class Customer\n{\n    public Guid Id { get; private set; } = Guid.NewGuid();\n    public string Email { get; private set; }\n    public string Name { get; private set; }\n\n    private Customer() { }\n\n    public Customer(string email, string name)\n    {\n        if (string.IsNullOrWhiteSpace(email))\n            throw new DomainException("Email is required.");\n\n        Email = email;\n        Name = name;\n    }\n\n    public void UpdateName(string name)\n    {\n        if (string.IsNullOrWhiteSpace(name))\n            throw new DomainException("Name is required.");\n\n        Name = name;\n    }\n}\n\n\`\`\`\n\nKey rules:\n\n- Domain enforces its own invariants\n- No dependency on ASP.NET, EF, or serialization\n- Business logic resides here—not in controllers\n\n## 4. Application Layer (Use Cases + DTOs)\n\nThe Application layer coordinates business intent.\n\n### Request DTO (Input Boundary)\n\`\`\`csharp\nnamespace MyApp.Application.Customers.Create;\n\npublic sealed record CreateCustomerRequest(\n    string Email,\n    string Name\n);\n\n\`\`\`\n\n### Response DTO (Output Boundary)\n\`\`\`csharp\npublic sealed record CreateCustomerResponse(\n    Guid Id,\n    string Email,\n    string Name\n);\n\n\`\`\`\n\n## 5. Repository Abstraction (Only When Needed)\n\`\`\`csharp\npublic interface ICustomerRepository\n{\n    Task AddAsync(Customer customer, CancellationToken ct);\n    Task<Customer?> GetByEmailAsync(string email, CancellationToken ct);\n}\n\n\`\`\`\n\nThis abstraction exists only because persistence is external to the business.\n\n## 6. The Use Case (Business Workflow)\n\nThis is the heart of Clean Architecture: a single, focused business operation.\n\n\`\`\`csharp\npublic sealed class CreateCustomerUseCase\n{\n    private readonly ICustomerRepository _repository;\n\n    public CreateCustomerUseCase(ICustomerRepository repository)\n    {\n        _repository = repository;\n    }\n\n    public async Task<CreateCustomerResponse> ExecuteAsync(\n        CreateCustomerRequest request,\n        CancellationToken ct)\n    {\n        var existing = await _repository.GetByEmailAsync(request.Email, ct);\n        if (existing != null)\n            throw new ApplicationException("Customer already exists.");\n\n        var customer = new Customer(\n            request.Email,\n            request.Name);\n\n        await _repository.AddAsync(customer, ct);\n\n        return new CreateCustomerResponse(\n            customer.Id,\n            customer.Email,\n            customer.Name);\n    }\n}\n\n\`\`\`\n\nNotice:\n\n- No HTTP concerns\n- No JSON\n- No database details\n- Pure business orchestration\n\n## 7. Input Validation at the Edge\n\nValidation belongs before the use case is invoked.\n\n\`\`\`csharp\npublic sealed class CreateCustomerValidator\n{\n    public void Validate(CreateCustomerRequest request)\n    {\n        if (string.IsNullOrWhiteSpace(request.Email))\n            throw new ValidationException("Email is required.");\n\n        if (!request.Email.Contains("@"))\n            throw new ValidationException("Invalid email.");\n\n        if (string.IsNullOrWhiteSpace(request.Name))\n            throw new ValidationException("Name is required.");\n    }\n}\n\n\`\`\`\n\nThis keeps:\n\n- The use case clean\n- Business rules separate from data validation\n- Validation logic reusable across transports\n\n## 8. Infrastructure Layer (EF Core Implementation)\n\`\`\`csharp\npublic sealed class CustomerRepository : ICustomerRepository\n{\n    private readonly AppDbContext _db;\n\n    public CustomerRepository(AppDbContext db)\n    {\n        _db = db;\n    }\n\n    public async Task AddAsync(Customer customer, CancellationToken ct)\n    {\n        _db.Customers.Add(customer);\n        await _db.SaveChangesAsync(ct);\n    }\n\n    public async Task<Customer?> GetByEmailAsync(string email, CancellationToken ct)\n    {\n        return await _db.Customers\n            .AsNoTracking()\n            .FirstOrDefaultAsync(x => x.Email == email, ct);\n    }\n}\n\n\`\`\`\n\nInfrastructure depends on:\n\n- Application interfaces\n- Domain entities\n\nNever the reverse.\n\n## 9. API Layer (Controllers = Thin Transport Adapters)\n\nYour API becomes a simple orchestration shell.\n\n\`\`\`csharp\n[ApiController]\n[Route("api/customers")]\npublic sealed class CustomersController : ControllerBase\n{\n    private readonly CreateCustomerUseCase _useCase;\n    private readonly CreateCustomerValidator _validator;\n\n    public CustomersController(\n        CreateCustomerUseCase useCase,\n        CreateCustomerValidator validator)\n    {\n        _useCase = useCase;\n        _validator = validator;\n    }\n\n    [HttpPost]\n    public async Task<IActionResult> CreateAsync(\n        [FromBody] CreateCustomerRequest request,\n        CancellationToken ct)\n    {\n        _validator.Validate(request);\n\n        var result = await _useCase.ExecuteAsync(request, ct);\n\n        return CreatedAtAction(\n            nameof(GetByIdAsync),\n            new { id = result.Id },\n            result);\n    }\n\n    [HttpGet("{id:guid}")]\n    public IActionResult GetByIdAsync(Guid id)\n    {\n        return Ok();\n    }\n}\n\n\`\`\`\n\nControllers now:\n\n- Perform validation\n- Invoke use cases\n- Return transport-specific results\n- Contain no business logic\n\n## 10. Dependency Injection Wiring\n\nIn \`Program.cs\`:\n\n\`\`\`csharp\nbuilder.Services.AddScoped<ICustomerRepository, CustomerRepository>();\nbuilder.Services.AddScoped<CreateCustomerUseCase>();\nbuilder.Services.AddScoped<CreateCustomerValidator>();\n\n\`\`\`\n\nThis preserves:\n\n- Inversion of Control\n- Testability\n- Swap-ability of infrastructure\n\n## 11. Mapping DTOs at the Edges (Not the Core)\n\nMapping belongs:\n\n- Before the use case (input mapping)\n- After the use case (output mapping)\n\nNever map inside:\n\n- Domain entities\n- Business logic\n- Repositories\n\nThis keeps your core model stable when APIs evolve.\n\n## 12. Localization of Change (Why This Scales)\n\nWith this design:\n\nChange | Affected Layer\n------ | --------------\nDatabase swap | Infrastructure only\nAPI format change | Api only\nBusiness rule change | Domain only\nWorkflow change | Application only\n\nYou achieve:\n\n- Low regression risk\n- Faster onboarding\n- Parallel team development\n- Predictable maintenance cost\n\n## 13. Unit Testing the Use Case (No Web Server)\n\n\`\`\`csharp\npublic sealed class FakeCustomerRepository : ICustomerRepository\n{\n    private readonly List<Customer> _items = new();\n\n    public Task AddAsync(Customer customer, CancellationToken ct)\n    {\n        _items.Add(customer);\n        return Task.CompletedTask;\n    }\n\n    public Task<Customer?> GetByEmailAsync(string email, CancellationToken ct)\n    {\n        return Task.FromResult(\n            _items.FirstOrDefault(x => x.Email == email));\n    }\n}\n\n[Fact]\npublic async Task CreateCustomer_WorksCorrectly()\n{\n    var repo = new FakeCustomerRepository();\n    var useCase = new CreateCustomerUseCase(repo);\n\n    var request = new CreateCustomerRequest(\n        "test@example.com",\n        "John");\n\n    var result = await useCase.ExecuteAsync(request, CancellationToken.None);\n\n    Assert.NotEqual(Guid.Empty, result.Id);\n}\n\n\`\`\`\n\nNo ASP.NET.\nNo EF Core.\nNo HTTP.\nPure business test.\n\n## 14. Common Overengineering Traps (Avoid These)\n\nDo not:\n\n- Create IUseCase interfaces without reason\n- Split DTOs into five micro-models per request\n- Add MediatR unless you need pipeline behaviors\n- Introduce CQRS unless reads and writes truly diverge\n- Wrap EF Core in redundant generic repositories\n\nClean Architecture is about clarity, not maximum abstraction.\n\n## Final Thoughts\n\nA clean ASP.NET Core architecture is not defined by:\n\n- Number of projects\n- Number of interfaces\n- Amount of indirection\n\nIt is defined by:\n\n- Direction of dependencies\n- Isolation of business rules\n- Localization of change\n- Replaceable infrastructure\n\nThis model scales technically and organizationally without becoming rigid.`,
    url: '#'
  }
];
