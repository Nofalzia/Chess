# Chess Themed Website

**Live demo:** [Not deployed yet]

## What it does
This website is an immersive, visual tribute to the game of chess. It features high-quality 3D animations, interactive educational cards about chess pieces, and fun facts, all wrapped in a premium, responsive design.

## Tech stack
- **HTML5**: Structured semantic markup for mobile and desktop versions.
- **CSS3**: Custom styles featuring smooth gradients, glassmorphism, and complex animations.
- **JavaScript (ES6+)**: Vanilla JS for intersection observers, redirection logic, and interactive components.
- **Spline**: Integrated high-quality 3D renders for an immersive background experience.
- **Google Fonts**: Utilizes the 'Poppins' typeface for modern, clean typography.

## Key features
- **Immersive 3D Video Background**: High-quality Spline-rendered chess animations that create a premium aesthetic for both mobile and desktop.
- **Interactive Knowledge Cards**: Smooth flip animations allow users to reveal strategic insights and symbolic meanings of each chess piece.
- **Adaptive Responsive Layout**: Custom-built mobile and desktop versions ensure a tailored experience, with intelligent redirection based on screen size.
- **Dynamic Scroll Animations**: Utilizes the Intersection Observer API to trigger elegant "slide-in" effects for cards as users scroll.
- **Themed Loading System**: A polished, chess-themed loading overlay ensures assets are ready before the user starts exploring.

## Getting started
1. Clone the repository to your local machine.
2. Open `index.html` in any modern web browser to view the mobile-optimized version.
3. The website will automatically redirect to `desktop-index.html` if viewed on a larger screen.
   *(Alternatively, use a local development server like VS Code "Live Server" for the best experience).*

## Why I built this
I’m a chess enthusiast who was inspired by a stunning 3D Spline render; I wanted to create a digital tribute to the game that combined beautiful aesthetics with educational content, transforming a simple hobby into a visually captivating web experience.

---

### Quick Improvements
1. **Consolidate Styles**: Currently, styles are split between `styles.css` and `desktop styles.css`. Consolidating these into a single file with media queries would improve maintainability and reduce HTTP requests.
2. **Add a .gitignore**: The project is missing a `.gitignore` file. Adding one would help prevent accidental tracking of OS-specific files (like `Thumbs.db` or `.DS_Store`) or local environment configs.
3. **Optimize Redirection Logic**: Instead of a full page redirect via `window.location.href`, consider using CSS media queries or a single-page structure to handle layout changes, which would provide a faster and smoother user experience.
