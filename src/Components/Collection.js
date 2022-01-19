import React from "react";
import { Col, FormGroup, Button, Form } from "reactstrap";
import { Table } from 'react-bootstrap';
import Select from "react-select";
import { request } from "./api/ApiUtils";
import DebtInfo from "./DebtInfo";
import CollectionInfo from "./CollectionInfo";

class Collection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            selectedUser: "",
            debtList: [],


        }

    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        let self = this;
        let params = {
            url: `/v1/users`,
            method: "get",
        }
        request(params)
            .then(function (response) {
                if (response.data && response.data.length > 0) {
                    let options = [];
                    response.data.map((user) => {
                        options.push({ value: user.id, label: user.username })
                    })
                    self.setState({ userList: options });
                }
            })
            .catch(function (error) {
            });
    }

    getAllDebtsByUserId = () => {
        let self = this;
        let formData = new FormData();
        formData.append("userId", self.state.selectedUser);
        let params = {
            url: `/v1/debts/getAllByUserId`,
            method: "post",
            data: formData
        }
        request(params)
            .then(function (response) {
                if (response.data && response.data.length > 0) {
                    self.setState({ debtList: response.data })
                }
            })
            .catch(function (error) {
            });
    }


    render(){
        return(
            <>
            <div>
                    <br></br>
                    <br></br>
                <h1>Tahsilat İşlemleri</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className="container">
                <Form>
                    <FormGroup row className={"name"}>
                        <Col sm={8}>
                            <Select value={this.state.selectedUser.label}
                                clearable={false}
                                options={this.state.userList}
                                placeholder="Kullanıcı Seçiniz"
                                onChange={(e) => {
                                    this.setState({ selectedUser: e.value })
                                }} />
                        </Col>
                        <Col sm={4}>
                            <Button
                                disable={!this.state.selectedUser && this.state.selectedUser === ""}
                                className="submitButton"
                                onClick={() => this.getAllDebtsByUserId()}>
                                <i className="fa fa-search" />
                                Borçlarını Getir
                            </Button>
                        </Col>

                    </FormGroup>
                </Form>
            </div>

            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className="container">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ana Borç Miktarı</th>
                            <th>Vade Günü</th>
                            <th>Kalan Miktarı</th>
                            <th>Borç Türü</th>
                            <th>Kayıt Tarihi</th>
                        </tr>
                    </thead>

                    
                    <tbody>

                        {this.state.debtList.map(item => <CollectionInfo
                            key={this.state.debtList.indexOf(item)}
                            userId={this.state.selectedUser}
                            index={this.state.debtList.indexOf(item) + 1}
                            debt={item}
                        ></CollectionInfo>
                        )}

                    </tbody>



                </Table>
            </div>
        </>
        );
    }
}

export default Collection;