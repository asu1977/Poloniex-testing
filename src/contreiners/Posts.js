import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import R from 'ramda';

import { fetchPosts, setPair } from '../actions/postActions';
import PairDitail from '../components/pairDitail'

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    onLiClick = event => this.props.setPair(event.target.textContent)

    render() {
        const pairs = this.props.posts;
        const pairName = this.props.pair;
        const pairData = R.view(R.lensProp(pairName), pairs);
        const pair = R.keys(pairs)
        const postItems = pair.map((pair) =>
            <li key={pair} onClick={this.onLiClick}>{pair}</li>
        );
        return (
            <div>
                <div>
                    <PairDitail 
                        pair={pairName} 
                        data={pairData}
                    />
                </div>
                <br />
                <h1>Pair</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    setPair: PropTypes.func.isRequired,
    posts: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    pair: state.posts.pair
});

const mapDispatchToProps = {
    fetchPosts,
    setPair
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
