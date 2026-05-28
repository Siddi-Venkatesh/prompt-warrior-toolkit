# Prompt Warrior Toolkit ⚔️

A sleek, glassmorphic web application designed to generate highly optimized, context-rich, and heavily constrained "Master Prompts" for interacting with advanced AI models like ChatGPT, Gemini, and Claude.

By breaking down your intent into structured blocks (Persona, Core Problem, Environment, Constraints, and Output Format) and wrapping it in advanced prompting methodologies, this tool ensures the AI generates precise, hallucination-free, and perfectly tailored results.

## ✨ Features
- **AI Personas:** Choose from multiple expert roles (e.g., Python Developer, Data Analyst, Prompt Engineer, Deep Learning Researcher).
- **Structured Inputs:** Dedicated fields for your core objective, environment/context, and specific constraints to prevent lazy or vague prompts.
- **Advanced Methodologies:** Automatically wrap your prompt in state-of-the-art techniques:
  - Chain of Thought (Step-by-step reasoning)
  - Tree of Thoughts (Exploring multiple paths)
  - Meta-Prompting (Strict system rules)
  - Self-Reflection (Analyze and correct)
  - Socratic Method (Ask clarifying questions)
- **Sleek UI:** A beautiful, responsive glassmorphism design with a dynamic digital background and sequential loading animations.
- **1-Click Copy:** Easily copy your fully formatted Master Prompt to your clipboard.

## 🚀 How to Run Locally
Since this is a purely frontend, static application, you don't need to install any heavy dependencies.
1. Clone this repository.
2. Open `index.html` in your favorite web browser.
3. *Alternatively*, serve it via a local development server:
   ```bash
   npx serve -p 8080
   # or
   python -m http.server 8080
   ```

## ☁️ Deployment
This project is deployment-ready for **Netlify**, **Vercel**, or **Google Cloud Run**.
A `Dockerfile` (using `nginx:alpine`) is included in the root directory for instant containerized deployment on Google Cloud Run.

## 📝 Example Generated Prompt
If you fill out the toolkit asking a **Python Developer** to build a script using **Chain of Thought** reasoning, the toolkit will instantly compile this Master Prompt for you to copy/paste into your AI:

```markdown
[ROLE & PERSONA]
Act as a world-class, elite Python Developer. You possess unparalleled expertise, a highly critical eye for detail, and a strict commitment to delivering precise, professional, and optimized results. Do not hallucinate or guess; rely strictly on logic and facts.

[CORE PROBLEM & OBJECTIVE]
Build a Python script that reads an Excel file containing customer records, logs into a web portal using Selenium, and enters the data automatically.

[ENVIRONMENT & CONTEXT]
Running on Windows, using Python 3.10, Pandas, and ChromeDriver. 

[EXPECTED OUTPUT FORMAT]
Provide the complete, commented Python script. Include a requirements.txt file block and short instructions on how to run it.

[METHODOLOGY & CONSTRAINTS]
Before providing the final answer, please think step-by-step. Break down your reasoning into clear, logical, and exhaustive steps. Wrap your internal thoughts inside <thinking> tags, and then provide the final optimized output based on that reasoning.

[OUTPUT FORMAT]
Ensure the final output is highly polished, easy to read, and professionally formatted with Markdown where appropriate.
```
