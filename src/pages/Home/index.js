import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as selectors from './redux/reducer';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import links from '../../utility/Links';

const { SearchBar } = Search;

const columns = [{
  dataField: 'ifsc',
  text: 'IFSE',
}, {
  dataField: 'bank_name',
  text: 'Bank Name',
}, 
{
  dataField: 'branch',
  text: 'Branch',
},
{
  dataField: 'address',
  text: 'Address',
},
{
    dataField: 'bank_id',
    text: 'Bank ID',
  },
  {
    dataField: 'city',
    text: 'City',
  },
  {
    dataField: 'district',
    text: 'District',
  },
  {
    dataField: 'state',
    text: 'State',
  }
];

const options = {
  paginationSize: 1,
  pageStartIndex: 1,
  firstPageText: '<<',
  prePageText: '<',
  nextPageText: '>',
  lastPageText: '>>',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: false,
  sizePerPageList: [{
    text: '10', value: 10
  }, {
    text: '20', value: 20
  },
  {
    text: '30', value: 30
  },
  {
    text: '100', value: 100
  },
  {
    text: '500', value: 500
  }
]
};

const styles = theme =>({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        float:'right',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        right:'0',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
      paginationContainer:{
        margin:'50px 20px 10px 25px'
      }
  })

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(actions.getBankData('bangalore'));
    }
    render(){
        const { bank,classes } = this.props;
        console.log(bank);
        return(
            <>
                <ToolkitProvider
                  keyField='bank_name'
                  data={ bank }
                  columns={ columns }
                  search
                 >
                    {
                      props => (
                        <div className={classes.paginationContainer}>
                         <div className={classes.search}>
                          <div className={classes.searchIcon}>
                            <SearchIcon />
                          </div>
                          <SearchBar { ...props.searchProps }   classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}/>
                        </div>
                        <Link to={links.bankDetails(bank.bank_id)} style={{textDecoration:'none'}}>
                          <BootstrapTable
                            { ...props.baseProps }
                            pagination={ paginationFactory(options)}
                          />
                          </Link>
                        </div>
                      )
                    }
              </ToolkitProvider>
            </>
        )
  }
}
function mapStateToProps(state) {
    return selectors.getAllValues(state);
  }
export default connect(mapStateToProps)(withStyles(styles)(Home));