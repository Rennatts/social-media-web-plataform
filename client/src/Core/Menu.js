import React from 'react';
import { NavLink, Link, withRouter, useHistory } from 'react-router-dom';
import { isAuthenticated, signout, brandSignout  } from './../auth/index';
import './Menu.css';


const Menu = ({ currentUser }) => {
    let history = useHistory();

    console.log(isAuthenticated());

    return (
        <div className="main_nav">
            {!isAuthenticated() && (
                <> 
                </>
            )}   
            
            {isAuthenticated() && (
                <>
                <div className='nav'>
                    {/* <NavLink
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#a4f5e5",

                    }}
                    className="nav_link_active" 
                    href="#"
                    >
                        <i className="fas fa-home"></i>
                    </NavLink> */}

                    <NavLink 
                        exact to="/allusers" 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        className="nav_link_active" 
                        href="#"><i className="fas fa-users"></i>Users
                    </NavLink>

                    <NavLink exact to={`/posts/feed/${isAuthenticated().user._id}`}  
                        className="nav_link_active"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        href="#"><i className="fas fa-mail-bulk"></i>
                        Feed
                    </NavLink>  
                    <NavLink 
                        exact to={`/posts/allposts`}  
                        className="nav_link_active"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        href="#"><i className="fas fa-photo-video"></i>Posts
                    </NavLink> 
                </div>

                <div className='right_nav'>
                    <NavLink exact to={`/post/create`}  
                        className="nav_link_active"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        href="#"><i className="far fa-plus-square"></i>
                    </NavLink> 

                    {/* <NavLink to="/notifications" className="nav_link_active"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        href="#"><i className="far fa-bell"></i>
                    </NavLink>  */}

                    {/* <NavLink to="/notifications/" className="nav_link_active"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        href="#"><i className="fas fa-folder-plus"></i>
                    </NavLink>  */}

                    <NavLink exact to={`/user/${isAuthenticated().user._id}`}  
                        className="nav_link_active"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        href="#">
                        {`${isAuthenticated().user.name}´s profile`} 
                    </NavLink> 

                    <NavLink to={"/#"}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#a4f5e5"
                        }}
                        className="nav_link_active" 
                        onClick={()=> signout(()=> history.push('/'))}>
                            <i className="fas fa-sign-out-alt"></i>
                    </NavLink>
                </div>
                </>

            )}  
        </div>
    )
}



export default withRouter(Menu);