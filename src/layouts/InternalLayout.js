import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../resources/js/cognitiv.history';

import Loadable from 'react-loadable';
import Navigation from '../components/common/Navigation';
import SubNavigationWithRouter from '../components/common/SubNavigationWithRouter';
import Footer from '../components/common/Footer';
import Loading from '../components/common/Loading';
import AxiosLoader from '../components/common/AxiosLoader';

// Creating Async components for chunking the build & loading
const AsyncCampaignsWrapper = Loadable({
    loader: () => import('../components/campaigns/CampaignsWrapper'),
    loading: Loading
});
const AsyncBeaconReportWrapper = Loadable({
    loader: () => import('../components/campaigns/BeaconReportWrapper'),
    loading: Loading
});
const AsyncRevenueReportWrapper = Loadable({
    loader: () => import('../components/campaigns/RevenueReportWrapper'),
    loading: Loading
});
const AsyncAdvertisersWrapper = Loadable({
    loader: () => import('../components/advertisers/AdvertisersWrapper'),
    loading: Loading
});
const AsyncPartnersWrapper = Loadable({
    loader: () => import('../components/partners/PartnersWrapper'),
    loading: Loading
});
const AsyncCampaignWrapper = Loadable({
    loader: () => import('../components/campaign/CampaignWrapper'),
    loading: Loading
});
const AsyncInternalNoMatch = Loadable({
    loader: () => import('../components/common/InternalNoMatch'),
    loading: Loading
});


class InternalRouter extends Component {
    state = {
        default: {
            breadcrumbs: [],
            pages: [
            {title: 'Advertisers',link: '/partners/overview', icon: true},
            {title: 'Campaigns',link: '/campaigns/overview', icon: true},
            {title: 'Partners',link: '/partners/overview', icon: false}
            ]
        },
        campaigns: {
            breadcrumbs: [{title: 'Campaigns',link: '/campaigns/overview'}],
            pages: [
            {title: 'Overview',link: '/campaigns/overview', icon: true},
            {title: 'Beacon Report',link: '/campaigns/beacon-report', icon: true},
            {title: 'Revenue Report',link: '/campaigns/revenue-report', icon: false}
            ],
        },
        partners: {
            breadcrumbs: [{title: 'Partners',link: '/partners/overview'}],
            pages: [{title: 'Overview',link: '/partners/overview', icon: false}],
        },
        advertisers: {
            breadcrumbs: [{title: 'Advertisers',link: '/advertisers/overview'}],
            pages: [{title: 'Overview',link: '/advertisers/overview', icon: false}],
        },
        campaign: {
            breadcrumbs: [
                {title: 'Campaigns',link: '/campaigns/overview'},
                {title: 'Campaign',link: '/campaign/overview'}
            ],
            pages: [
                {title: 'Overview',link: '/campaign/12/overview', icon: true},
                {title: 'COR',link: '/campaign/12/campaign-overview-report', icon: true},
                {title: 'Details',link: '/campaign/12/details', icon: false}],
        },
        lineitems: {
            breadcrumbs: [
                {title: 'Campaigns',link: '/campaigns/overview'},
                {title: 'Campaign',link: '/campaign/overview'},
                {title: 'Line Items',link: '/campaign/12/lineitems/1/overview'}
            ],
            pages: [{title: 'Overview',link: '/campaign/12/lineitems/1/overview', icon: false}]
        }
    }
    render(){
        return(
            <Router history={history}>
                <div className="container-fluid cogn-body">
                    <Navigation />
                    <SubNavigationWithRouter  navigation={this.state}/>
                    <div className="row cogn-content">
                        <Switch>
                            <Route exact path="/campaigns/overview"  component={AsyncCampaignsWrapper}/>
                            <Route exact path="/campaigns/beacon-report"  component={AsyncBeaconReportWrapper}/>
                            <Route exact path="/campaigns/revenue-report"  component={AsyncRevenueReportWrapper}/>
                            <Route exact path="/advertisers/overview"  component={AsyncAdvertisersWrapper}/>
                            <Route exact path="/partners/overview"  component={AsyncPartnersWrapper}/>
                            <Route exact path="/campaign/overview"  component={AsyncCampaignWrapper}/>
                            <Redirect exact from="/login" push to="/campaigns/overview"/>
                            <Route component={AsyncInternalNoMatch}/>
                        </Switch>
                    </div>
                    <Footer />
                    <AxiosLoader/>
                </div>
            </Router>
        )
    }
}
export default InternalRouter;