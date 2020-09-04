import React from 'react';

class Api extends React.Component {
    state = {
        paleta: []
    };
  
    componentDidMount() {
        
        var myHeaders = new Headers();

        var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };
        
        fetch('https://www.colr.org/json/colors/random/65', myInit)
            .then(res => res.json())
            .then(res => {
                const paleta = res.colors.map((item) => item.hex).filter( (item) => item) 
                this.setState({paleta});
            });
    }
  
    render() {
        let content = '' ;
  
        if (this.state.paleta.length !== 0) {
            content = (<div className="container">
                {this.state.paleta.map(item => (
                    <div style={{backgroundColor: "#" + item}}><p>#{item}</p></div>
                ))}
                </div>)
        }
        return (
            <div  className="conteudo">
                <div className="lateral"></div>
            {content}
            </div>
        );
    }
  }
  
  export default Api;
