import React, { Component } from 'react'
import NewsSingle from './NewsSingle'

class News extends Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
        }
        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount(){
        const url=`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=4b05515b29c54a6da0c7e13283de9c8b`;

        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    news:data.articles
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    renderItems() {
        return this.state.news.map((item) => (
            <NewsSingle key={item.url} item={item}/>
        ));
    }


    render(){
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}
export default News