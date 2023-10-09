import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    // console.log("I am constructer of news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=3fed59beb7f9448a812513c151bad950&page=1&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3fed59beb7f9448a812513c151bad950&page=${this.state.page+1}&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePreviousClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3fed59beb7f9448a812513c151bad950&page=${this.state.page-1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  // handleNextClick = async () => {
  //   if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
  //     let nextPage = this.state.page + 1;
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3fed59beb7f9448a812513c151bad950&page=${nextPage}&pagesize=20`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  
  //     this.setState({
  //       page: nextPage,
  //       articles: parsedData.articles,
  //     });
  //   }
  // };
  
  // handlePreviousClick = async () => {
  //   if (this.state.page > 1) {
  //     let prevPage = this.state.page - 1;
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3fed59beb7f9448a812513c151bad950&page=${prevPage}&pagesize=20`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  
  //     this.setState({
  //       page: prevPage,
  //       articles: parsedData.articles,
  //     });
  //   }
  // };
  

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page<=1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
