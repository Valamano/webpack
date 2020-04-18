import Heading from './components/heading/heading.js';
import PageContent from './components/page-content/page-content.js';
import React from 'react';

const heading = new Heading();
heading.render('content');
const pageContent = new PageContent();
pageContent.render('Custom contents');
