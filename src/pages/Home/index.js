import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as selectors from './redux/reducer';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Pagination from '../../components/Pagination/Pagination';
import links from '../../utility/Links';
import { Link } from 'react-router-dom';
import CachedSearch from '../../components/CachedSearch/CachedSearch';
import Loader from '../../components/Loader/Loader'
import { OutlinedInput,
         InputLabel,
         FormControl,
         Select,
         InputBase,
         withStyles,
         Grid 
} from '@material-ui/core';

const styles = theme =>({
    root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
        display: 'none',
        marginLeft:35,
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
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
        fontSize:'14px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(7),
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize:'14px',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
            '&::placeholder':{
              color: '#ec407a',
              opacity: 1,
              fontSize:'14px'
            }
          },
        },
       
      },
      paginationContainer:{
        margin:'50px 20px 10px 25px'
      }
      ,
      formControl: {
        margin: theme.spacing(3),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      selectPaddingOpt:{
        margin:'10px',
        fontSize:'14px',
        color: '#ec407a',
      },
      tbleHeader:{
        backgroundColor: fade('#ec407a', 0.75),
        color:'white',
      }
  })

class Home extends Component{
 constructor(){
   super()
      this.state = {
        pageOfItems: [],
        cityName:'Bangalore',
        query: "",
        results: [],
        pageSize:10,
        labelWidth:0,
        loadText:'Please Wait Its Loading....'
    };
 }
  componentDidMount(){
      this.props.dispatch(actions.getBankData('bangalore'));
  }
  onChangePage =(pageOfItems)=>{
    this.setState({ pageOfItems: pageOfItems });
}
  handleChange = event => {
    this.props.dispatch(actions.getBankData(event.target.value));
    this.setState({
      cityName:event.target.value,
      loadText:`Please wait loading Bank's details from ` + event.target.value
    })
  };
  handleQueryChange =(query)=>{
    this.setState({ query });
    this.CachedSearch.changeQuery(query);
  }

  handleResults=(results)=>{
    this.setState({ pageOfItems:results });
  }
  handlePageSizeChange = event => {
    this.setState({ pageSize:event.target.value})
  };
    render(){
        const { bank,classes,loading} = this.props;
        // console.log(bank);
        const search = query =>
          new Promise((resolve, reject) => {
            const regex = new RegExp(`^${query}`, "i");
            console.log(bank);
            const results = bank.filter(dataField => {
              return (
                regex.test(dataField.ifsc) ||
                regex.test(dataField.bank_name) ||
                regex.test(dataField.bank_id) ||
                regex.test(dataField.branch) ||
                regex.test(dataField.address) ||
                regex.test(dataField.city) ||
                regex.test(dataField.state) 
              );
            });
            resolve(results);
          });
          this.CachedSearch = new CachedSearch(search, this.handleResults);
          // Storing data in localstorage
          localStorage.setItem('bankLocalData',JSON.stringify(bank));
          if(loading){
            return<Loader loadText={this.state.loadText}/>
          }else{
        return(
            <>  
               <br/>
                <div className={['container'].join(' ')}>
                  <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          >
                    <Grid item>
                      <FormControl variant="outlined" 
                                   className={classes.formControl}
                                   >
                            <InputLabel
                              ref={ref => {
                                this.InputLabelRef = ref;
                              }}
                              htmlFor="explore-city"
                            />
                            <Select
                              native
                              value={this.state.cityName}
                              onChange={this.handleChange}
                              style={{ height: '30px',fontSize:'14px'}}
                              input={
                                <OutlinedInput
                                  name="city"
                                  labelWidth={this.state.labelWidth}
                                  id="explore-city"
                                />
                              }
                            >
                              {['Bangalore','Mysore','Mumbai','Delhi','Patna'].map(city => (
                                <option key={city + 'i'} value={city} className={classes.selectPaddingOpt}>
                                  {city}
                                </option>
                              ))}
                            </Select>
                          </FormControl>
                      </Grid>
                  <Grid item>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        onChange={({ target: { value } }) => this.handleQueryChange(value)}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Search' }}
                      />
                    </div>
                  </Grid>
                 </Grid>
              </div>
            <br/><br/>
                <div className={["container"].join(' ')}>
                    <div className={["text-left"].join(' ')}>
                        <table className={["table table-dark table-responsive"].join(' ')}>
                            <thead className={["thead-dark",classes.tbleHeader].join(' ')} >
                                <tr>
                                  <th scope="col">IFSC</th>
                                  <th scope="col">Branch Name</th>
                                  <th scope="col">ID</th>
                                  <th scope="col">Branch</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">District</th>
                                  <th scope="col">State</th>
                                </tr>
                            </thead>
                           { 
                          this.state.pageOfItems.map(item =>
                            <tbody key={'i'+item.ifsc}>
                              <tr>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.ifsc}
                                    </Link>
                                  </td>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.bank_name}
                                    </Link>
                                  </td>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.bank_id}
                                    </Link>
                                  </td>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.branch}
                                    </Link>
                                  </td>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.address}
                                    </Link>
                                  </td>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.district}
                                    </Link>
                                  </td>
                                <td>
                                    <Link to={links.bankDetails(item.bank_id)}>
                                      {item.state}
                                    </Link>
                                  </td>
                              </tr>
                            </tbody>
                          )}
                        </table>
                        <Grid container
                              direction="row"
                              justify="space-between"
                              alignItems="center"
                              >
                          <Grid item>
                            <Pagination items={bank} onChangePage={this.onChangePage} 
                                        pageSize={Number(this.state.pageSize)}
                                        />
                          </Grid>
                          <Grid item>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel
                                ref={ref => {
                                  this.InputPageSizeRef = ref;
                                }}
                                htmlFor="pageDataSize"
                              />
                              <Select
                                native
                                value={this.state.pageSize}
                                onChange={this.handlePageSizeChange}
                                style={{ height: '30px' }}
                                input={
                                  <OutlinedInput
                                    name="pageSize"
                                    labelWidth={this.state.labelWidth}
                                    id="pageDataSize"
                                  />
                                }
                              >
                                {[10,50,100,200,500].map(pgSize => (
                                  <option key={pgSize + 'i'} value={pgSize} className={classes.selectPaddingOpt}>
                                    {pgSize}
                                  </option>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid> 
                    </div>
                </div>
                <br/><br/>
            </>
        )
      }
  }
}
function mapStateToProps(state) {
    return selectors.getAllValues(state);
  }
export default connect(mapStateToProps)(withStyles(styles)(Home));