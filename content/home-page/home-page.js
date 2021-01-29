const hero = require('./_hero');
const experience = require('./_experience');
const featuredProjects = require('./_featured-projects');
const statementAndSkills = require('./_statement-and-skills');
const contact = require('./_contact');

const homePage = {
    hero: hero,
    experience: experience,
    featured_projects: featuredProjects,
    statement_and_skills: statementAndSkills,
    contact: contact
}

module.exports = homePage;