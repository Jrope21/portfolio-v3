const sharpWebpBase64Fragment = require("../../commons/_sharp-webp-base64")

const HeroFragment = `
    hero {
        skill_four
        skill_one
        skill_three
        skill_two
        sub_title
        title
        hero_image {
            alt
            desktop_src {
                ${sharpWebpBase64Fragment}
            }
            tablet_src {
                ${sharpWebpBase64Fragment}
            }
            mobile_src {
                ${sharpWebpBase64Fragment}
            }
        }
    }
`

module.exports = HeroFragment
