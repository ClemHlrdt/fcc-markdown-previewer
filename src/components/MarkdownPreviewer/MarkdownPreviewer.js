import React, { Component } from 'react';
import './MarkdownPreviewer.css';
const marked = require('marked');

class MarkdownPreviewer extends Component {
    state = { 
        markdown:"# Welcome to Markdown Previewer\n## Markdown is a lightweight markup language\n\n[Learn basic syntax now](https://www.markdownguide.org/basic-syntax/)\n\nInline `code` has `back-ticks around` it\n\nYou can input some code:\n\n```javascript\nconsole.log('Hello World');\n```\n\nYou display lists of items\n1. Buy bread\n1. Cut bread\n1. Add ingredients\n\n### Add blockquotes\n > blockquote\n### Images\n![The markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/100px-Markdown-mark.svg.png)\n### Bold text\nThis is **bold**"
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
                        <div className="col-md-6 panel-container">
                            <div className="panel-container__title panel-container__title-dark">
                                Your markdown
                            </div>
                            <textarea className="panel__textarea panel__textarea-dark" name="editor" id="editor" cols="30" rows="10" value={this.state.markdown} onChange={this.updateMarkdown}></textarea>
                        </div>
                        <div className="col-md-6 panel-container">
                            <div className="panel-container__title panel-container__title-dark">Your result</div>
                            <div className="panel__text panel__text-light" id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {breaks:true})}} />
                        </div>
                </div>


        );
    }
}

export default MarkdownPreviewer;