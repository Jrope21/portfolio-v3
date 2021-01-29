const HeroImageMobile = require('@images/home/portfolio_hero_mobile.jpg');
const HeroImageTablet = require('@images/home/portfolio_hero_tablet.jpg');
const HeroImageDesktop = require('@images/home/portfolio_hero_desktop.jpg');

const heroData = {
    hero_image: {
        desktop_src: HeroImageDesktop,
        table_src: HeroImageTablet,
        mobile_src: HeroImageMobile,
        alt: 'A Front End Developer typing on a laptop'
    },
    title: 'Joshua',
    sub_title: 'Joshua Roper, front end developer based in Dallas.',
    skill_one: 'Javascript (ES8)',
    skill_two: 'Node Js',
    skill_three: 'React',
    skill_four: 'Svelte'
}

module.exports = heroData