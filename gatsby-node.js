/*******************************************************
 ********************************************************
 **
 **  REEAADDD MEEE ARGGGGGG
 **
 **  1. This file is responsible for generating the pages / routes from wordpress
 **  2. Used Rest for all gravityform query's (graphql not supported out-of-box)
 **  => acf gravityForms plugin isn't supported in grapghql either :(
 **
 ********************************************************
 ********************************************************/

/*******************************************************
 ********************************************************
 **
 **  Create Pages :)
 **
 ********************************************************
 ********************************************************/

const createPages = require("./node-lib/page-creation/create-pages")
const createProjectDetailPages = require("./node-lib/page-creation/create-project-detail-pages")
// const createServices = require("./node-lib/page-creation/services/_create-services")

exports.createPages = async ({ actions }) => {
  await Promise.all([
    createPages({ actions }),
    // createProjectDetailPages({ actions, graphql }),
    // createServices({ actions, graphql }),
  ])
}
