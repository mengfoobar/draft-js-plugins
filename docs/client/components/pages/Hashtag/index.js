import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleHashtagEditor from './SimpleHashtagEditor';
import CustomHashtagEditor from './CustomHashtagEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleHashtagEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomHashtagEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomHashtagEditor/styles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Heading level={ 2 }>Hashtag</Heading>
          <div className={ styles.root }>Hashtag</div>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleHashtagEditor />
          <Code code={ simpleExampleCode } name="SimpleHashtagEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Hashtag Example</Heading>
          <CustomHashtagEditor />
          <Code code={ customExampleCode } name="CustomHashtagEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Parameters</Heading>
          <div>
            <div className={ styles.paramName }>theme</div>
            <span>Map of CSS classes to style the plugin.</span>
            <table className={ styles.themeTable }>
              <tr>
                <td className={ styles.themeProperty }>hashtag</td>
                <td>CSS class to be applied to Hashtag text</td>
              </tr>
            </table>
          </div>
        </Container>
      </div>

    );
  }
}