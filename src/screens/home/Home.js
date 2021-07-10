import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    ImageListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    }
 });

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                 <Header />
                 <div className={classes.upcomingMoviesHeading}>
                     <span> Upcoming Movies </span>
                 </div>
                 <ImageList cols={5} className={classes.ImageListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <ImageListItem key={movie.id}>
                            <img src={movie.poster_url} className="movie-post" alt={movie.title} />
                            <ImageListItemBar title={movie.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        )
    }
}

export default withStyles(styles)(Home);