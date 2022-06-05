import React, { Suspense } from "react";
import Loader from "react-loaders";
import "./environmentVariables.css";
function EnvironmentVariables() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='envPage_main_container'>
        <div className='envPage_section_header'>
          <h3>What are environment variables?</h3>
        </div>
        <div className='envPage_first_section_body'>
          <p>
            Wikipedia says, An environment variable is a dynamic-named value
            that can affect the way running processes will behave on a computer.
            They are part of the environment in which a process runs. For
            example, a running process can query the value of the TEMP
            environment variable to discover a suitable location to store
            temporary files, or the HOME or USERPROFILE variable to find the
            directory structure owned by the user running the process.
          </p>
          <p>
            <span className='envPage_span'>NOTE:</span> the way that subscibed
            here will anly work if you use create-react-app. create-react-app
            has the support for environment variables by default.
          </p>
        </div>
        <div className='envPage_second_section'>
          <div className='envPage_section_header'>
            <h3> Creating the environment variables</h3>
          </div>
          <div className='envPage_second_section_body'>
            <ul>
              <li>
                <p>
                  <span className='envPage_span'>1:</span>Create a .env file in
                  your root project
                </p>
              </li>
              <li>
                <p>
                  <span className='envPage_span'>2:</span>All environment
                  variables must start with the prefix REACT_APP_
                </p>
              </li>
              <li className='envPage_code_li'>
                <pre>
                  <p>
                    <code>
                      REACT_APP_USERNAME = manitej REACT_APP_PASSWORD = pass1234
                    </code>
                  </p>
                </pre>
              </li>
            </ul>
          </div>
        </div>
        <div className='envPage_third_section'>
          <div className='envPage_section_header'>
            <h3> Using environment variables</h3>
          </div>
          <div className='envPage_third_section_body'>
            <p>
              If you want to use an environment variable you can import it to
              any component like below
            </p>
            <pre>
              <p className='envPage_code_p'>
                <code>
                  const REACT_APP_USERNAME", "REACT_APP_PASSWORD" = process.env
                </code>
              </p>
            </pre>
            <p>
              Now instead of writing the secret key hardcoded use the secret
              variable.
            </p>
            <p>
              <span className='envPage_span'>NOTE:</span> Add the .env file to
              your .gitignore file before pushing to GitHub
            </p>
          </div>
          <div className='envPage_fourth_section'>
            <div className='envPage_section_header'>
              <h3>Deployment</h3>
            </div>
            <div className='envPage_fourth_section_body'>
              <p>
                During the development mode, the app works fine without any
                issues but if you want to deploy your app to the public you need
                to add configuration to your site.
              </p>
              <p>
                In general, you need to go to the setting and add the
                environmental variables to the site, the location is varied
                depending on the deployment service .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default EnvironmentVariables;
