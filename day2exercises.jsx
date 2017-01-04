



function UserInfo(props){
  return(
    {/* JSX HERE!! */ }
      <div className="UserInfo">
        <Avatar />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>    
  )
}

function Avatar(props){
  return(
    {/* JSX HERE!! */ }
      <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />    
  )
}

function CommentBody(props){
  return(
    {/* JSX HERE!! */ }
      <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>    
  )
}

var Badges = React.createClass({
  render: function(){
    return(
        <div className="badge">{props.userBadge[1]}</div>
    )
  }
})
// function Badges(props){
//   return(
//     {/* JSX HERE!! */ }
//   )
// }

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author="Something"/>
      <CommentBody />
      <div className="UserBadges">
        <Badge />
        
        <div className="badge">{props.userBadge[2]}</div>
      </div>
    </div>
  );
}
