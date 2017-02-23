'use strict';

const logger = require('../utils/logger');
const commentStore = require('../models/comment-store');
const uuid = require('uuid');

const about = {
  index(request, response) {
    
    const commentId = request.params.id;
    logger.info('about rendering');
    
    const viewData = {
      title: 'About GoMark V "James"',
      comments: commentStore.getAllComment(),
    };
    response.render('about', viewData);
  },
  
  addComment(request, response) {
    const newComment = {
      id: uuid(),
      name: request.body.name,
      comment: request.body.comment
    };
    logger.debug('Creating a new Comment', newComment);
    commentStore.addComment(newComment);
    response.redirect('/about');
  },
};

module.exports = about;
