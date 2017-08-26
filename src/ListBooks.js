import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from'./BookShelf'
import sortBy from 'sort-by'


class ListBooks extends Component{
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}


	render(){
		this.props.books.sort(sortBy('title'));
		return(
			<div className="app">
		          <div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		            <div className="list-books-content">
		              <div>
						<BookShelf
						  shelf="Currently Reading"
						  shelfFilter="currentlyReading"
			              onUpdateShelf={this.props.updateShelf}
			              books = {this.props.books}
			            />
		                <BookShelf
						  shelf="Want to Read"
						  shelfFilter="wantToRead"
			              onUpdateShelf={this.props.updateShelf}
			              books = {this.props.books}
			            />
		                <BookShelf
						  shelf="Read"
						  shelfFilter="read"
			              onUpdateShelf={this.props.updateShelf}
			              books = {this.props.books}
			            />
		              </div>
		            </div>
		            <div className="open-search">
		              <Link to="/search">Add a book</Link>
		            </div>
		          </div>
		    </div>
		)
	}
}

export default ListBooks