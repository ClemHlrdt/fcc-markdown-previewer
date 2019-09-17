import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './MarkdownPreviewer.css';
const marked = require('marked');

class MarkdownPreviewer extends Component {
    state = { 
        markdown:"# Welcome to Markdown Previewer\n## Markdown is fun\n\n[Learn basic syntax now](https://www.markdownguide.org/basic-syntax/)\nInline `code` has `back-ticks around` it\nYou can input some code\n```javascript\nconsole.log('Hello World')\n```\nYou display lists of items\n1. Buy bread\n1. Cut bread\n1. Add ingredients\n### Add blockquotes\n> a blockquote\n### Images\n![The markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/200px-Markdown-mark.svg.png)\n### Bold text\nThis is **bold**"
     }

    updateMarkdown = (evt) => {
        this.setState({
            markdown: evt.target.value
        })
    }

    render() {
        const markdown = this.state.markdown;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 panel editor">
                        <Form>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="editor" id="editor" cols="30" rows="28" value={this.state.markdown} onChange={this.updateMarkdown}/>
                                </FormGroup>
                            {/* <textarea name="editor" id="editor" cols="30" rows="10" ></textarea> */}
                        </Form>
                    </div>
                    <div className="col-md-6 panel previewer">
                        <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {breaks:true,sanitize: true})}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MarkdownPreviewer;