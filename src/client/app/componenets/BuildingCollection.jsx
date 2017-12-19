import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import GoogleImg from './Presentation/GoogleImg.jsx';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {fetchTopBuildings} from '../actions';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

class BuildingCollection extends React.Component {
    componentDidMount() {
        this.props.fetchTopBuildings();
    }

    renderThumbnail(building) {
        return <GridTile
            key={building.id}
            title={<FlatButton
                href={"/building/" + building.address}
                target="_blank"
                secondary={true}
                label={building.address}/>}
            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
            <GoogleImg src={building.address} style={{width: 350}}/>
        </GridTile>;
    }

    render() {
        const {topBuildings} = this.props;

        if (topBuildings == undefined) {
            return <div>loading...</div>;
        }

        return (
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={2.2}>
                    {topBuildings.map(building => this.renderThumbnail(building))}
                </GridList>
            </div>
        );
    }
}

function mapStateToProps({topBuildings}) {
    return {topBuildings};
}

export default connect(mapStateToProps, {
    fetchTopBuildings
})(BuildingCollection);


