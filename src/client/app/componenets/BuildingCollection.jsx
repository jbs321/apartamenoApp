import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

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

export default class BuildingCollection extends React.Component {

    constructor() {
        super();

        this.state = {
            buildings: [],
        };
    }

    componentDidMount() {
        axios.get(process.env.ENV.API_URL + '/buildings')
            .then(res => {
                const buildings = res.data;
                this.setState({
                    buildings: buildings
                });
            });
    }

    render() {
        return (
                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>
                        {this.state.buildings.map(building =>
                            <GridTile
                                key={building.id}
                                title={<FlatButton
                                    href={"http://apartamento.ca/building/" + building.address}
                                    target="_blank"
                                    secondary={true}
                                    label={building.address}
                                />}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                                <GoogleImg src={building.address} className="card-image"/>
                                {/*<img src={building.imgSrc} className="card-image"/>*/}
                            </GridTile>
                        )}
                    </GridList>
                </div>
        );
    }
}
