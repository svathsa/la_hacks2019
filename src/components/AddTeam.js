import React, {Component} from 'react'

class AddTeam extends Component {
    state = {
        name: '',
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTeam(this.state);
        this.setState({
            name: ''
        });
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="button" className="teamButton" id="teamButtonText" data-toggle="modal" data-target="#exampleModalCenter">
                                + Add Team
                            </button>
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Team Name</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                        <input type="text" onChange={this.handleChange} value={this.state.name} />
                                        </div>
                                        <button onClick={this.handleSubmit} type="button" class="btn btn-primary" data-dismiss="modal">Create Team</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTeam;