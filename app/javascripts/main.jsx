
//var AccountBadge = accountBadge.AccountBadge;

var AccountBadge = minreact.SimpleComponent;

var Main = React.createClass({
    render: function() {
        var style_main  = 
            {padding: '15px', backgroundColor:'red', width:'1500px', height:'800px'};
        var style_left  = 
            {padding: '10px', backgroundColor:'blue', float: 'left'};
        var style_right = 
            {padding: '10px', backgroundColor:'white', width:'250px', height:'80px', float: 'right'};
        return (
            <div style={style_main}>
                <div style={style_left}/>
                <div style={style_right}>
                    <AccountBadge web3={web3}/>
                </div>
            </div>);
    }
});


window.onload = function() {
    React.render(<Main />, document.getElementById('react-mount'));
};
