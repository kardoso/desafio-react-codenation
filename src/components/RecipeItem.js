import React from 'react'
import Highlighter from 'react-highlight-words'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={props.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">
                    <Highlighter
                        highlightClassName="HighlightClass"
                        searchWords={[props.searchedText]}
                        autoEscape={true}
                        textToHighlight={props.title?props.title : ''}
                    />
                </h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>
                    <Highlighter
                        highlightClassName="HighlightClass"
                        searchWords={[props.searchedText]}
                        autoEscape={true}
                        textToHighlight={props.ingredients?props.ingredients : ''}
                    />
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;