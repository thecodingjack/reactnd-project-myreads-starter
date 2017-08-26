import React,{Component} from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class BookShelf extends Component{
	static propTypes = {
		shelf: PropTypes.string.isRequired,
		shelfFilter: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}

	render(){
		return(
			<div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.shelf}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter(book => book.shelf === this.props.shelfFilter).map((book) => (
					<li key={book.title} className='contact-list-item'>
						<div className="book">
							<div className="book-top">
								{book.imageLinks ?(
									<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
									):(
									<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png" }}></div>
									)
								}
	                            <div className="book-shelf-changer">
									<select value= {book.shelf} onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
		                                <option value="none" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead">Want to Read</option>
		                                <option value="read">Read</option>
		                                <option value="none">None</option>
	                              	</select>
	                            </div>
	                            </div>
	                        <div className="book-title">{book.title}</div>
	                        {book.authors &&
	                        	<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
	                        }
                        </div>
					</li>
				))}
                </ol>
              </div>
            </div>
		)
	}
}

export default BookShelf