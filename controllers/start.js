'use strict';
const _ = require('lodash');
const bookmarkStore = require('../models/bookmark-store');
const collection = require('../models/bookmark-store.json');
const logger = require('../utils/logger');


const start = {
  index(request, response) {
    
    logger.info('start rendering');
    const viewData = {
      title: 'Gomark V "James"',
      size: bookmarkStore.getAllBookmarks().length,
    
    };
    response.render('start', viewData);
  },
};

module.exports = start;
