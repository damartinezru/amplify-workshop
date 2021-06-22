{"filter":false,"title":"App.js","tooltip":"/ampli-project/src/App.js","undoManager":{"mark":60,"position":60,"stack":[[{"start":{"row":2,"column":0},"end":{"row":4,"column":45},"action":"insert","lines":["import { API } from 'aws-amplify'","// import query definition","import { listPosts } from './graphql/queries'"],"id":2}],[{"start":{"row":4,"column":45},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":6,"column":0},"end":{"row":28,"column":0},"action":"remove","lines":["function App() {","  return (","    <div className=\"App\">","      <header className=\"App-header\">","        <img src={logo} className=\"App-logo\" alt=\"logo\" />","        <p>","          Edit <code>src/App.js</code> and save to reload.","        </p>","        <a","          className=\"App-link\"","          href=\"https://reactjs.org\"","          target=\"_blank\"","          rel=\"noopener noreferrer\"","        >","          Learn React","        </a>","      </header>","    </div>","  );","}","","export default App;",""],"id":4},{"start":{"row":6,"column":0},"end":{"row":32,"column":2},"action":"insert","lines":["export default function App() {","  const [posts, setPosts] = useState([])","  useEffect(() => {","    fetchPosts();","  }, []);","  async function fetchPosts() {","    try {","      const postData = await API.graphql({ query: listPosts });","      setPosts(postData.data.listPosts.items)","    } catch (err) {","      console.log({ err })","    }","  }","  return (","    <div>","      <h1>Ampliyfoto</h1>","      {","        posts.map(post => (","          <div key={post.id}>","            <h3>{post.name}</h3>","            <p>{post.location}</p>","          </div>","        ))","      }","    </div>","  )","};"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["i"],"id":5},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["m"]},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["p"]},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["o"]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["r"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":[" "],"id":6},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["^"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["^"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["{"],"id":7},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["}"]}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["U"],"id":8},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["s"],"id":9},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["U"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":[" "],"id":10},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["f"]},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["r"]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["o"]},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["m"]}],[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":[" "],"id":11},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["r"]},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["e"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["a"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["c"]}],[{"start":{"row":5,"column":15},"end":{"row":5,"column":19},"action":"remove","lines":["reac"],"id":12},{"start":{"row":5,"column":15},"end":{"row":5,"column":20},"action":"insert","lines":["react"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":[";"],"id":13}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["u"],"id":14},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":10},"action":"remove","lines":["us"],"id":15},{"start":{"row":5,"column":8},"end":{"row":5,"column":17},"action":"insert","lines":["useEffect"]}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":[","],"id":16}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":[" "],"id":17},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["u"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["s"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":22},"action":"remove","lines":["use"],"id":18},{"start":{"row":5,"column":19},"end":{"row":5,"column":28},"action":"insert","lines":["useEffect"]}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["t"],"id":19},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["c"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["e"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["f"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["f"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["E"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["e"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["s"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["u"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["u"],"id":20},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["s"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":22},"action":"remove","lines":["use"],"id":21},{"start":{"row":5,"column":19},"end":{"row":5,"column":27},"action":"insert","lines":["useState"]}],[{"start":{"row":5,"column":40},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":22}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":39},"action":"remove","lines":["react"],"id":23}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":36},"action":"insert","lines":["''"],"id":24}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":37},"action":"insert","lines":["''"],"id":25}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":37},"action":"remove","lines":["''"],"id":26}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["r"],"id":27},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["e"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["a"]}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":38},"action":"remove","lines":["rea"],"id":28},{"start":{"row":5,"column":35},"end":{"row":5,"column":40},"action":"insert","lines":["react"]}],[{"start":{"row":5,"column":42},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":29}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["import { withAuthenticator } from '@aws-amplify/ui-react'",""],"id":30}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":14},"action":"remove","lines":["export default"],"id":31}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":[" "],"id":32}],[{"start":{"row":35,"column":2},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":14},"action":"insert","lines":["export default"],"id":34}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":[" "],"id":35}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":38},"action":"insert","lines":["withAuthenticator(App);"],"id":36}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["import { API } from 'aws-amplify'",""],"id":38},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["import { API, Auth } from 'aws-amplify'",""]}],[{"start":{"row":12,"column":17},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":39},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"insert","lines":["    checkUser(); // add this line for the new function call",""],"id":40}],[{"start":{"row":13,"column":6},"end":{"row":13,"column":8},"action":"remove","lines":["  "],"id":41},{"start":{"row":13,"column":4},"end":{"row":13,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":13,"column":59},"end":{"row":14,"column":0},"action":"remove","lines":["",""],"id":42}],[{"start":{"row":22,"column":3},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":43},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":23,"column":2},"end":{"row":28,"column":3},"action":"insert","lines":["  async function checkUser() {","    const user = await Auth.currentAuthenticatedUser();","    setCurrentUser(user.username);","    console.log('user: ', user);","    console.log('user attributes: ', user.attributes);","  }"],"id":44}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":4},"action":"remove","lines":["  "],"id":45}],[{"start":{"row":10,"column":40},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":11,"column":2},"end":{"row":12,"column":0},"action":"insert","lines":["  const [currentUser, setCurrentUser] = useState(null)",""],"id":47}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":4},"action":"remove","lines":["  "],"id":48}],[{"start":{"row":11,"column":54},"end":{"row":11,"column":55},"action":"insert","lines":[" "],"id":49}],[{"start":{"row":33,"column":25},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":50},{"start":{"row":34,"column":0},"end":{"row":34,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":34,"column":6},"end":{"row":35,"column":26},"action":"insert","lines":["<h1>Ampliyfoto</h1>","      Hello, {currentUser}"],"id":51}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["      <h1>Ampliyfoto</h1>",""],"id":52}],[{"start":{"row":0,"column":0},"end":{"row":47,"column":38},"action":"remove","lines":["import logo from './logo.svg';","import './App.css';","import { API, Auth } from 'aws-amplify'","// import query definition","import { listPosts } from './graphql/queries'","import {useEffect, useState} from 'react';","import { withAuthenticator } from '@aws-amplify/ui-react'","","","function App() {","  const [posts, setPosts] = useState([])","  const [currentUser, setCurrentUser] = useState(null) ","","  useEffect(() => {","    fetchPosts();","    checkUser(); // add this line for the new function call","  }, []);","  async function fetchPosts() {","    try {","      const postData = await API.graphql({ query: listPosts });","      setPosts(postData.data.listPosts.items)","    } catch (err) {","      console.log({ err })","    }","  }","  async function checkUser() {","    const user = await Auth.currentAuthenticatedUser();","    setCurrentUser(user.username);","    console.log('user: ', user);","    console.log('user attributes: ', user.attributes);","  }","  return (","    <div>","      <h1>Ampliyfoto</h1>","      Hello, {currentUser}","      {","        posts.map(post => (","          <div key={post.id}>","            <h3>{post.name}</h3>","            <p>{post.location}</p>","          </div>","        ))","      }","    </div>","  )","};","","export default withAuthenticator(App);"],"id":53},{"start":{"row":0,"column":0},"end":{"row":90,"column":0},"action":"insert","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import { API, Storage, Auth } from 'aws-amplify';","import { listPosts } from './graphql/queries';","import { css } from '@emotion/css';","","import Posts from './Posts';","import Post from './Post';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","  }, []);","  async function fetchPosts() {","    /* query the API, ask for 100 items */","    let postData = await API.graphql({ query: listPosts, variables: { limit: 100 }});","    let postsArray = postData.data.listPosts.items;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      if(post.image != null) {","        const imageKey = await Storage.get(post.image);","        post.image = imageKey;","      }","      return post;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <Post />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","          <AmplifySignOut />","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","`","","export default withAuthenticator(Router);",""]}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["import { API, Storage, Auth } from 'aws-amplify';",""],"id":54},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth } from 'aws-amplify';",""]}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":55}],[{"start":{"row":17,"column":0},"end":{"row":23,"column":3},"action":"insert","lines":["DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});"],"id":56}],[{"start":{"row":23,"column":3},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":57}],[{"start":{"row":0,"column":0},"end":{"row":98,"column":0},"action":"remove","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth } from 'aws-amplify';","import { listPosts } from './graphql/queries';","import { css } from '@emotion/css';","","import Posts from './Posts';","import Post from './Post';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","  }, []);","  async function fetchPosts() {","    /* query the API, ask for 100 items */","    let postData = await API.graphql({ query: listPosts, variables: { limit: 100 }});","    let postsArray = postData.data.listPosts.items;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      if(post.image != null) {","        const imageKey = await Storage.get(post.image);","        post.image = imageKey;","      }","      return post;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <Post />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","          <AmplifySignOut />","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","`","","export default withAuthenticator(Router);",""],"id":58}],[{"start":{"row":0,"column":0},"end":{"row":114,"column":0},"action":"insert","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth } from 'aws-amplify';","import { Post, PostStatus } from \"./models\";","import { css } from '@emotion/css';","","import Posts from './Posts';","import SinglePost from './SinglePost';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","  }, []);","  async function fetchPosts() {","    ","    /* check if user is logged in */","    let user = await Auth.currentAuthenticatedUser();","    Amplify.configure({","      aws_appsync_authenticationType: user != null ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY',","    });","    ","    /* query the API, ask for 100 items */","    let postData = await DataStore.query(Post);","    console.log('POST DATA FROM LOCAL: ');","    console.log(postData);","    let postsArray = postData;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      let copyPost = {...post};","      if(copyPost.image != null) {","        const imageKey = await Storage.get(copyPost.image);","        copyPost.image = imageKey;","      }","      return copyPost;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <hr className={dividerStyle} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <SinglePost />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","  width: 80vw;","  max-width: 690px;","  margin:auto;","  font-family:'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;","  background: #fff;","`","","export default withAuthenticator(Router);","",""],"id":59}],[{"start":{"row":0,"column":0},"end":{"row":114,"column":0},"action":"remove","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth } from 'aws-amplify';","import { Post, PostStatus } from \"./models\";","import { css } from '@emotion/css';","","import Posts from './Posts';","import SinglePost from './SinglePost';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","  }, []);","  async function fetchPosts() {","    ","    /* check if user is logged in */","    let user = await Auth.currentAuthenticatedUser();","    Amplify.configure({","      aws_appsync_authenticationType: user != null ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY',","    });","    ","    /* query the API, ask for 100 items */","    let postData = await DataStore.query(Post);","    console.log('POST DATA FROM LOCAL: ');","    console.log(postData);","    let postsArray = postData;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      let copyPost = {...post};","      if(copyPost.image != null) {","        const imageKey = await Storage.get(copyPost.image);","        copyPost.image = imageKey;","      }","      return copyPost;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <hr className={dividerStyle} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <SinglePost />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","  width: 80vw;","  max-width: 690px;","  margin:auto;","  font-family:'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;","  background: #fff;","`","","export default withAuthenticator(Router);","",""],"id":60}],[{"start":{"row":0,"column":0},"end":{"row":119,"column":0},"action":"insert","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth } from 'aws-amplify';","import { Post, PostStatus } from \"./models\";","import { css } from '@emotion/css';","","import Posts from './Posts';","import SinglePost from './SinglePost';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","      const subscription = DataStore.observe(Post).subscribe(msg => {","        console.log(msg.model, msg.opType, msg.element);","        fetchPosts();","      });","      return () => subscription.unsubscribe();","  }, []);","  async function fetchPosts() {","    ","    /* check if user is logged in */","    let user = await Auth.currentAuthenticatedUser();","    Amplify.configure({","      aws_appsync_authenticationType: user != null ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY',","    });","    ","    /* query the API, ask for 100 items */","    let postData = await DataStore.query(Post);","    console.log('POST DATA FROM LOCAL: ');","    console.log(postData);","    let postsArray = postData;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      let copyPost = {...post};","      if(copyPost.image != null) {","        const imageKey = await Storage.get(copyPost.image);","        copyPost.image = imageKey;","      }","      return copyPost;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <hr className={dividerStyle} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <SinglePost />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","  width: 80vw;","  max-width: 690px;","  margin:auto;","  font-family:'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;","  background: #fff;","`","","export default withAuthenticator(Router);","",""],"id":61}],[{"start":{"row":0,"column":0},"end":{"row":119,"column":0},"action":"remove","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth } from 'aws-amplify';","import { Post, PostStatus } from \"./models\";","import { css } from '@emotion/css';","","import Posts from './Posts';","import SinglePost from './SinglePost';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","      const subscription = DataStore.observe(Post).subscribe(msg => {","        console.log(msg.model, msg.opType, msg.element);","        fetchPosts();","      });","      return () => subscription.unsubscribe();","  }, []);","  async function fetchPosts() {","    ","    /* check if user is logged in */","    let user = await Auth.currentAuthenticatedUser();","    Amplify.configure({","      aws_appsync_authenticationType: user != null ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY',","    });","    ","    /* query the API, ask for 100 items */","    let postData = await DataStore.query(Post);","    console.log('POST DATA FROM LOCAL: ');","    console.log(postData);","    let postsArray = postData;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      let copyPost = {...post};","      if(copyPost.image != null) {","        const imageKey = await Storage.get(copyPost.image);","        copyPost.image = imageKey;","      }","      return copyPost;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <hr className={dividerStyle} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <SinglePost />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","  width: 80vw;","  max-width: 690px;","  margin:auto;","  font-family:'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;","  background: #fff;","`","","export default withAuthenticator(Router);","",""],"id":62}],[{"start":{"row":0,"column":0},"end":{"row":119,"column":0},"action":"insert","lines":["import React, { useState, useEffect } from \"react\";","import {","  HashRouter,","  Switch,","  Route","} from \"react-router-dom\";","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import Amplify, { DataStore, syncExpression, Predicates, SortDirection,  Storage, Auth, Analytics } from 'aws-amplify';","import { Post, PostStatus } from \"./models\";","import { css } from '@emotion/css';","","import Posts from './Posts';","import SinglePost from './SinglePost';","import Header from './Header';","import CreatePost from './CreatePost';","import Button from './Button';","","DataStore.configure({","  syncExpressions: [","    syncExpression(Post, () => {","      return post => post.status('eq', PostStatus.ACTIVE)","    })","  ]","});","","function Router() {","  /* create a couple of pieces of initial state */","  const [showOverlay, updateOverlayVisibility] = useState(false);","  const [posts, updatePosts] = useState([]);","  const [myPosts, updateMyPosts] = useState([]);","","  /* fetch posts when component loads */","  useEffect(() => {","      fetchPosts();","      const subscription = DataStore.observe(Post).subscribe(msg => {","        console.log(msg.model, msg.opType, msg.element);","        fetchPosts();","      });","      return () => subscription.unsubscribe();","  }, []);","  async function fetchPosts() {","    ","    /* check if user is logged in */","    let user = await Auth.currentAuthenticatedUser();","    Amplify.configure({","      aws_appsync_authenticationType: user != null ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY',","    });","    ","    /* query the API, ask for 100 items */","    let postData = await DataStore.query(Post);","    console.log('POST DATA FROM LOCAL: ');","    console.log(postData);","    let postsArray = postData;","    /* map over the image keys in the posts array, get signed image URLs for each image */","    postsArray = await Promise.all(postsArray.map(async post => {","      let copyPost = {...post};","      if(copyPost.image != null) {","        const imageKey = await Storage.get(copyPost.image);","        copyPost.image = imageKey;","      }","      return copyPost;","    }));","    /* update the posts array in the local state */","    setPostState(postsArray);","  }","  async function setPostState(postsArray) {","    const user = await Auth.currentAuthenticatedUser();","    const myPostData = postsArray.filter(p => p.owner === user.username);","    updateMyPosts(myPostData);","    updatePosts(postsArray);","  }","  return (","    <>","      <HashRouter>","          <div className={contentStyle}>","            <Header />","            <hr className={dividerStyle} />","            <Button title=\"New Post\" onClick={() => updateOverlayVisibility(true)} />","            <hr className={dividerStyle} />","            <Switch>","              <Route exact path=\"/\" >","                <Posts posts={posts} />","              </Route>","              <Route path=\"/post/:id\" >","                <SinglePost />","              </Route>","              <Route exact path=\"/myposts\" >","                <Posts posts={myPosts} />","              </Route>","            </Switch>","          </div>","        </HashRouter>","        { showOverlay && (","          <CreatePost","            updateOverlayVisibility={updateOverlayVisibility}","            updatePosts={setPostState}","            posts={posts}","          />","        )}","    </>","  );","}","","const dividerStyle = css`","  margin-top: 15px;","`","","const contentStyle = css`","  min-height: calc(100vh - 45px);","  padding: 0px 40px;","  width: 80vw;","  max-width: 690px;","  margin:auto;","  font-family:'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;","  background: #fff;","`","","export default withAuthenticator(Router);","",""],"id":63}]]},"ace":{"folds":[],"scrolltop":1607,"scrollleft":0,"selection":{"start":{"row":119,"column":0},"end":{"row":119,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":130,"mode":"ace/mode/javascript"}},"timestamp":1623371323284,"hash":"8b380f694c1145455aedf852f2dc1a27da1218db"}