
import React from "react";
import { request } from "./api/ApiUtils";
class CollectionInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSelected: false
        }
    }

    handleCollectionClick = (debtId) => {
        console.log("click")
        let self = this;
        let formData = new FormData();
        formData.append("userId", this.props.userId);
        formData.append("debtId", debtId);
        let params = {
            url: `/v1/receipts`,
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
            <tr>
                <td>
                    {this.props.debt.id}
                </td>
                <td>
                    {this.props.debt.principalDebt} TL
                </td>
                <td>
                    {this.props.debt.dueDate.substring(0,10)}
                </td>
                <td>
                    {this.props.debt.amountOfDebt} TL
                </td>
                <td>
                    {this.props.debt.typeOfDebt}
                </td>
                <td>
                    {this.props.debt.recordDate}
                </td>
                /<td>
                <button type="button" className="btn btn-danger" onClick={() => this.handleCollectionClick(this.props.debt.id)}>Tahsilat Yap</button>
            </td> 
            </tr>
        </>
        );
    }
}

export default CollectionInfo;