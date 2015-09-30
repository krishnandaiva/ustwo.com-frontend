'use strict';

import React from 'react';
import classnames from 'classnames';

import Flux from '../../flux';

import SVG from '../svg';
import LoadingIcon from '../loading-icon';

const blogCategories = {
  all: "All Categories",
  business: "Business",
  culture: "Culture",
  design: "Design",
  development: "Development",
  process: "Process",
  ux: "UX",
  apps: "Apps",
  innovation: "Innovation",
  product: "Product"
}

export default class BlogControls extends React.Component {
  render() {
    return (
      <div className={classnames("blog-controls", this.props.className)}>
        <button onClick={this.onClickSearch} className="blog-search-button">
          <SVG className="search-icon" spritemapID='search' />
        </button>
        <div className='blog-filter'>
          <div className="selected" onClick={this.onClickSelectedCategory}>{blogCategories[this.props.blogCategory]}</div>
          <LoadingIcon />
        </div>
      </div>
    );
  }
  onClickSearch = (event) => {
    Flux.showSearch();
  }
  onClickSelectedCategory = () => {
    Flux.showBlogCategories();
  }
};