import React from "react";
import { request } from "./api/ApiUtils";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
class UserSave extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            username: ""
        }

    }

    editHandleInputChange = (event) => {
        const target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({[name] : value});
      };

    saveUser = (e) => {
        e.preventDefault();
        let payload = {
            username: this.state.username,
            surname: this.state.surname,
            name: this.state.name
        }
        let params = {
            url: `/v1/users`,
            method: "post",
            data: payload
        }
        request(params)
            .then(function (response) {
                console.log("Kullanıcı Kaydedildi");
            }).catch(function (error) {
                console.log("Hatalı işlem");
            })
    }

    render() {
        return (
            <>
            <div> 
                <br></br>
                <br></br>
                <h1>Kullancı Kayıt Sayfası</h1>
                <br></br>
                <br></br>
                <br></br>
            </div>
                <div className="container">
                    <Form>
                        <FormGroup row className={"name"}>
                            <Label sm={4}>Adınız </Label>
                            <Col sm={8}>
                                <Input
                                    placeholder={"Adınızı giriniz."}
                                    className={'name'}
                                    autoComplete="off"
                                    autoFocus
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.editHandleInputChange}
                                    type="text" />
                            </Col>

                        </FormGroup>
                        <FormGroup row className={"surname"}>
                            <Label sm={4}>Soyadınız </Label>
                            <Col sm={8}>
                                <Input
                                    placeholder={"Soyadınızı giriniz."}
                                    className={'surname'}
                                    autoComplete="off"
                                    autoFocus
                                    id="surname"
                                    name="surname"
                                    value={this.state.surname}
                                    onChange={this.editHandleInputChange}
                                    type="text" />
                            </Col>

                        </FormGroup>
                        <FormGroup row className={"username"}>
                            <Label sm={4}>Kullanıcı Adınız </Label>
                            <Col sm={8}>
                                <Input
                                    placeholder={"Kullanıcı adınız giriniz."}
                                    className={'username'}
                                    autoComplete="off"
                                    autoFocus
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.editHandleInputChange}
                                    type="text" />
                            </Col>

                        </FormGroup>
                        <div className="text-center">
                            <Button onClick={this.saveUser}>Kaydet
                            </Button>
                        </div>
                    </Form>
                </div>
            </>
        );
    }
}

export default UserSave;