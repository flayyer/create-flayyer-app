// Created with create-flyyer-app@{{ replace-create-version }}

const {config} = require('@flyyer/types');
require('dotenv').config();

module.exports = config({
  engine: 'react',
  key: process.env.FLYYER_KEY,
  deck: '{{ replace-slug }}',

  // Optionals
  name: '{{ replace-title }}',
  description: 'Created with create-flyyer-app',
  private: true, // Set to false to deploy publicly to https://flyyer.io/community
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // Declare supported sizes
});
