import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './MarkdownPreviewer.css';
const marked = require('marked');

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

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

                    <div className="row content">
                    <div className="col-md-6 panel editor">
                        <div className="editor__title editor__title-dark">Your markdown</div>
                                    <textarea className="editor__textarea editor__textarea-dark" name="editor" id="editor" cols="30" rows="10" value={this.state.markdown} onChange={this.updateMarkdown}></textarea>
                                
                    </div>
                    <div className="col-md-6 panel previewer">
                        <div className="preview__title">Your result</div>
                            <div className="preview__text preview__text-light" id="preview" dangerouslySetInnerHTML={{__html: marked(DOMPurify.sanitize(markdown), {breaks:true})}} />
                        </div>
                </div>


        );
    }
}

export default MarkdownPreviewer;