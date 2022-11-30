import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, url } = this.props;
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src={imgurl} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <a href={url} class="btn btn-warning">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
