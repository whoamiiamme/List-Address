

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
        if(!lists){
            return '';
        }
        var products = [];
        for(var i in lists) {
            var list = {...lists[i], id: i}
            products.push(list)
        }
        
        return products;
    }

    
    simplePaging(total) {
        return <div>
            {this.props.pages.current_page > 1 ?
            <button onClick={() => this.changePage('back')}>Back</button>
            : null}
            {total > this.props.pages.current_page * this.props.pages.per_page ?
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
        var { addresses, keys } = this.props;
        var { current_page, per_page } = this.props.pages;
        var products = this.mapDataList(addresses);
        
        if(keys){
            products = products.filter((product) => {
                return product.name.toLowerCase().indexOf(keys) !== -1;
            })
        }

        var total = products.length;

        var elForm = products.slice(
            (current_page * per_page)
            - per_page, current_page * per_page)
            .map((item,index) => {
                return(<ListItem
                    key={index}
                    product={item}
                />);
            })
        
        return (
            <React.Fragment>
                <div className="container">
                    
                    <ViewList>
                        { elForm }
                    </ViewList>
                    { this.simplePaging(total) }
                    
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