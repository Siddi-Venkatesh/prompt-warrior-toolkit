document.getElementById('generateBtn').addEventListener('click', () => {
    const role = document.getElementById('role').value;
    const task = document.getElementById('task').value.trim();
    const context = document.getElementById('context').value.trim();
    const expectedOutput = document.getElementById('expected_output').value.trim();
    const technique = document.getElementById('technique').value;

    if (!role) {
        alert("Please select an AI Role from the dropdown.");
        return;
    }

    if (!task) {
        alert("Please describe the core problem or objective you want the AI to solve.");
        return;
    }

    if (!technique) {
        alert("Please select a Prompting Technique from the dropdown.");
        return;
    }

    let finalPrompt = "";

    // Base Persona String
    let personaStr = `[ROLE & PERSONA]\nAct as a world-class, elite ${role}. You possess unparalleled expertise, a highly critical eye for detail, and a strict commitment to delivering precise, professional, and optimized results. Do not hallucinate or guess; rely strictly on logic and facts.\n\n`;

    // Task String with Structured Details
    let taskStr = `[CORE PROBLEM & OBJECTIVE]\n${task}\n\n`;
    
    if (context) {
        taskStr += `[ENVIRONMENT & CONTEXT]\n${context}\n\n`;
    }
    
    if (expectedOutput) {
        taskStr += `[EXPECTED OUTPUT FORMAT]\n${expectedOutput}\n\n`;
    }

    // Technique String
    let techniqueStr = "[METHODOLOGY & CONSTRAINTS]\n";
    
    if (technique === "Chain of Thought") {
        techniqueStr += `Before providing the final answer, please think step-by-step. Break down your reasoning into clear, logical, and exhaustive steps. Wrap your internal thoughts inside <thinking> tags, and then provide the final optimized output based on that reasoning.\n`;
    } else if (technique === "Few-Shot") {
        techniqueStr += `To guide your output, follow a strict structure. Here is the format you should emulate:\n\n[Example Input] -> [Example Output Format]\n\nPlease maintain this exact structure and pattern for the final answer. Provide analogous examples if helpful.\n`;
    } else if (technique === "Roleplay") {
        techniqueStr += `Stay strictly in character. Do not break the fourth wall. Respond ONLY as the ${role}, maintaining the exact tone, vocabulary, knowledge constraints, and perspective appropriate for this precise persona.\n`;
    } else if (technique === "Tree of Thoughts") {
        techniqueStr += `Explore multiple distinct reasoning paths or possible solutions to this problem. Evaluate the pros, cons, and feasibility of each path independently before converging on the single best and most precise solution. Outline your thought process clearly.\n`;
    } else if (technique === "Self-Reflection") {
        techniqueStr += `Before finalizing your response, critically review your initial draft for any potential errors, biases, logical leaps, or inaccuracies. Explicitly correct any mistakes and provide only the highly refined, completely accurate final answer.\n`;
    } else if (technique === "Meta-Prompting") {
        techniqueStr += `Adhere strictly to the highest standards of accuracy and precision. Follow all constraints to the letter. Do not hallucinate information. If you are unsure or lack data, explicitly state that you do not know.\n`;
    } else if (technique === "Context-Driven") {
        techniqueStr += `Base your answer strictly on the provided context or knowledge base. Do not include outside information that contradicts the provided context. If the answer cannot be found in the context, explicitly state 'I do not have enough information'.\n`;
    } else if (technique === "Socratic Method") {
        techniqueStr += `Instead of immediately providing the answer, ask a series of deep, clarifying questions to better understand my exact needs and constraints. Guide me toward the best possible solution. Wait for my response after asking your questions.\n`;
    } else {
        // Zero-Shot
        techniqueStr += `Provide a direct, completely concise, and highly accurate answer. Eliminate any unnecessary fluff, disclaimers, or preambles. Get straight to the point.\n`;
    }

    let formattingStr = `\n[OUTPUT FORMAT]\nEnsure the final output is highly polished, easy to read, and professionally formatted with Markdown where appropriate.\n`;

    finalPrompt = personaStr + taskStr + techniqueStr + formattingStr;

    // Show output
    const outputSection = document.getElementById('outputSection');
    const outputElem = document.getElementById('output');
    
    // Show output section but leave text empty for the loading effect
    outputElem.value = "Generating master prompt... Please wait.";
    outputSection.classList.remove('hidden');
    
    // Trigger sequential blinking for dots
    const dots = document.querySelectorAll('.window-header .dot');
    dots.forEach((dot, index) => {
        dot.style.animation = `blinkLight 0.6s infinite ${index * 0.2}s`;
    });
    
    // After 5 seconds, show the prompt and stop blinking
    setTimeout(() => {
        outputElem.value = finalPrompt;
        dots.forEach(dot => {
            dot.style.animation = 'none';
        });
    }, 5000);
});

document.getElementById('copyBtn').addEventListener('click', (e) => {
    const outputElem = document.getElementById('output');
    // Removed outputElem.select() to prevent highlighting the text
    navigator.clipboard.writeText(outputElem.value).then(() => {
        const btn = e.target;
        const originalText = btn.innerText;
        btn.innerText = "Master Prompt Copied!";
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
    });
});

const placeholders = {
    "Expert Developer": "e.g., Build a full-stack web application for a to-do list...",
    "Python Developer": "e.g., Build a python script to automate data entry from CSV to a database...",
    "Machine Learning Engineer": "e.g., Write a python script to train a random forest model on scikit-learn...",
    "Deep Learning Researcher": "e.g., Design a PyTorch CNN architecture for image classification...",
    "AI Scientist": "e.g., Explain the mathematical foundation of attention mechanisms in transformers...",
    "Creative Copywriter": "e.g., Write an engaging LinkedIn post about the future of AI...",
    "Data Analyst": "e.g., Analyze this sales dataset and identify the key trends...",
    "System Architect": "e.g., Design a highly scalable microservices architecture for an e-commerce platform...",
    "UI/UX Designer": "e.g., Design a user flow for a mobile banking application...",
    "SEO Specialist": "e.g., Optimize this blog post to rank for 'best prompt engineering techniques'...",
    "Cyber Security Expert": "e.g., Perform a security audit on the following authentication logic...",
    "Prompt Engineer": "e.g., Create a meta-prompt that forces the AI to output valid JSON only...",
    "Product Manager": "e.g., Write a comprehensive PRD for a new user onboarding flow...",
    "Custom Entity": "e.g., What do you want the AI to do? Be as specific as possible..."
};

document.getElementById('role').addEventListener('change', (e) => {
    const selectedRole = e.target.value;
    const taskInput = document.getElementById('task');
    if (placeholders[selectedRole]) {
        taskInput.placeholder = placeholders[selectedRole];
    } else {
        taskInput.placeholder = "e.g., What do you want the AI to do?";
    }
});
