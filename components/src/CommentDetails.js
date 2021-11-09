import React from 'react';

const CommentDetails=(props)=>{
return (
   <div className="comment">
       <a className="avatar" href="/">
           <img alt ="avatar" src={props.avatar} />
       </a>
       <div className ="content">
           <a href ="/" className="author">
               {props.author}
           </a>
           <div className ="metadata">
               <span className ="date">{props.time}</span>
           </div>
           <div className="text">{props.post}</div>
       </div>
   </div>
);
};
export default CommentDetails;