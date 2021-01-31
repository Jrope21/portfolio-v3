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

const createPages = require("./node-lib/page-creation/create-pages");

exports.createPages = async ({ graphql, actions }) => {
    await Promise.all([
        createPages({ actions, graphql }),
    ])
  }
