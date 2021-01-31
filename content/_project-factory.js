const projectFactory = ({
    name = '', // example: Stallion
    full_name = name, // example: Stallion Oilfield
    made_at = ``,
    tech = {
        priority_list: [], // this should be a top 3
        featured_list: [],
        full_list: [],
        filter_tags: {}
    },
    images = [],
    url = '',
    url_path = '',
    github_link = '',
    in_progress = false,
    is_featured = false,
    link_text = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0], 
    description = '', // a larger description for project detail pages
    excerpt = description, // a smaller description for cta's (defaults to description)
    year = '',
    key = '',
}) => {
   return {
        name,
        full_name, 
        made_at,
        tech,
        images,
        url,
        url_path,
        github_link,
        in_progress,
        is_featured,
        link_text, 
        description,
        excerpt,
        year,
        key,
    };
}

module.exports = projectFactory;