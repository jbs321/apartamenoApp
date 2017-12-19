import React from 'react';
// import BuildingCollection from "../../BuildingCollection.jsx";
// import LoginSection from "../../Pages/HomePage/LoginSection.jsx";
import TopMenuContainer from '../../Containers/TopMenuContainer.jsx';
import SearchContainer from '../../Containers/SearchContainer';

export default class HomePage extends React.Component {
    render() {
        const pageClass = "page home-page body-container container-fluid";
        const pageStyle = {padding: 0};
        return (
            <div className={pageClass} style={pageStyle}>
                <header className="header">
                    <TopMenuContainer/>

                    <div className="header-banner"></div>
                    <div className="header-spacer container">
                        <h1 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">
                            Apartamento
                        </h1>

                        <h2 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">
                            Find all you need about Apartments, Buildings and more.
                        </h2>

                        <SearchContainer />
                    </div>
                </header>

                {/*<div className="main main-raised">*/}
                    {/*Most Active*/}
                    {/*<hr/>*/}
                    {/*<BuildingCollection/>*/}
                {/*</div>*/}
            </div>
        );
    }
}