const sharpWebpBase64Fragment = `
    childImageSharp {
        fluid (quality: 100) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
        }
    }
`

module.exports = sharpWebpBase64Fragment
