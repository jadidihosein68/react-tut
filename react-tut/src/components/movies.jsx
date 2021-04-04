import React, { Component } from "react";
import Like from "./like";
import Pagination from "./pagination";


import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize : 10
  };

  handleDelete = (movie) => {
    console.log(movie);

    const _movies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({ movies: _movies });
  };




  handleLike=(movie)=>{

    console.log(movie);
    const movies = [...this.state.movies];
    const index =movies.indexOf(movie);
    movies[index]={...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});

  }



  handlePageChanges = (page) =>{

console.log(page);

  }

  render() {
    const { length: count } = this.state.movies; // length known as count.

    if (count === 0) return <p>there are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={()=>this.handleLike(movie)}></Like>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination   itemsCount={count} pageSize ={this.state.pageSize} onPageChange={this.handlePageChanges}></Pagination>
      </React.Fragment>
    );
  }
}

export default Movies;
