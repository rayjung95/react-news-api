import React from 'react'

const NewsSingle = ({item}) => (
    
        <div className="col s4" style={{height:'550px'}}>
            <div className="card">
                <div className="card-image">
                    <img src={item.urlToImage} alt={item.title} style={{height:'320px'}}/>
                    <span className="card-title">{item.source.name}</span>
                </div>
                <div className="card-content">
                    <p>{item.title}</p>
                </div>
                <div className="card-action">
                    <a href={item.url}>Full Article</a>
                </div>
            </div>
        </div>
    
);

export default NewsSingle