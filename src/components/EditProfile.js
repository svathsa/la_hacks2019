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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitExperience = this.submitExperience.bind(this);
        this.submitSkill = this.submitSkill.bind(this);
        this.submitLink = this.submitLink.bind(this);
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

    submitExperience() {
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
                        console.log("Experience saved successfully!")
                    }
                  });
    }

    submitSkill() {
        var newSkill= document.getElementById("skill").value;
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('Users/' + userId + '/skills/'+newSkill).set({
                    name: newSkill
                },
                (error) => {
                    if (error) {
                      console.log("Error!");
                    } else {
                        console.log("Skill saved successfully!")
                    }
                  });
    }

    submitLink() {
        var newLink= document.getElementById("link").value;
        var userId = firebase.auth().currentUser.uid;
        var date = new Date();
        var timestamp = date.getTime();
        var uniqueid= timestamp.toString();
        
        firebase.database().ref('Users/' + userId + '/links/'+uniqueid).set({
                    name: newLink
                },
                (error) => {
                    if (error) {
                      console.log("Error!");
                    } else {
                        console.log("Link saved successfully!")
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
            <div class="head">
                <h>Edit Profile</h>
            </div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" class = "random-placeholder" value={this.state.profile.name} onChange={this.handleChangeName} placeholder="Name.."/>
                </label>
                <br />
                <label>
                    <input type="text" class = "random-placeholder" value={this.state.profile.email} onChange={this.handleChangeEmail} placeholder="Email.."/>
                </label>
                <br />
                <label> 
                    <input type="text" class = "random-placeholder" value={this.state.profile.age} onChange={this.handleChangeAge} placeholder="Age.."/>
                </label>
                <br />
                <label>
                    <input type="text" class = "random-placeholder" value={this.state.profile.education} onChange={this.handleChangeEducation} placeholder="Education.."/>
                </label>
                <br />
                {/* <label>
                    <input type="text" value={this.state.profile.role} onChange={this.handleChangeRole} placeholder="Role.."/>
                </label>
                <br /> */}
                <label onChange={this.handleChangeRole} >
                    <select name="role" id = "role-special-width" class="input-type-text">
                        {
                            console.log(this.state.profile.role)
                        }
                        {
                            (this.state.profile.role === "Producer") ? (
                                <option value="Producer" selected >Producer</option>
                            ) : (
                                <option value="Producer">Producer</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Director") ? (
                                <option value="Director" selected >Director</option>
                            ) : (
                                <option value="Director">Director</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Actor") ? (
                                <option value="Actor" selected >Actor</option>
                            ) : (
                                <option value="Actor">Actor</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Writer") ? (
                                <option value="Writer" selected >Writer</option>
                            ) : (
                                <option value="Writer">Writer</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Editor") ? (
                                <option value="Editor" selected >Editor</option>
                            ) : (
                                <option value="Editor">Editor</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Cinematographer") ? (
                                <option value="Cinematographer" selected >Cinematographer</option>
                            ) : (
                                <option value="Cinematographer">Cinematographer</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Stuntman") ? (
                                <option value="Stuntman" selected >Stuntman</option>
                            ) : (
                                <option value="Stuntman">Stuntman</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Make-up Artist") ? (
                                <option value="Make-up Artist" selected >Make-up Artist</option>
                            ) : (
                                <option value="Make-up Artist">Make-up Artist</option>
                            )
                        }
                        {
                            (this.state.profile.role === "Music Director") ? (
                                <option value="Music Director" selected >Music Director</option>
                            ) : (
                                <option value="Music Director">Music Director</option>
                            )
                        }
                    </select>
                </label>
                <br />
                <label>
                    <input type="text" class = "random-placeholder" value={this.state.profile.city} onChange={this.handleChangeCity} placeholder="City.."/>
                </label>
                <br />
                <label>
                    <input type="text" class = "random-placeholder" value={this.state.profile.zip} onChange={this.handleChangeZip} placeholder="Zip Code.."/>
                </label>
                <br />

              
                 <input type="submit" value="Submit" />
          
            </form>
            <div class="modal fade" id="addExperienceForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header text-center">          
                    <h4 class="modal-title">Add Experience</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button> 
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-3">
                    <i class="fas fa-user prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="form34">&nbsp;&nbsp;Title</label>
                    <input type="text" id="title" class="form-control validate" />
                    </div>

                    <div class="md-form mb-3">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="form29">&nbsp;&nbsp;Role</label>
                    <input type="text" id="role" class="form-control validate" />   
                    </div>

                    <div class="md-form mb-3">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="form32">&nbsp;&nbsp;Description</label>
                    <input type="text" id="description" class="form-control validate" />  
                    </div>

                    <div class="md-form mb-3">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="form32">&nbsp;&nbsp;Location</label>
                    <input type="text" id="location" class="form-control validate" />    
                    </div>

                    <div class="md-form  mb-3">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="form32">&nbsp;&nbsp;Duration</label>
                    <input type="text" id="duration" class="form-control validate" />
                    </div>


                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-unique update-profile-submit " data-dismiss="modal" onClick={this.submitExperience}>Submit <i class="fas fa-paper-plane-o ml-1"></i></button>
                </div>
                </div>
            </div>
            </div>

            <div class="text-center">
            <a href="" id="experienceButton" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#addExperienceForm">Add Experience</a>
            </div>

            <div class="modal fade" id="addSkillForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title">Add Skill</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-2">
                    <i class="fas fa-user prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="form32">&nbsp;&nbsp;Skill</label>
                    <input type="text" id="skill" class="form-control validate" />
                    </div>


                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-unique update-profile-submit" data-dismiss="modal" onClick={this.submitSkill}>Submit <i class="fas fa-paper-plane-o ml-1"></i></button>
                </div>
                </div>
            </div>
            </div>

            <div class="text-center">
            <a href="" id="experienceButton" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#addSkillForm">Add Skill</a>
            </div>

            <div class="modal fade" id="addLinkForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title">Add Link</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-2">
                    <i class="fas fa-user prefix grey-text"></i> 
                    <label data-error="wrong" data-success="right" for="form32">&nbsp;&nbsp;Link</label>
                    <input type="text" id="link" class="form-control validate" />
                    </div>


                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-unique update-profile-submit" data-dismiss="modal" onClick={this.submitLink}>Submit <i class="fas fa-paper-plane-o ml-1"></i></button>
                </div>
                </div>
            </div>
            </div>

            <div class="text-center">
            <a href="" id="experienceButton" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#addLinkForm">Add Link</a>
            </div>
            </div>
            
            ):(
                <div className="center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            )
            return (
                <div>
                    {post}
                </div>
            )
    }
}

export default EditProfile