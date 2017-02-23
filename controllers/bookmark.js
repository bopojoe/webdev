'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');
const uuid = require('uuid');

const bookmark = {
  index(request, response) {
    const bookmarkId = request.params.id;
    
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkStore.getBookmark(bookmarkId),
      
    };
    response.render('bookmark', viewData);
  },

  deleteLink(request, response) {
    const bookmarkId = request.params.id;
    const linkId = request.params.linkid;
    logger.debug(`Deleting Link ${linkId} from Bookmark ${bookmarkId}`);
    bookmarkStore.removeLink(bookmarkId, linkId);
    response.redirect('/bookmark/' + bookmarkId);
  },

  addLink(request, response) {
    const bookmarkId = request.params.id;
    const bookmark = bookmarkStore.getBookmark(bookmarkId);
    const newLink = {
      id: uuid(),
      bookmark: request.body.bookmark,
      link: request.body.link,
      summary: request.body.Summary,
    };
    bookmarkStore.addLink(bookmarkId, newLink);
    response.redirect('/bookmark/' + bookmarkId);
  },
};

module.exports = bookmark;
