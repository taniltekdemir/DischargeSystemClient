import React from "react";
class DebtInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSelected: false
        }
    }


    render() {
        return (
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
                    {/* <td>
                    <button type="button" className="btn btn-danger" onClick={this.handleRemoveClick}>Çıkar</button>
                </td> */}
                </tr>
            </>
        );
    }
}

export default DebtInfo;