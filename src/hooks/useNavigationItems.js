import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useState } from 'react';

export default function useNavigationItems() {
    const { allNavigationJson } = useStaticQuery(graphql`
        query MyQuery {
            allNavigationJson {
                nodes {
                    links {
                        name
                        path
                        children {
                            name
                            path
                        }
                    }          
                }
            }
        }
    `)

    const [navItems, setNavItems] = useState(
        allNavigationJson.nodes[0].links
    )

    return  [navItems, setNavItems]
}
