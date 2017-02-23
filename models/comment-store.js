'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const commentStore = {

  store: new JsonStore('./models/comment-store.json', { commentCollection: [] }),
  collection: 'commentCollection',

  getAllComment() {
    return this.store.findAll(this.collection);
  },

  getComment(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addComment(comment) {
    this.store.add(this.collection, comment);
  },

  removeComment(id) {
    const comment = this.getComment(id);
    this.store.remove(this.collection, comment);
  },

  removeAllComment() {
    this.store.removeAll(this.collection);
  },

  addLink(id, link) {
    const comment = this.getComment(id);
    comment.links.push(link);
    
  },  

  removeLink(id, linkId) {
    const comment = this.getComment(id);
    const links = comment.links;
    _.remove(links, { id: linkId});
  },
 
};

module.exports = commentStore;