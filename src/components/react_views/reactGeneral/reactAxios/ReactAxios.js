import React, { lazy } from "react";
import "./reactAxios.css";
const CodeBlock = lazy(() =>
  import("../../../../generalComponents/codeBlock/CodeBlock")
);

function ReactAxios() {
  return (
    <div className='axios_container'>
      <div className='axios_header_box'>
        <h3>ReactAxios</h3>
      </div>
      <div className='axios_section_box'>
        <div className='axios_section_header'>
          <h4>Axios React – How to Make Get, Post, and Delete API Requests</h4>
        </div>
        <div className='axios_section_body'>
          <div>
            <p>
              Axios is an HTTP client library based on promises. It makes
              sending asynchronous HTTP requests to REST endpoints easier and
              helps you perform CRUD operations.
            </p>
            <p>
              This REST endpoint/API could be an external API like the Google
              API, GitHub API, and so on – or it could be your own backend
              Node.js server.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div className='axios_section_header'>
          <h4>Why Axios?</h4>
        </div>
        <div className='axios_section_body'>
          <ul>
            <li>
              Axios uses XMLHttpRequest under the hood, and it is widely
              supported by most browsers, including older ones like Internet
              Explorer 11. Fetch(), on the other hand, is only compatible with
              Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.3+ (you can see
              the full compatibly table on CanIUse.com).
            </li>
            <li>
              When sending requests, Axios automatically signifies the data,
              unlike fetch(), which requires us to do it manually.
            </li>
            <li>
              Unlike the Fetch API, which requires you to check the status code
              and throw the error yourself, Axios has better error handling and
              can throw 400 and 500 range errors.
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div className='axios_section_header'>
          <h4>Get Started</h4>
        </div>
        <div className='axios_section_body'>
          <div>
            <p>1:Install axios</p>

            <p>npm install axios</p>
          </div>
          <div>
            <p>
              <span>2:</span>create axios Instance
            </p>

            <CodeBlock
              leng={"javascript"}
              code={
                'const client = axios.create({" baseURL: https://jsonplaceholder.typicode.com/posts"});'
              }
            />
          </div>
          <div></div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div className='axios_section_header'>
          <h3>CRUD Operations</h3>
        </div>
        <div>
          <div className='header'>
            <h4>GET</h4>
          </div>
          <div className='axios_section_body'>
            <p>
              use the Axios instance that you created and attach the .get()
              method to make a GET request to the endpoint/API. Then use a
              .then() callback to get back all the response data. Using the
              .data property, you will obtain the response data, which is the
              actual data from the response object.
            </p>

            <CodeBlock
              leng={"javascript"}
              code={
                ' useEffect(() => {client.get("?_limit=10").then((response) => {setPosts(response.data);});}, [])'
              }
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div>
          <div className='header'>
            <h4>POST</h4>
          </div>
          <div className='axios_section_body'>
            <p>
              You use a POST request to send data to an endpoint. It works
              similarly to a GET request, except that the function created to
              perform this task will be triggered when the form is submitted.
            </p>
            <p>
              This takes an object to send the data in and also adds the data to
              the state by spreading the previous data and then adding the new
              data:
            </p>

            <CodeBlock
              leng={"javascript"}
              code={
                " client.post('', {title: title,body: body,}).then((response) => {setPosts([response.data, ...posts]);});"
              }
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div>
          <div className='header'>
            <h4>DELETE</h4>
          </div>
          <div className='axios_section_body'>
            <p>
              As the name implies, you use this to delete specific data from
              your endpoint/API as well as your UI – DELETE can handle both.
            </p>

            <CodeBlock
              leng={"javascript"}
              code={
                "  const deletePost = (id) => {client.delete(`${id}`); setPosts(posts.filter((post) => {return post.id !== id;}));};"
              }
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div>
          <div className='header'>
            <h4>Requests with Async/Await</h4>
          </div>
          <div className='axios_section_body'>
            <p>
              To use async/await, first call async in the function. Then add the
              await syntax in front of the function when making a request and
              expecting a response to wait until the promise settles with the
              result.
            </p>
            <p>
              When you use async/await, all of your Axios requests will look
              like this:
            </p>
            <div>
              <div axios_section_box>
                <div className='header'>
                  <h4>Async/Await GET</h4>
                </div>
                <div className='axios_section_body'>
                  <CodeBlock
                    leng={"javascript"}
                    code={
                      "   useEffect(() => {const fetchPost = async () => {let response = await client.get('?_limit=10'); setPosts(response.data);}; fetchPost();}, []);"
                    }
                  />
                </div>
              </div>
              <div axios_section_box>
                <div className='header'>
                  <h4>Async/Await Post</h4>
                </div>
                <div className='axios_section_body'>
                  <CodeBlock
                    leng={"javascript"}
                    code={
                      " const addPosts = async (title, body) => {let response = await client.post('', {title: title,body: body,});}"
                    }
                  />
                </div>
              </div>
              <div axios_section_box>
                <div className='header'>
                  <h4>Async/Await DELETE</h4>
                </div>
                <div className='axios_section_body'>
                  <CodeBlock
                    leng={"javascript"}
                    code={
                      "const deletePost = async (id) => {await client.delete(`${id}`); setPosts(posts.filter((post) => {return post.id !== id;}));};"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div className='header'>
          <h4>How to Handle Errors</h4>
        </div>
        <div className='axios_section_body'>
          <p>
            When consuming data from an API, it is always recommended that we
            handle errors to help show the type of error we get. These errors
            may occur as a result of us passing incorrect data, making a request
            to the incorrect API, or experiencing a network error.
          </p>
          <p>
            We can handle errors in Axios by using the .then() and .catch()
            methods, or by using the try...catch block for async/await Axios
            requests.
          </p>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div>
          <div className='header'>
            <h4>How to Handle Errors in Axios with the .catch Method</h4>
          </div>
          <div className='axios_section_body'>
            <p>
              You can implement this by attaching a .catch() method to the
              .then() method to handle errors. Suppose the .then() method fails:
            </p>

            <CodeBlock
              leng={"javascript"}
              code={
                "useEffect(() => {client.get('?_limit=10').then((response) => {setPosts(response.data);}) .catch((error) => {console.log(error);});}, []);"
              }
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='axios_section_box'>
        <div>
          <div className='header'>
            <h4>How to Handle Errors in Axios with the .catch Method</h4>
          </div>
          <div className='axios_section_body'>
            <p>
              For the async/await scenario, the try...catch block will look like
              this:
            </p>

            <CodeBlock
              leng={"javascript"}
              code={
                "useEffect(() => {const fetchPost = async () => {try {let response = await client.get('?_limit=10'); setPosts(response.data);} catch (error) {console.log(error);}}; fetchPost();}, []);"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactAxios;
