

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ViewList from './../components/viewList';
import { getListData } from './../actions/fetchData';
import { nextPage, previousPage, editTotal } from './../actions/changePage';
import ListItem from './../components/listItem';


class ModelList extends Component {

    componentDidMount(){
        this.props.getListData();

    }

    mapDataList = (lists) => {
        var products = [];
        for(var i in lists) {
            var list = {...lists[i], id: i}
            products.push(list)
        }
        
        return products;
    }

    showList = () => {
        if(!this.props.addresses){
            return;
        }
        var products = this.mapDataList(this.props.addresses);

        if(this.props.keys){
            products = products.filter((product) => {
                return product.name.toLowerCase().indexOf(this.props.keys) !== -1;
            })
        }


        return products.slice(
            (this.props.pages.current_page * this.props.pages.per_page)
            - this.props.pages.per_page, this.props.pages.current_page * this.props.pages.per_page)
            .map((item,index) => {
                // console.log('current',' ',this.props.pages.current_page);
                // console.log('per' ,' ',this.props.pages.per_page);
                return(<ListItem
                    key={index}
                    product={item}
                />);
            })
    }

    
    simplePaging() {
        return <div>
            {this.props.pages.current_page > 1 ?
            <button onClick={() => this.changePage('back')}>Back</button>
            : null}
            {this.props.pages.total > this.props.pages.current_page * this.props.pages.per_page ?
            <button onClick={() => this.changePage('next')}>Next</button>
            : null}
        </div>;
    }

    changePage = (direction) => {
        if (direction === 'back') {
            this.props.previousPage(this.props.pages.current_page - 1)
        } else if (direction === 'next') {
            this.props.nextPage(this.props.pages.current_page + 1)
        }
    }


    render() {
            
        
        return (
            <React.Fragment>
                <div className="container">
                    
                    <ViewList>
                        { this.showList() }
                    </ViewList>
                    { this.simplePaging() }
                    
                </div>
                

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        addresses: state.addresses,
        pages: state.page,
        keys: state.keys
    }
}

export default connect(mapStateToProps,{
    getListData, nextPage, previousPage, editTotal
})(ModelList);