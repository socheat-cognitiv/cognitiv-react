import React, {Component} from 'react';
import { Nav, NavItem} from 'react-bootstrap';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import railIcon from '../../resources/images/cogn-rail-delimeter.svg';

class SubNavigation extends Component {
    state = {
        navigation : this.props.navigation 
    }
    handleRouterSubNavigation = this.handleRouterSubNavigation.bind(this);
    
    handleRouterSubNavigation(pathname){
        const paths = pathname.split('/').slice(1);
        const state = this.state.navigation;
        let navigation;

        paths.forEach(function(pathname) {
            if(state[pathname] instanceof Object){
                navigation = state[pathname];
            }
        });

        navigation = navigation ? navigation : state.default;
        this.setState({subnavigation: navigation})
    }
    componentWillMount(){
        this.handleRouterSubNavigation(this.props.location.pathname);
    }
    componentWillReceiveProps() {
        this.handleRouterSubNavigation(this.props.history.location.pathname);
    }
    render() {
        const { breadcrumbs, pages } = this.state.subnavigation;
        return (
        <div className="row">
            <Nav className="cogn-subnav-custom">
                {breadcrumbs.map((breadcrumb, index) => {
                    return (
                    <LinkContainer key={index} to={breadcrumb.link}>
                        <NavItem className="cogn-custom-breadcrumb cogn-sub-item">
                            <span className="sub-menu-title">{breadcrumb.title}</span>
                            <FontAwesomeIcon icon="chevron-right" />
                        </NavItem>
                    </LinkContainer>
                    )
                })}
                { pages.map((page, index) => {
                    return (
                    <LinkContainer key={index} to={page.link}>
                        <NavItem className="cogn-sub-item">
                            <span className="sub-menu-title">{page.title}</span>
                            { page.icon ? 
                                <img className="svg-inline--fa fa-chevron-right fa-w-10" alt="Cognitiv Delimeter" src={railIcon}/> :
                                null
                            }
                        </NavItem>
                    </LinkContainer>
                    )
                })}
            </Nav>
        </div>
        )
    }
};
const SubNavigationWithRouter = withRouter(SubNavigation);
export default SubNavigationWithRouter;
