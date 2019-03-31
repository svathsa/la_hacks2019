import React, { Component } from 'react';
import Navbar from './Navbar'
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'
import './EditProfile.css';

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }



class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        }
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeEducation = this.handleChangeEducation.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeZip = this.handleChangeZip.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sumbitExperience = this.sumbitExperience.bind(this);
      }

      handleChangeName(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              name: event.target.value
            }
        });
    }
    handleChangeEmail(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              email: event.target.value
            }
        });
    }
    handleChangeAge(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              age: event.target.value
            }
        });
    }
    handleChangeEducation(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              education: event.target.value
            }
        });
    }
    handleChangeRole(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              role: event.target.value
            }
        });
    }
    handleChangeCity(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              city: event.target.value
            }
        });
    }
    handleChangeZip(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              zip: event.target.value
            }
        });
    }
    handleChangeRating(event) {
        this.setState({
            profile: {
              ...this.state.profile,
              rating: event.target.value
            }
        });
    }

    sumbitExperience() {
        var exTitle= document.getElementById("title").value;
        var exRole= document.getElementById("role").value;
        var exDescription= document.getElementById("description").value;
        var exLocation= document.getElementById("location").value;
        var exDuration= document.getElementById("duration").value;

        var experience = {
            title: exTitle,
            role: exRole,
            description: exDescription,
            location: exLocation,
            duration: exDuration
        }

        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('Users/' + userId + '/work_experience/'+exTitle).set({
                    title: exTitle,
                    role: exRole,
                    description: exDescription,
                    location: exLocation,
                    duration: exDuration
                },
                (error) => {
                    if (error) {
                      console.log("Error!");
                    } else {
                        console.log("Data saved successfully!")
                    }
                  });
    }
    
      handleSubmit(event) {
        alert('Your profile has been updated successfully!');
        event.preventDefault();

        var updates = {};
        var userId = firebase.auth().currentUser.uid;
        updates['/Users/' + userId] = this.state.profile;
        firebase.database().ref().update(updates);
      }

    componentWillMount() {
        
        var user = firebase.database().ref('Users/' + this.props.id);
        user.once('value', function(snapshot) {
            console.log(snapshot.val());
            
            
        }).then((snapshot) => {
            this.setState({
                profile: snapshot.val()
            })
            
        })
        
        // API Call to find data using the id above 
        // Store result of query in a variable called user
        // DONT REMOVE COMMENTED CODE BELOW
        // this.setState({
        //     profile: {
        //         first_name: 'Neeraj',
        //         last_name: 'Samtani',
        //         age: 18
        //     }
        // })
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        //     .then(res => {
        //         this.setState({
        //             post: res.data
        //         })
        //     })
    }

    render() {
            const post = this.state.profile ? (
            <div className="CompletePage">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.profile.name} onChange={this.handleChangeName} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.profile.email} onChange={this.handleChangeEmail} />
                </label>
                <label>
                    Age:
                    <input type="text" value={this.state.profile.age} onChange={this.handleChangeAge} />
                </label>
                <label>
                    Education:
                    <input type="text" value={this.state.profile.education} onChange={this.handleChangeEducation} />
                </label>
                <label>
                    Role:
                    <input type="text" value={this.state.profile.role} onChange={this.handleChangeRole} />
                </label>
                <label>
                    City:
                    <input type="text" value={this.state.profile.city} onChange={this.handleChangeCity} />
                </label>
                <label>
                    Zip:
                    <input type="text" value={this.state.profile.zip} onChange={this.handleChangeZip} />
                </label>
                <label>
                    Rating:
                    <input type="text" value={this.state.profile.rating} onChange={this.handleChangeRating} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Add Experience</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-5">
                    <i class="fas fa-user prefix grey-text"></i>
                    <input type="text" id="title" class="form-control validate" />
                    <label data-error="wrong" data-success="right" for="form34">Title</label>
                    </div>

                    <div class="md-form mb-5">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="text" id="role" class="form-control validate" />
                    <label data-error="wrong" data-success="right" for="form29">Role</label>
                    </div>

                    <div class="md-form mb-5">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="description" class="form-control validate" />
                    <label data-error="wrong" data-success="right" for="form32">Description</label>
                    </div>

                    <div class="md-form mb-5">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="location" class="form-control validate" />
                    <label data-error="wrong" data-success="right" for="form32">Location</label>
                    </div>

                    <div class="md-form mb-5">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="duration" class="form-control validate" />
                    <label data-error="wrong" data-success="right" for="form32">Duration</label>
                    </div>


                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-unique" onClick={this.sumbitExperience}>Submit <i class="fas fa-paper-plane-o ml-1"></i></button>
                </div>
                </div>
            </div>
            </div>

            <div class="text-center">
            <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Add Experience</a>
            </div>
            </div>
            ):(
                <div className="center">Loading ...</div>
            )
            return (
                <div>
                    {post}
                </div>
            )
    }
}

export default EditProfile