import logo from './logo.svg';
import './App.css';
import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button, Grid, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",

    };
    this.handleChange = this.handleChange.bind(this);
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value,
    });
    console.log("foo2");
  }

  renderMarkdown(){
    return(
      <div className='markdown'>
      <Grid container spacing={1} >
        <Grid item xs={12} align="left">
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={this.state.input} />
        </Grid>
      </Grid>
      </div>
    )
  }

  render(){
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component={'span'} variant={'h3'}>
            Markdown Preview
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        <TextareaAutosize maxRows={8} aria-label='textarea' placeholder='Enter Markdown' minRows={3} style={{width: 600}} onChange={(event) => {this.handleChange(event)}} />
        <Typography component={'span'} variant={'body2'}>{this.renderMarkdown()}</Typography>
        </Grid>
      </Grid>
    </div>
  )
  }
  
}

export default App;
