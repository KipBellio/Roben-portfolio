let skills = [
    "HTML & CSS",
    "JavaScript",
    "Node.js",
    "Software Testing",
    "QA Methodologies",
    "Git & GitHub",
    "Responsive Design"
];

// ---------- PROJECTS ARRAY OF OBJECTS ----------
let projects = [
    {
        title: "Portfolio Website",
        description: "A responsive personal portfolio built with HTML, CSS, and JavaScript to showcase my work and skills.",
        tools: "HTML, CSS, and JavaScript"
    },
    {
        title: "Product inventory management",
        description: "An inventory management system that updates, reads, and deletes products in the inventory.",
        tools: "HTML, CSS, and JavaScript"
    },
    {
        title: "Travel and tour website",
        description: "A simple tarvel and tour landing page for Fire Island tours and travel .",
        tools: "HTML, CSS, and JavaScript"
    }
];

// ---------- RENDER SKILLS ----------
let skillsListEl = document.getElementById('skills-list');
if (skillsListEl) {
    skills.forEach(function (skill) {
        let li = document.createElement('li');
        li.textContent = skill;
        skillsListEl.appendChild(li);
    });
}

// ---------- RENDER PROJECTS ----------
let projectsGridEl = document.getElementById('projects-grid');
if (projectsGridEl) {
    projects.forEach(function (project) {
        // card container
        let card = document.createElement('div');
        card.className = 'project-card';

        // title
        let title = document.createElement('h3');
        title.textContent = project.title;
        card.appendChild(title);

        // description
        let desc = document.createElement('p');
        desc.textContent = project.description;
        card.appendChild(desc);

        // tools
        let tools = document.createElement('span');
        tools.className = 'project-tools';
        tools.textContent = project.tools;
        card.appendChild(tools);

        // append card to grid
        projectsGridEl.appendChild(card);
    });
}