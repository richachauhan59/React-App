
// import React from 'react';

// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dept1: 'all',
//             salary1: 'all'
//         }
//     }
//     deptc = (e) => {
//         this.setState({ dept1: e.target.value })
//     }
//     orderc = (e) => {
//         this.setState({ salary1: e.target.value })
//     }
//     deleter = (ind) => {
//         this.props.name.splice(ind, 1);
//         this.setState({});
//     }




//     editer = (ind) => {
//         var name = prompt("Enter your name", "name");
//         var age = Number(prompt("Enter your age", "23"));
//         var address = prompt("Enter your address", "address");
//         var dept = prompt("Enter I.T, Sales or Marketing", "Dept");
//         var salary = Number(prompt("Enter your salary", "233343"));
//         var marital = prompt("Are u married ?");
//         marital = (marital === "yes" ? true : false);
//         var obj = { 'name': name, 'age': age, 'address': address, 'dept': dept, 'salary': salary, 'marital': marital };
//         this.props.name[ind] = obj;
//         this.setState({});
//     }


//     render() {
//         console.log(this.props.name)
//         return (
//             <div>
//                 Sort by Dept:<select name="dept1" onChange={this.deptc}>
//                     <option value="all">all</option>
//                     <option value="I.T.">I.T.</option>
//                     <option value="Sales">Sales</option>
//                     <option value="Marketing">Marketing</option>
//                 </select>
//             Sort by Salary:<select name="order" onChange={this.orderc}>
//                     <option value="all">all</option>
//                     <option value="asc">Ascending</option>
//                     <option value="des">Descending</option>
//                 </select>
//                 <table>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Address</th>
//                         <th>Dept</th>
//                         <th>Salary</th>
//                         <th>Marital Status</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                     {
//                         this.props.name.sort((a, b) => {
//                             if (this.state.salary1 === 'asc') {
//                                 return a.salary - b.salary;
//                             }
//                             else if (this.state.salary1 === 'des') {
//                                 return b.salary - a.salary;
//                             }
//                             return;
//                         }).filter((item) => {
//                             console.log(this.state.dept1);
//                             if (this.state.dept1 === 'all') {
//                                 return true;
//                             }
//                             else if (this.state.dept1 === item.dept) {
//                                 return true;
//                             }
//                             return false;
//                         }).map((item1, index) => {
//                             return (
//                                 <tr>
//                                     <td>{item1.name}</td>
//                                     <td>{item1.age}</td>
//                                     <td>{item1.address}</td>
//                                     <td>{item1.dept}</td>
//                                     <td>{item1.salary}</td>
//                                     <td>{item1.marital ? "Married" : "Not Married"}</td>
//                                     <td><button value="edit">EDIT</button></td>
//                                     <td><button value="delete" onClick={() => this.deleter(index)}>DELETE</button></td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </table>
//             </div>
//         )
//     }
// }
// export default Tableimport React from 'react';
// import Style from '../form.css'

// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dept1: 'all',
//             salary1: 'all'
//         }
//     }
//     deptc = (e) => {
//         this.setState({ dept1: e.target.value })
//     }
//     orderc = (e) => {
//         this.setState({ salary1: e.target.value })
//     }
//     deleter = (ind) => {
//         this.props.name.splice(ind, 1);
//         this.setState({});
//     }



//     editer = (ind) => {
//         var name = prompt("Enter your name", "name");
//         var age = Number(prompt("Enter your age", "23"));
//         var address = prompt("Enter your address", "address");
//         var dept = prompt("Enter I.T, Sales or Marketing", "Dept");
//         var salary = Number(prompt("Enter your salary", "233343"));
//         var marital = prompt("Are u married ?");
//         marital = (marital === "yes" ? true : false);
//         var obj = { 'name': name, 'age': age, 'address': address, 'dept': dept, 'salary': salary, 'marital': marital };
//         this.props.name[ind] = obj;
//         this.setState({});
//     }


//     render() {
//         console.log(this.props.name)
//         return (
//             <div>


//                 <table className={Style.table} >
//                     <tr>
//                         <td>Sort by Dept:</td>
//                         <td><select name="dept1" onChange={this.deptc}>
//                             <option value="all">all</option>
//                             <option value="I.T.">I.T.</option>
//                             <option value="Sales">Sales</option>
//                             <option value="Marketing">Marketing</option>
//                         </select></td>
//                     </tr>
//                     <tr>
//                         <td> Sort by Salary:</td>
//                         <td><select name="order" onChange={this.orderc}>
//                             <option value="all">all</option>
//                             <option value="asc">Ascending</option>
//                             <option value="des">Descending</option>
//                         </select></td>
//                     </tr>

//                 </table>



//                 <table className={Style.table} >
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Address</th>
//                         <th>Dept</th>
//                         <th>Salary</th>
//                         <th>Marital Status</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                     {
//                         this.props.name.sort((a, b) => {
//                             if (this.state.salary1 === 'asc') {
//                                 return a.salary - b.salary;
//                             }
//                             else if (this.state.salary1 === 'des') {
//                                 return b.salary - a.salary;
//                             }
//                             return;
//                         }).filter((item) => {
//                             console.log(this.state.dept1);
//                             if (this.state.dept1 === 'all') {
//                                 return true;
//                             }
//                             else if (this.state.dept1 === item.dept) {
//                                 return true;
//                             }
//                             return false;
//                         }).map((item1, index) => {
//                             return (
//                                 <tr>
//                                     <td>{item1.name}</td>
//                                     <td>{item1.age}</td>
//                                     <td>{item1.address}</td>
//                                     <td>{item1.dept}</td>
//                                     <td>{item1.salary}</td>
//                                     <td>{item1.marital ? "Married" : "Not Married"}</td>
//                                     <td><button value="edit">EDIT</button></td>
//                                     <td><button value="delete" onClick={() => this.deleter(index)}>DELETE</button></td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </table>
//             </div>
//         )
//     }
// }
// export default Table