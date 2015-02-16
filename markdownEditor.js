// Define the editor
var converter = new Showdown.converter();

var MarkdownEditor = React.createClass({
    displayName: "MarkdownEditor",
    getInitialState: function(){
        return {value:""};
    },
    handleChange: function(event){
        this.setState({value: event.target.value})
    },
    richContent: function(){
        str = converter.makeHtml(this.state.value);
        return str.replace(/\n/g, '');
    },
    render: function() {
        var value = this.state.value;
        var richContent = this.richContent();
        console.log(richContent)
        var style = this.props.style;
        style.display = "flex";
        style.flexDirection = "row"
        var textareaStyle = {
            width:"50%",
            padding:10,
            border:"1px solid black",
            fontFamily: "inherit",
            fontSize: "inherit"
        };
        var previewStyle = {
            width:"50%",
            padding:10,
            border:"1px solid black",
            whiteSpace:"pre-wrap",
            wordWrap:"break-word",
            overflowY:"scroll"
        };
        return (
            <div className="MarkdownEditor" style={style} onChange={this.handleChange}>
                <textarea style={textareaStyle} onChange={this.handleChange} value={value} />
                <div style={previewStyle} dangerouslySetInnerHTML={{__html: richContent}} />
            </div>
        );
    }
});

// Setup the page
var containerStyle = {
    display:"flex",
    justifyContent:"center",
    width:"100%"
};

var editorStyle = {
    height:400,
    width:800,
    border:"1px solid black",
    fontFamily: "proxima-nova, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif"
};

var content = (
    <div style={containerStyle}>
        <MarkdownEditor style = {editorStyle}/>
    </div>
);
React.render(
    content,
    document.getElementById('content')
);