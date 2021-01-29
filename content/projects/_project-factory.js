export const projectFactory = (props = {
    name = '', // example: Stallion
    full_name = this.name, // example: Stallion Oilfield
    made_at = ``,
    tech: {
        priority_list: [], // this should be a top 3
        featured_list: [],
        full_list: []
    },
    images = [],
    url = '',
    url_path = '',
    github_link = '',
    in_progress = false,
    is_featured = false,
    link_text = this.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0], 
    description = '',
    excerpt = this.description,
    year = '',
    key = '',
}) => {props}