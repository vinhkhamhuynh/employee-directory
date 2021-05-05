
import React, { Component } from 'react';
import EmpAPI from '../utils/EmpAPI';
import EmpDetails from './EmpDetails';
import SearchBar from './SearchBar';


class EmpInfo extends Component {
    state = {
        list: [],
        search: ""
    };

    //API call everytime the page loads
    componentDidMount() {
      this.getEmployees();
    };

    getEmployees = query => {
        EmpAPI.search(query)
        .then(res =>
            this.setState({ list: res.data.results }))
        .catch(err => console.log(err));
    };

    handleInputChange = (e) => {
        this.setState({search:e.target.value, isFiltered: true});
    };

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
       
            <div>
                <SearchBar
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleSearch={this.handleSearch}
                />

                 <div className="mt-4 table-responsive">
           <table className="table table-striped">

                <thead>
                    <tr>
                        <th scope="col">Profile</th>

                        <th scope="col"
                            onClick={() => console.log("hello")}
                            className="sortBtn">
                            First Name
        </th>

                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>

                <tbody>

                    {this.state.list.filter((list) => {
                        if (!this.state.search) {
                            return list
                        }
                        else if (list.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || list.name.last.toLowerCase().includes(this.state.search.toLowerCase())) {
                            return list
                        }
                    })
                        .map(result => (

                            <EmpDetails
                                id={result.login.uuid}
                                image={result.picture.medium}
                                first={result.name.first}
                                last={result.name.last}
                                email={result.email}
                            />
                        ))}


                </tbody>
</table> 
        </div >
        </div >
    )
    }

}

export default EmpInfo;